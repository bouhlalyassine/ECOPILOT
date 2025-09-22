import { NextResponse } from 'next/server';
import { requireSession } from '@/lib/session';
import { z } from 'zod';
import { getDashboardSummary } from '@/services/dashboard';
import puppeteer from 'puppeteer';
import { Document, Packer, Paragraph, TextRun } from 'docx';

const reportSchema = z.object({
  format: z.enum(['pdf', 'docx']).default('pdf'),
  scenarioId: z.string().optional(),
  period: z
    .object({
      start: z.string().optional(),
      end: z.string().optional()
    })
    .optional()
});

export async function POST(request: Request) {
  try {
    const session = await requireSession();
    const body = await request.json();
    const parsed = reportSchema.parse(body);

    const summary = await getDashboardSummary({
      organizationId: session.user.organizationId,
      scenarioId: parsed.scenarioId,
      startDate: parsed.period?.start ? new Date(parsed.period.start) : undefined,
      endDate: parsed.period?.end ? new Date(parsed.period.end) : undefined
    });

    if (parsed.format === 'pdf') {
      const html = `<!DOCTYPE html>
        <html lang="fr">
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: Arial, sans-serif; padding: 32px; }
              h1 { color: #1E88E5; }
              table { width: 100%; border-collapse: collapse; margin-top: 16px; }
              td, th { border: 1px solid #ccc; padding: 8px; }
            </style>
          </head>
          <body>
            <h1>Rapport RSE - ${new Date().toLocaleDateString()}</h1>
            <h2>KPIs clés</h2>
            <table>
              <tr><th>Indicateur</th><th>Valeur</th></tr>
              <tr><td>Énergie baseline (kWh)</td><td>${summary.kpis.energyTotalBaseline.toFixed(2)}</td></tr>
              <tr><td>Énergie simulée (kWh)</td><td>${summary.kpis.energyTotalSimulated.toFixed(2)}</td></tr>
              <tr><td>Eau totale (m³)</td><td>${summary.kpis.waterTotal.toFixed(2)}</td></tr>
              <tr><td>Déchets baseline (kg)</td><td>${summary.kpis.wasteTotalBaseline.toFixed(2)}</td></tr>
              <tr><td>tCO2e simulé</td><td>${summary.kpis.co2eSimulated.toFixed(2)}</td></tr>
              <tr><td>Production (kg)</td><td>${summary.kpis.productionKg.toFixed(2)}</td></tr>
            </table>
            <p>Référentiel sélectionné: ${parsed.scenarioId ? 'Scénario simulé' : 'Baseline'}.</p>
          </body>
        </html>`;

      const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: 'new'
      });
      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: 'networkidle0' });
      const pdf = await page.pdf({ format: 'A4' });
      await browser.close();

      return NextResponse.json({
        filename: 'rapport-rse.pdf',
        file: pdf.toString('base64'),
        mimeType: 'application/pdf'
      });
    }

    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: 'Rapport RSE Ecopilot', bold: true, size: 32 })
              ]
            }),
            new Paragraph({ text: `Période: ${parsed.period?.start ?? 'N/A'} - ${parsed.period?.end ?? 'N/A'}` }),
            new Paragraph({ text: `Énergie baseline (kWh): ${summary.kpis.energyTotalBaseline.toFixed(2)}` }),
            new Paragraph({ text: `tCO2e simulé: ${summary.kpis.co2eSimulated.toFixed(2)}` }),
            new Paragraph({ text: 'Ce document est un aperçu généré automatiquement.' })
          ]
        }
      ]
    });

    const buffer = await Packer.toBuffer(doc);

    return NextResponse.json({
      filename: 'rapport-rse.docx',
      file: buffer.toString('base64'),
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    });
  } catch (error) {
    const status = error instanceof Error && 'status' in error ? (error as any).status : 500;
    const message = error instanceof Error ? error.message : 'Internal error';
    return new NextResponse(message, { status });
  }
}
