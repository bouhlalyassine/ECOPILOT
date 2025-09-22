import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { AppRole, isRoleAtLeast } from '@/lib/roles';
import { z } from 'zod';

const organizationSchema = z.object({
  name: z.string().min(1),
  settings: z
    .object({
      campaignStartMonth: z.number().int().min(1).max(12).default(9),
      defaultLocale: z.string().default('fr')
    })
    .partial()
});

export async function GET() {
  try {
    const session = await requireSession();
    const organizations = await prisma.organization.findMany({
      where: { id: session.user.organizationId }
    });

    return NextResponse.json(organizations);
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
    const parsed = organizationSchema.parse(body);

    const organization = await prisma.organization.create({
      data: {
        name: parsed.name,
        settings: parsed.settings ?? {}
      }
    });

    return NextResponse.json(organization, { status: 201 });
  } catch (error) {
    const status = error instanceof Error && 'status' in error ? (error as any).status : 500;
    const message = error instanceof Error ? error.message : 'Internal error';
    return new NextResponse(message, { status });
  }
}
