import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { AppRole, isRoleAtLeast } from '@/lib/roles';
import { z } from 'zod';

const siteUpdateSchema = z.object({
  name: z.string().optional(),
  societe: z.string().optional().nullable(),
  bu: z.string().optional().nullable(),
  activite: z.string().optional().nullable(),
  filiere: z.string().optional().nullable(),
  region: z.string().optional().nullable()
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
    const parsed = siteUpdateSchema.parse(body);

    const existing = await prisma.site.findUnique({ where: { id: params.id } });

    if (!existing || existing.organizationId !== session.user.organizationId) {
      return new NextResponse('Not found', { status: 404 });
    }

    const site = await prisma.site.update({
      where: { id: params.id },
      data: parsed
    });

    return NextResponse.json(site);
  } catch (error) {
    const status = error instanceof Error && 'status' in error ? (error as any).status : 500;
    const message = error instanceof Error ? error.message : 'Internal error';
    return new NextResponse(message, { status });
  }
}
