"use client";

import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { WinData } from "../types";
import LoadingSpinner from "./LoadingSpinner";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

interface WinsChartProps {
  winData: WinData[];
  teamName: string | null;
  season: number;
  isLoading: boolean;
}

export default function WinsChart({
  winData,
  teamName,
  season,
  isLoading,
}: WinsChartProps) {
  const chartData = {
    labels: winData.map((d) => d.gamesPlayed.toString()),
    datasets: [
      {
        label: "Wins",
        data: winData.map((d) => d.wins),
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderWidth: 2,
        fill: true,
        tension: 0.1,
        pointRadius: winData.length > 50 ? 0 : 3,
        pointHoverRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "rgb(161, 161, 170)",
        },
      },
      title: {
        display: true,
        text: teamName
          ? `${teamName} - Wins Over ${season}-${season + 1} Season`
          : "Select a team to view stats",
        color: "rgb(244, 244, 245)",
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: {
            dataIndex: number;
            parsed: { y: number | null };
          }) => {
            const wins = context.parsed.y ?? 0;
            const games = context.dataIndex + 1;
            return `${wins} wins after ${games} games`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Games Played",
          color: "rgb(161, 161, 170)",
        },
        ticks: {
          color: "rgb(161, 161, 170)",
          maxTicksLimit: 10,
        },
        grid: {
          color: "rgba(161, 161, 170, 0.1)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Cumulative Wins",
          color: "rgb(161, 161, 170)",
        },
        ticks: {
          color: "rgb(161, 161, 170)",
          stepSize: 5,
        },
        grid: {
          color: "rgba(161, 161, 170, 0.1)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="relative bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800">
      <div className="h-[400px]">
        {isLoading ? (
          <LoadingSpinner message="Loading game data..." />
        ) : winData.length > 0 ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-zinc-500 dark:text-zinc-400 text-center">
              {teamName
                ? "No game data available for this selection"
                : "Select a team to view their win progression"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
