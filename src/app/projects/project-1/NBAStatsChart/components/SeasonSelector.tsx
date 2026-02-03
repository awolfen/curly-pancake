interface SeasonSelectorProps {
  season: number;
  onChange: (season: number) => void;
}

export default function SeasonSelector({
  season,
  onChange,
}: SeasonSelectorProps) {
  const seasonOptions = [2025, 2024, 2023];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(parseInt(e.target.value));
  };

  return (
    <div className="sm:w-40">
      <label
        htmlFor="season-select"
        className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
      >
        Season
      </label>
      <select
        id="season-select"
        value={season}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {seasonOptions.map((year) => (
          <option key={year} value={year}>
            {year}-{(year + 1).toString().slice(-2)}
          </option>
        ))}
      </select>
    </div>
  );
}
