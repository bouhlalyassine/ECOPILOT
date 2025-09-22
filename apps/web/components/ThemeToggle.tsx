'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [enabled]);

  return (
    <button
      type="button"
      className="rounded border border-gray-300 px-2 py-1 text-sm"
      onClick={() => setEnabled((value) => !value)}
    >
      {enabled ? '🌙' : '☀️'}
    </button>
  );
}
