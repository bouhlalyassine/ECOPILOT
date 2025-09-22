import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { AppRole, isRoleAtLeast } from '@/lib/roles';
import { z } from 'zod';

const energySchema = z.object({
  siteId: z.string().cuid(),
  year: z.number().int(),
  month: z.number().int().min(1).max(12),
  type: z.string().min(1),
  unit: z.string().min(1),
  value: z.number().nonnegative(),
  source: z.string().optional()
});

export async function GET() {
  try {
    const session = await requireSession();
    const records = await prisma.energyRecord.findMany({
      where: { site: { organizationId: session.user.organizationId } },
      orderBy: { period: 'desc' }
    });
    return NextResponse.json(records);
  } catch (error) {
    const status = error instanceof Error && 'status' in error ? (error as any).status : 500;
    const message = error instanceof Error ? error.message : 'Internal error';
    return new NextResponse(message, { status });
  }
}

export async function POST(request: Request) {
  try {
    const session = await requireSession();

    if (!isRoleAtLeast(session.user.role as AppRole, 'AGENT_SAISIE')) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    const body = await request.json();
    const parsed = energySchema.parse(body);

    const site = await prisma.site.findUnique({ where: { id: parsed.siteId } });

    if (!site || site.organizationId !== session.user.organizationId) {
      return new NextResponse('Invalid site', { status: 400 });
    }

    const period = new Date(parsed.year, parsed.month - 1, 1);

    const record = await prisma.energyRecord.create({
      data: {
        year: parsed.year,
        month: parsed.month,
        period,
        siteId: parsed.siteId,
        type: parsed.type,
        unit: parsed.unit,
        value: parsed.value,
        source: parsed.source,
        createdById: session.user.id
      }
    });

    return NextResponse.json(record, { status: 201 });
  } catch (error) {
    const status = error instanceof Error && 'status' in error ? (error as any).status : 500;
    const message = error instanceof Error ? error.message : 'Internal error';
    return new NextResponse(message, { status });
  }
}
