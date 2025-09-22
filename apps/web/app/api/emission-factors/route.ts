import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { AppRole, isRoleAtLeast } from '@/lib/roles';
import { z } from 'zod';

const emissionFactorSchema = z.object({
  module: z.enum(['energy', 'waste']),
  sourceType: z.string().min(1),
  unit: z.string().min(1),
  kgco2ePerUnit: z.number().positive(),
  validFrom: z.string().datetime().optional(),
  validTo: z.string().datetime().optional()
});

export async function GET() {
  try {
    const session = await requireSession();
    const factors = await prisma.emissionFactor.findMany({
      where: { organizationId: session.user.organizationId }
    });
    return NextResponse.json(factors);
  } catch (error) {
    const status = error instanceof Error && 'status' in error ? (error as any).status : 500;
    const message = error instanceof Error ? error.message : 'Internal error';
    return new NextResponse(message, { status });
  }
}

export async function POST(request: Request) {
  try {
    const session = await requireSession();

    if (!isRoleAtLeast(session.user.role as AppRole, 'ADMIN')) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    const body = await request.json();
    const parsed = emissionFactorSchema.parse(body);

    const factor = await prisma.emissionFactor.create({
      data: {
        organizationId: session.user.organizationId,
        module: parsed.module,
        sourceType: parsed.sourceType,
        unit: parsed.unit,
        kgco2ePerUnit: parsed.kgco2ePerUnit,
        validFrom: parsed.validFrom ? new Date(parsed.validFrom) : undefined,
        validTo: parsed.validTo ? new Date(parsed.validTo) : undefined
      }
    });

    return NextResponse.json(factor, { status: 201 });
  } catch (error) {
    const status = error instanceof Error && 'status' in error ? (error as any).status : 500;
    const message = error instanceof Error ? error.message : 'Internal error';
    return new NextResponse(message, { status });
  }
}
