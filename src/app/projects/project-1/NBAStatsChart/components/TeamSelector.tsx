import type { Team } from "../types";

interface TeamSelectorProps {
  teams: Team[];
  selectedTeam: Team | null;
  isLoading: boolean;
  onChange: (team: Team | null) => void;
}

export default function TeamSelector({
  teams,
  selectedTeam,
  isLoading,
  onChange,
}: TeamSelectorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const teamId = parseInt(e.target.value);
    const team = teams.find((t) => t.id === teamId) || null;
    onChange(team);
  };

  return (
    <div className="flex-1">
      <label
        htmlFor="team-select"
        className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
      >
        Select Team
      </label>
      <select
        id="team-select"
        value={selectedTeam?.id || ""}
        onChange={handleChange}
        disabled={isLoading}
        className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <option value="">
          {isLoading ? "Loading teams..." : "Choose a team..."}
        </option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.full_name}
          </option>
        ))}
      </select>
    </div>
  );
}
