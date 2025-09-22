'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ProductionFormProps {
  sites: { id: string; name: string }[];
}

export function ProductionForm({ sites }: ProductionFormProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    siteId: sites[0]?.id ?? '',
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    familleCulture: '',
    variete: '',
    sup_ha: 0,
    prod_kg: 0
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

    const response = await fetch('/api/modules/production', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        year: Number(form.year),
        month: Number(form.month),
        sup_ha: Number(form.sup_ha),
        prod_kg: Number(form.prod_kg)
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
          Famille de culture
          <input
            type="text"
            value={form.familleCulture}
            onChange={(event) => handleChange('familleCulture', event.target.value)}
            className="mt-1 rounded border border-gray-300 px-2 py-1"
          />
        </label>
        <label className="flex flex-col text-sm">
          Variété
          <input
            type="text"
            value={form.variete}
            onChange={(event) => handleChange('variete', event.target.value)}
            className="mt-1 rounded border border-gray-300 px-2 py-1"
          />
        </label>
        <label className="flex flex-col text-sm">
          Surface (ha)
          <input
            type="number"
            min={0}
            step="0.01"
            value={form.sup_ha}
            onChange={(event) => handleChange('sup_ha', Number(event.target.value))}
            className="mt-1 rounded border border-gray-300 px-2 py-1"
          />
        </label>
        <label className="flex flex-col text-sm">
          Production (kg)
          <input
            type="number"
            min={0}
            step="0.01"
            value={form.prod_kg}
            onChange={(event) => handleChange('prod_kg', Number(event.target.value))}
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
