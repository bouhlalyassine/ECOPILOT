import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { AppRole, isRoleAtLeast } from '@/lib/roles';
import { z } from 'zod';

const reductionSchema = z.object({
  module: z.enum(['energy', 'waste']),
  siteId: z.string().cuid().optional(),
  filterField: z.string().min(1),
  filterValue: z.string().min(1),
  reductionType: z.enum(['percentage', 'absolute']),
  reductionValue: z.number().nonnegative()
});

const scenarioSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  applyFromCampaign: z.string().regex(/^\d{2}\/\d{2}$/),
  active: z.boolean().default(false),
  reductions: z.array(reductionSchema)
});

export async function GET() {
  try {
    const session = await requireSession();
    const scenarios = await prisma.scenario.findMany({
      where: { organizationId: session.user.organizationId },
      include: { reductions: true }
    });
    return NextResponse.json(scenarios);
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
    const parsed = scenarioSchema.parse(body);

    const scenario = await prisma.scenario.create({
      data: {
        organizationId: session.user.organizationId,
        name: parsed.name,
        description: parsed.description,
        applyFromCampaign: parsed.applyFromCampaign,
        active: parsed.active,
        reductions: {
          create: parsed.reductions.map((reduction) => ({
            module: reduction.module,
            siteId: reduction.siteId,
            filterField: reduction.filterField,
            filterValue: reduction.filterValue,
            reductionType: reduction.reductionType,
            reductionValue: reduction.reductionValue
          }))
        }
      },
      include: { reductions: true }
    });

    if (parsed.active) {
      await prisma.scenario.updateMany({
        where: {
          organizationId: session.user.organizationId,
          id: { not: scenario.id }
        },
        data: { active: false }
      });
    }

    return NextResponse.json(scenario, { status: 201 });
  } catch (error) {
    const status = error instanceof Error && 'status' in error ? (error as any).status : 500;
    const message = error instanceof Error ? error.message : 'Internal error';
    return new NextResponse(message, { status });
  }
}
