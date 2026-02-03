export interface Team {
  id: number;
  conference: string;
  division: string;
  city: string;
  name: string;
  full_name: string;
  abbreviation: string;
}

export interface Game {
  id: number;
  date: string;
  season: number;
  status: string;
  period: number;
  time: string;
  postseason: boolean;
  postponed: boolean;
  home_team_score: number;
  visitor_team_score: number;
  home_team: Team;
  visitor_team: Team;
}

export interface TeamsResponse {
  data: Team[];
}

export interface GamesResponse {
  data: Game[];
  meta: {
    next_cursor?: number;
    per_page: number;
  };
}

export interface WinData {
  gamesPlayed: number;
  wins: number;
}
