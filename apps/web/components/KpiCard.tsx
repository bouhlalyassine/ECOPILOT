interface KpiCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
}

export function KpiCard({ title, value, subtitle }: KpiCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</div>
      <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{value}</div>
      {subtitle && (
        <div className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</div>
      )}
    </div>
  );
}
