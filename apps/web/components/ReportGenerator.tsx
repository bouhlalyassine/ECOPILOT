'use client';

import { useState } from 'react';

interface ReportGeneratorProps {
  scenarios: { id: string; name: string }[];
}

export function ReportGenerator({ scenarios }: ReportGeneratorProps) {
  const [format, setFormat] = useState<'pdf' | 'docx'>('pdf');
  const [scenarioId, setScenarioId] = useState<string>('');
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setDownloadUrl(null);

    const response = await fetch('/api/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ format, scenarioId: scenarioId || undefined })
    });

    setLoading(false);

    if (!response.ok) {
      setError(await response.text());
      return;
    }

    const data = await response.json();
    const binary = atob(data.file);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    const href = URL.createObjectURL(new Blob([bytes], { type: data.mimeType }));
    setDownloadUrl(href + '#' + data.filename);
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <form onSubmit={handleGenerate} className="flex flex-col gap-4 md:flex-row md:items-end">
        <label className="flex flex-col text-sm">
          Format
          <select
            value={format}
            onChange={(event) => setFormat(event.target.value as 'pdf' | 'docx')}
            className="mt-1 rounded border border-gray-300 px-2 py-1"
          >
            <option value="pdf">PDF</option>
            <option value="docx">DOCX</option>
          </select>
        </label>
        <label className="flex flex-col text-sm">
          Scénario
          <select
            value={scenarioId}
            onChange={(event) => setScenarioId(event.target.value)}
            className="mt-1 rounded border border-gray-300 px-2 py-1"
          >
            <option value="">Baseline</option>
            {scenarios.map((scenario) => (
              <option key={scenario.id} value={scenario.id}>
                {scenario.name}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="rounded bg-primary px-4 py-2 font-semibold text-white"
          disabled={loading}
        >
          {loading ? 'Génération...' : 'Générer'}
        </button>
      </form>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      {downloadUrl && (
        <a
          href={downloadUrl.split('#')[0]}
          download={downloadUrl.split('#')[1]}
          className="mt-2 inline-block text-sm text-primary underline"
        >
          Télécharger le rapport
        </a>
      )}
    </div>
  );
}
