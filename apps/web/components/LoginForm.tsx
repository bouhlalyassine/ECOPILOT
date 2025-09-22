'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export function LoginForm({ locale }: { locale: string }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: `/${locale}/dashboard`
    });

    setLoading(false);

    if (result?.error) {
      setError('Identifiants invalides');
      return;
    }

    if (result?.ok) {
      window.location.href = result.url ?? `/${locale}/dashboard`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-white p-8 shadow">
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Mot de passe
        </label>
        <input
          id="password"
          type="password"
          className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        className="w-full rounded bg-primary px-4 py-2 font-semibold text-white"
        disabled={loading}
      >
        {loading ? 'Connexion...' : 'Se connecter'}
      </button>
      <p className="text-xs text-center text-gray-500">
        Mot de passe oublié ? Contactez l\'administrateur (mock).
      </p>
    </form>
  );
}
