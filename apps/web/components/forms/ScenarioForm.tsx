'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function ScenarioForm() {
  const router = useRouter();
  const [name, setName] = useState('Scénario');
  const [applyFromCampaign, setApplyFromCampaign] = useState('24/25');
  const [description, setDescription] = useState('');
  const [active, setActive] = useState(false);
  const [reductions, setReductions] = useState([
    { module: 'energy', filterField: 'type', filterValue: 'Electricite', reductionType: 'percentage', reductionValue: 0.1 }
  ]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const response = await fetch('/api/scenarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, applyFromCampaign, description, active, reductions })
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
          Nom
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1 rounded border border-gray-300 px-2 py-1"
          />
        </label>
        <label className="flex flex-col text-sm">
          Campagne de début
          <input
            type="text"
            value={applyFromCampaign}
            onChange={(event) => setApplyFromCampaign(event.target.value)}
            className="mt-1 rounded border border-gray-300 px-2 py-1"
          />
        </label>
        <label className="flex flex-col text-sm md:col-span-2">
          Description
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="mt-1 rounded border border-gray-300 px-2 py-1"
          />
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={active} onChange={(event) => setActive(event.target.checked)} /> Activer
        </label>
      </div>
      <div className="rounded border border-dashed border-gray-300 p-4 text-sm">
        <h3 className="mb-2 font-semibold">Réductions</h3>
        {reductions.map((reduction, index) => (
          <div key={index} className="grid gap-2 md:grid-cols-5">
            <select
              value={reduction.module}
              onChange={(event) =>
                setReductions((prev) => {
                  const next = [...prev];
                  next[index] = { ...next[index], module: event.target.value as 'energy' | 'waste' };
                  return next;
                })
              }
              className="rounded border border-gray-300 px-2 py-1"
            >
              <option value="energy">Énergie</option>
              <option value="waste">Déchets</option>
            </select>
            <input
              type="text"
              value={reduction.filterField}
              onChange={(event) =>
                setReductions((prev) => {
                  const next = [...prev];
                  next[index] = { ...next[index], filterField: event.target.value };
                  return next;
                })
              }
              className="rounded border border-gray-300 px-2 py-1"
              placeholder="Champ filtre"
            />
            <input
              type="text"
              value={reduction.filterValue}
              onChange={(event) =>
                setReductions((prev) => {
                  const next = [...prev];
                  next[index] = { ...next[index], filterValue: event.target.value };
                  return next;
                })
              }
              className="rounded border border-gray-300 px-2 py-1"
              placeholder="Valeur"
            />
            <select
              value={reduction.reductionType}
              onChange={(event) =>
                setReductions((prev) => {
                  const next = [...prev];
                  next[index] = { ...next[index], reductionType: event.target.value as 'percentage' | 'absolute' };
                  return next;
                })
              }
              className="rounded border border-gray-300 px-2 py-1"
            >
              <option value="percentage">%</option>
              <option value="absolute">Absolu</option>
            </select>
            <input
              type="number"
              min={0}
              step="0.01"
              value={reduction.reductionValue}
              onChange={(event) =>
                setReductions((prev) => {
                  const next = [...prev];
                  next[index] = { ...next[index], reductionValue: Number(event.target.value) };
                  return next;
                })
              }
              className="rounded border border-gray-300 px-2 py-1"
            />
          </div>
        ))}
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        className="rounded bg-primary px-4 py-2 font-semibold text-white"
        disabled={loading}
      >
        {loading ? 'Création...' : 'Créer le scénario'}
      </button>
    </form>
  );
}
