import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { AppRole, isRoleAtLeast } from '@/lib/roles';
import { z } from 'zod';

const updateSchema = z.object({
  status: z.enum(['DRAFT', 'PENDING_REVIEW', 'APPROVED', 'REJECTED']).optional(),
  value: z.number().optional()
});

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await requireSession();
    const body = await request.json();
    const parsed = updateSchema.parse(body);

    const record = await prisma.wasteRecord.findUnique({ where: { id: params.id } });
    if (!record) {
      return new NextResponse('Not found', { status: 404 });
    }

    const site = await prisma.site.findUnique({ where: { id: record.siteId } });
    if (!site || site.organizationId !== session.user.organizationId) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    if (parsed.status) {
      if (parsed.status === 'APPROVED' || parsed.status === 'REJECTED') {
        if (!isRoleAtLeast(session.user.role as AppRole, 'USER')) {
          return new NextResponse('Forbidden', { status: 403 });
        }
      }
    }

    const updated = await prisma.wasteRecord.update({
      where: { id: params.id },
      data: {
        value: parsed.value ?? record.value,
        status: parsed.status ?? record.status,
        validatedById:
          parsed.status === 'APPROVED' || parsed.status === 'REJECTED'
            ? session.user.id
            : record.validatedById,
        validatedAt:
          parsed.status === 'APPROVED' || parsed.status === 'REJECTED'
            ? new Date()
            : record.validatedAt
      }
    });

    return NextResponse.json(updated);
  } catch (error) {
    const status = error instanceof Error && 'status' in error ? (error as any).status : 500;
    const message = error instanceof Error ? error.message : 'Internal error';
    return new NextResponse(message, { status });
  }
}
