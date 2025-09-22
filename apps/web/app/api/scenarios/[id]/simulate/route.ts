import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { getDashboardSummary } from '@/services/dashboard';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await requireSession();
    const scenario = await prisma.scenario.findUnique({ where: { id: params.id } });

    if (!scenario || scenario.organizationId !== session.user.organizationId) {
      return new NextResponse('Not found', { status: 404 });
    }

    const summary = await getDashboardSummary({
      organizationId: session.user.organizationId,
      scenarioId: params.id
    });

    return NextResponse.json(summary);
  } catch (error) {
    const status = error instanceof Error && 'status' in error ? (error as any).status : 500;
    const message = error instanceof Error ? error.message : 'Internal error';
    return new NextResponse(message, { status });
  }
}
