"use client";

import { useQuery } from "@tanstack/react-query";
import type { Game, Team, WinData } from "./types";

// API fetcher functions
async function fetchTeams(): Promise<Team[]> {
  const response = await fetch("/api/nba/teams");

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.error || `Failed to fetch teams: ${response.status}`,
    );
  }

  const data = await response.json();
  return data.data.sort((a: Team, b: Team) =>
    a.full_name.localeCompare(b.full_name),
  );
}

async function fetchGamesForTeam(
  teamId: number,
  season: number,
): Promise<Game[]> {
  const allGames: Game[] = [];
  let cursor: number | undefined = undefined;
  let hasMore = true;
  let requestCount = 0;
  const maxRequests = 10;

  while (hasMore && requestCount < maxRequests) {
    const url = new URL("/api/nba/games", window.location.origin);
    url.searchParams.append("team_id", teamId.toString());
    url.searchParams.append("season", season.toString());
    if (cursor) {
      url.searchParams.append("cursor", cursor.toString());
    }

    const response = await fetch(url.toString());

    if (!response.ok) {
      if (response.status === 429) {
        throw new Error(
          "Rate limit exceeded. Please wait a moment and try again.",
        );
      }
      const errorData = await response.json();
      throw new Error(
        errorData.error || `Failed to fetch games: ${response.status}`,
      );
    }

    const data = await response.json();

    const completedGames = data.data.filter(
      (game: Game) => game.status === "Final" && !game.postseason,
    );
    allGames.push(...completedGames);

    cursor = data.meta.next_cursor;
    hasMore = !!cursor;
    requestCount++;
  }

  return allGames.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
}

function calculateWinData(games: Game[], teamId: number): WinData[] {
  let cumulativeWins = 0;

  return games.map((game, index) => {
    const isHomeTeam = game.home_team.id === teamId;
    const teamScore = isHomeTeam
      ? game.home_team_score
      : game.visitor_team_score;
    const opponentScore = isHomeTeam
      ? game.visitor_team_score
      : game.home_team_score;

    if (teamScore > opponentScore) {
      cumulativeWins++;
    }

    return {
      gamesPlayed: index + 1,
      wins: cumulativeWins,
    };
  });
}

export function useNBATeams() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["nba", "teams"],
    queryFn: fetchTeams,
    // Teams data rarely changes, cache for a long time
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    gcTime: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  return {
    teams: data ?? [],
    isLoading,
    error: error?.message ?? null,
  };
}

export function useNBAGames(team: Team | null, season: number) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["nba", "games", team?.id, season],
    queryFn: () => fetchGamesForTeam(team!.id, season),
    enabled: !!team,
    // Game data changes throughout season but we can cache for a bit
    staleTime: 60 * 60 * 1000, // 1 hour
    gcTime: 24 * 60 * 60 * 1000, // 24 hours
  });

  const winData = data && team ? calculateWinData(data, team.id) : [];

  return {
    winData,
    isLoading,
    error: error?.message ?? null,
  };
}
