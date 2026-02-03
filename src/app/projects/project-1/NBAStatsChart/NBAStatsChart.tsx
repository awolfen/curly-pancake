"use client";

import { useState } from "react";
import {
  ApiAttribution,
  ErrorDisplay,
  SeasonSelector,
  StatsSummary,
  TeamSelector,
  WinsChart,
} from "./components";
import { useNBAGames, useNBATeams } from "./hooks";
import type { Team } from "./types";

interface NBAStatsProps {
  className?: string;
}

export default function NBAStats({ className = "" }: NBAStatsProps) {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const currentSeason = new Date().getFullYear() - 1;
  const [season, setSeason] = useState<number>(currentSeason);

  const { teams, isLoading: isLoadingTeams, error: teamsError } = useNBATeams();

  const {
    winData,
    isLoading: isLoadingGames,
    error: gamesError,
  } = useNBAGames(selectedTeam, season);

  const error = teamsError || gamesError;

  const handleTeamChange = (team: Team | null) => {
    setSelectedTeam(team);
  };

  const handleSeasonChange = (newSeason: number) => {
    setSeason(newSeason);
  };

  const totalWins = winData[winData.length - 1]?.wins || 0;

  return (
    <div className={className}>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <TeamSelector
          teams={teams}
          selectedTeam={selectedTeam}
          isLoading={isLoadingTeams}
          onChange={handleTeamChange}
        />
        <SeasonSelector season={season} onChange={handleSeasonChange} />
      </div>

      {error && <ErrorDisplay message={error} />}

      <WinsChart
        winData={winData}
        teamName={selectedTeam?.full_name || null}
        season={season}
        isLoading={isLoadingGames}
      />

      {winData.length > 0 && selectedTeam && (
        <StatsSummary gamesPlayed={winData.length} wins={totalWins} />
      )}

      <ApiAttribution />
    </div>
  );
}
