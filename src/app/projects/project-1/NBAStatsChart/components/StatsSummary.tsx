interface StatsSummaryProps {
  gamesPlayed: number;
  wins: number;
}

export default function StatsSummary({ gamesPlayed, wins }: StatsSummaryProps) {
  const losses = gamesPlayed - wins;
  const winRate =
    gamesPlayed > 0 ? ((wins / gamesPlayed) * 100).toFixed(1) : "0.0";

  return (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
      <StatCard label="Games Played" value={gamesPlayed} />
      <StatCard
        label="Total Wins"
        value={wins}
        valueClassName="text-green-600 dark:text-green-400"
      />
      <StatCard
        label="Total Losses"
        value={losses}
        valueClassName="text-red-600 dark:text-red-400"
      />
      <StatCard
        label="Win Rate"
        value={`${winRate}%`}
        valueClassName="text-blue-600 dark:text-blue-400"
      />
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: number | string;
  valueClassName?: string;
}

function StatCard({
  label,
  value,
  valueClassName = "text-zinc-900 dark:text-zinc-100",
}: StatCardProps) {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
      <p className={`text-2xl font-bold ${valueClassName}`}>{value}</p>
    </div>
  );
}
