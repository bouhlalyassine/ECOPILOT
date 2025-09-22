import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { AppRole, isRoleAtLeast } from '@/lib/roles';
import { z } from 'zod';

const siteSchema = z.object({
  name: z.string().min(1),
  societe: z.string().optional(),
  bu: z.string().optional(),
  activite: z.string().optional(),
  filiere: z.string().optional(),
  region: z.string().optional()
});

export async function GET() {
  try {
    const session = await requireSession();

    const sites = await prisma.site.findMany({
      where: { organizationId: session.user.organizationId }
    });

    return NextResponse.json(sites);
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
    const parsed = siteSchema.parse(body);

    const site = await prisma.site.create({
      data: {
        ...parsed,
        organizationId: session.user.organizationId
      }
    });

    return NextResponse.json(site, { status: 201 });
  } catch (error) {
    const status = error instanceof Error && 'status' in error ? (error as any).status : 500;
    const message = error instanceof Error ? error.message : 'Internal error';
    return new NextResponse(message, { status });
  }
}
