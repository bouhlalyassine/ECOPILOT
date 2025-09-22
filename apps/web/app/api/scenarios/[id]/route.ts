import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { AppRole, isRoleAtLeast } from '@/lib/roles';
import { z } from 'zod';

const updateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional().nullable(),
  applyFromCampaign: z.string().regex(/^\d{2}\/\d{2}$/).optional(),
  active: z.boolean().optional(),
  reductions: z.array(
    z.object({
      id: z.string().optional(),
      module: z.enum(['energy', 'waste']),
      siteId: z.string().cuid().optional().nullable(),
      filterField: z.string(),
      filterValue: z.string(),
      reductionType: z.enum(['percentage', 'absolute']),
      reductionValue: z.number().nonnegative()
    })
  ).optional()
});

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await requireSession();

    if (!isRoleAtLeast(session.user.role as AppRole, 'ADMIN')) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    const body = await request.json();
    const parsed = updateSchema.parse(body);

    const existing = await prisma.scenario.findUnique({
      where: { id: params.id },
      include: { reductions: true }
    });

    if (!existing || existing.organizationId !== session.user.organizationId) {
      return new NextResponse('Not found', { status: 404 });
    }

    const scenario = await prisma.scenario.update({
      where: { id: params.id },
      data: {
        name: parsed.name ?? existing.name,
        description: parsed.description ?? existing.description,
        applyFromCampaign: parsed.applyFromCampaign ?? existing.applyFromCampaign,
        active: parsed.active ?? existing.active,
        ...(parsed.reductions && {
          reductions: {
            deleteMany: {},
            create: parsed.reductions.map((reduction) => ({
              module: reduction.module,
              siteId: reduction.siteId ?? undefined,
              filterField: reduction.filterField,
              filterValue: reduction.filterValue,
              reductionType: reduction.reductionType,
              reductionValue: reduction.reductionValue
            }))
          }
        })
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

    return NextResponse.json(scenario);
  } catch (error) {
    const status = error instanceof Error && 'status' in error ? (error as any).status : 500;
    const message = error instanceof Error ? error.message : 'Internal error';
    return new NextResponse(message, { status });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await requireSession();
    if (!isRoleAtLeast(session.user.role as AppRole, 'ADMIN')) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    const existing = await prisma.scenario.findUnique({ where: { id: params.id } });

    if (!existing || existing.organizationId !== session.user.organizationId) {
      return new NextResponse('Not found', { status: 404 });
    }

    await prisma.scenario.delete({ where: { id: params.id } });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    const status = error instanceof Error && 'status' in error ? (error as any).status : 500;
    const message = error instanceof Error ? error.message : 'Internal error';
    return new NextResponse(message, { status });
  }
}
