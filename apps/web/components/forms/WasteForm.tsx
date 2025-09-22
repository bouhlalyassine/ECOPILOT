'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface WasteFormProps {
  sites: { id: string; name: string }[];
}

export function WasteForm({ sites }: WasteFormProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    siteId: sites[0]?.id ?? '',
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    categorie: '',
    unit: 'kg',
    value: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (name: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const response = await fetch('/api/modules/waste', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        year: Number(form.year),
        month: Number(form.month),
        value: Number(form.value)
      })
    });

    setLoading(false);

    if (!response.ok) {
      setError(await response.text());
      return;
    }

    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col text-sm">
          Site
          <select
            value={form.siteId}
            onChange={(event) => handleChange('siteId', event.target.value)}
            className="mt-1 rounded border border-gray-300 px-2 py-1"
          >
            {sites.map((site) => (
              <option key={site.id} value={site.id}>
                {site.name}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col text-sm">
          Année
          <input
            type="number"
            value={form.year}
            onChange={(event) => handleChange('year', Number(event.target.value))}
            className="mt-1 rounded border border-gray-300 px-2 py-1"
          />
        </label>
        <label className="flex flex-col text-sm">
          Mois
          <input
            type="number"
            min={1}
            max={12}
            value={form.month}
            onChange={(event) => handleChange('month', Number(event.target.value))}
            className="mt-1 rounded border border-gray-300 px-2 py-1"
          />
        </label>
        <label className="flex flex-col text-sm">
          Catégorie
          <input
            type="text"
            value={form.categorie}
            onChange={(event) => handleChange('categorie', event.target.value)}
            className="mt-1 rounded border border-gray-300 px-2 py-1"
          />
        </label>
        <label className="flex flex-col text-sm">
          Unité
          <input
            type="text"
            value={form.unit}
            onChange={(event) => handleChange('unit', event.target.value)}
            className="mt-1 rounded border border-gray-300 px-2 py-1"
          />
        </label>
        <label className="flex flex-col text-sm">
          Valeur
          <input
            type="number"
            min={0}
            step="0.01"
            value={form.value}
            onChange={(event) => handleChange('value', Number(event.target.value))}
            className="mt-1 rounded border border-gray-300 px-2 py-1"
          />
        </label>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        className="rounded bg-primary px-4 py-2 font-semibold text-white"
        disabled={loading}
      >
        {loading ? 'Enregistrement...' : 'Enregistrer en brouillon'}
      </button>
    </form>
  );
}
