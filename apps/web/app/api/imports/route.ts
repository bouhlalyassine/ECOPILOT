import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireSession } from '@/lib/session';
import { AppRole, isRoleAtLeast } from '@/lib/roles';
import { z } from 'zod';
import * as XLSX from 'xlsx';

const importSchema = z.object({
  mode: z.enum(['preview', 'commit']).default('preview'),
  file: z.string()
});

function parseNumber(value: unknown): number {
  const numeric = typeof value === 'string' ? Number(value.replace(',', '.')) : Number(value);
  if (Number.isNaN(numeric)) {
    throw new Error(`Invalid numeric value: ${value}`);
  }
  return numeric;
}

export async function POST(request: Request) {
  try {
    const session = await requireSession();

    if (!isRoleAtLeast(session.user.role as AppRole, 'AGENT_SAISIE')) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    const body = await request.json();
    const parsed = importSchema.parse(body);

    const workbook = XLSX.read(Buffer.from(parsed.file, 'base64'), { type: 'buffer' });

    const sheets = {
      energie: XLSX.utils.sheet_to_json(workbook.Sheets['Energie'] ?? {}),
      eau: XLSX.utils.sheet_to_json(workbook.Sheets['Eau'] ?? {}),
      dechets: XLSX.utils.sheet_to_json(workbook.Sheets['Dechets'] ?? {}),
      social: XLSX.utils.sheet_to_json(workbook.Sheets['Social'] ?? {}),
      production: XLSX.utils.sheet_to_json(workbook.Sheets['Production'] ?? {}),
      details: XLSX.utils.sheet_to_json(workbook.Sheets['Details_Site'] ?? {})
    } as const;

    if (parsed.mode === 'preview') {
      const preview = Object.fromEntries(
        Object.entries(sheets).map(([key, rows]) => [key, (rows as any[]).slice(0, 5)])
      );
      return NextResponse.json({ preview });
    }

    await prisma.$transaction(async (tx) => {
      const siteCache = new Map<string, string>();

      const existingSites = await tx.site.findMany({
        where: { organizationId: session.user.organizationId }
      });
      existingSites.forEach((site) => siteCache.set(site.name.toLowerCase(), site.id));

      for (const row of sheets.details as any[]) {
        const name = String(row['Site'] ?? '').trim();
        if (!name) continue;
        const lower = name.toLowerCase();
        if (!siteCache.has(lower)) {
          const created = await tx.site.create({
            data: {
              name,
              organizationId: session.user.organizationId,
              societe: row['Société'] ?? null,
              bu: row['BU'] ?? null,
              activite: row['Activité'] ?? null,
              filiere: row['Filière'] ?? null,
              region: row['Région'] ?? null
            }
          });
          siteCache.set(lower, created.id);
        }
      }

      const getSiteId = (siteName: unknown) => {
        const name = String(siteName ?? '').trim();
        const lower = name.toLowerCase();
        const siteId = siteCache.get(lower);
        if (!siteId) {
          throw new Error(`Unknown site: ${name}`);
        }
        return siteId;
      };

      for (const row of sheets.energie as any[]) {
        const year = parseNumber(row['Année']);
        const month = parseNumber(row['Mois']);
        const siteId = getSiteId(row['Site']);
        await tx.energyRecord.create({
          data: {
            year,
            month,
            period: new Date(year, month - 1, 1),
            siteId,
            type: String(row['Type'] ?? ''),
            unit: String(row['Unité'] ?? ''),
            value: parseNumber(row['Valeur']),
            createdById: session.user.id,
            status: 'DRAFT'
          }
        });
      }

      for (const row of sheets.eau as any[]) {
        const year = parseNumber(row['Année']);
        const month = parseNumber(row['Mois']);
        const siteId = getSiteId(row['Site']);
        await tx.waterRecord.create({
          data: {
            year,
            month,
            period: new Date(year, month - 1, 1),
            siteId,
            familleCulture: String(row['Famille de culture'] ?? ''),
            variete: String(row['Variété'] ?? ''),
            eau_m3: parseNumber(row['EAU_m3']),
            createdById: session.user.id,
            status: 'DRAFT'
          }
        });
      }

      for (const row of sheets.dechets as any[]) {
        const year = parseNumber(row['Année']);
        const month = parseNumber(row['Mois']);
        const siteId = getSiteId(row['Site']);
        await tx.wasteRecord.create({
          data: {
            year,
            month,
            period: new Date(year, month - 1, 1),
            siteId,
            categorie: String(row['Categorie_Dechets'] ?? ''),
            unit: String(row['Unité'] ?? ''),
            value: parseNumber(row['Valeur']),
            createdById: session.user.id,
            status: 'DRAFT'
          }
        });
      }

      for (const row of sheets.social as any[]) {
        const year = parseNumber(row['Année']);
        const month = parseNumber(row['Mois']);
        const siteId = getSiteId(row['Site']);
        await tx.socialAction.create({
          data: {
            year,
            month,
            period: new Date(year, month - 1, 1),
            siteId,
            action: String(row['Action'] ?? ''),
            budget: parseNumber(row['Budget']),
            beneficiaries: parseNumber(row['Nombre de personnes beneficières']),
            createdById: session.user.id,
            status: 'DRAFT'
          }
        });
      }

      for (const row of sheets.production as any[]) {
        const year = parseNumber(row['Année']);
        const month = parseNumber(row['Mois']);
        const siteId = getSiteId(row['Site']);
        await tx.productionRecord.create({
          data: {
            year,
            month,
            period: new Date(year, month - 1, 1),
            siteId,
            familleCulture: String(row['Famille de culture'] ?? ''),
            variete: String(row['Variété'] ?? ''),
            sup_ha: parseNumber(row['SUP_ha']),
            prod_kg: parseNumber(row['PROD_kg']),
            createdById: session.user.id,
            status: 'DRAFT'
          }
        });
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const status = error instanceof Error && 'status' in error ? (error as any).status : 500;
    const message = error instanceof Error ? error.message : 'Internal error';
    return new NextResponse(message, { status });
  }
}
