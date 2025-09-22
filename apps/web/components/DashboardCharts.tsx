'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { DashboardSummary } from '@/services/dashboard';
import { ChartCard } from './ChartCard';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend);

export function DashboardCharts({ summary }: { summary: DashboardSummary }) {
  const energyBarData = {
    labels: summary.energyByType.map((entry) => entry.label),
    datasets: [
      {
        label: 'Baseline',
        data: summary.energyByType.map((entry) => entry.baseline),
        backgroundColor: 'rgba(30, 136, 229, 0.7)'
      },
      {
        label: 'Simulé',
        data: summary.energyByType.map((entry) => entry.simulated),
        backgroundColor: 'rgba(67, 160, 71, 0.6)'
      }
    ]
  };

  const wastePieData = {
    labels: summary.wasteByCategory.map((entry) => entry.label),
    datasets: [
      {
        data: summary.wasteByCategory.map((entry) => entry.simulated),
        backgroundColor: ['#1E88E5', '#43A047', '#F4511E', '#FB8C00', '#8E24AA']
      }
    ]
  };

  const monthlyLineData = {
    labels: summary.monthlySeries.map((entry) => entry.month),
    datasets: [
      {
        label: 'Énergie baseline',
        data: summary.monthlySeries.map((entry) => entry.energyBaseline),
        borderColor: '#1E88E5',
        backgroundColor: 'rgba(30, 136, 229, 0.2)'
      },
      {
        label: 'Énergie simulée',
        data: summary.monthlySeries.map((entry) => entry.energySimulated),
        borderColor: '#43A047',
        backgroundColor: 'rgba(67, 160, 71, 0.2)'
      }
    ]
  };

  const monthlyWasteData = {
    labels: summary.monthlySeries.map((entry) => entry.month),
    datasets: [
      {
        label: 'Déchets baseline',
        data: summary.monthlySeries.map((entry) => entry.wasteBaseline),
        borderColor: '#F4511E',
        backgroundColor: 'rgba(244, 81, 30, 0.2)'
      },
      {
        label: 'Déchets simulés',
        data: summary.monthlySeries.map((entry) => entry.wasteSimulated),
        borderColor: '#6D4C41',
        backgroundColor: 'rgba(109, 76, 65, 0.2)'
      }
    ]
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ChartCard title="Énergie par type">
        <Bar data={energyBarData} />
      </ChartCard>
      <ChartCard title="Déchets simulés par catégorie">
        <Pie data={wastePieData} />
      </ChartCard>
      <ChartCard title="Énergie baseline vs simulée">
        <Line data={monthlyLineData} />
      </ChartCard>
      <ChartCard title="Déchets baseline vs simulés">
        <Line data={monthlyWasteData} />
      </ChartCard>
    </div>
  );
}
