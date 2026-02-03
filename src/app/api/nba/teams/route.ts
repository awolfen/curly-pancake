import { NextResponse } from "next/server";
import { NBA_API_BASE_URL, NBA_API_KEY } from "../config";

export async function GET() {
  if (!NBA_API_KEY) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(`${NBA_API_BASE_URL}/teams`, {
      headers: {
        Authorization: NBA_API_KEY,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch teams: ${response.status}` },
        { status: response.status },
      );
    }

    const data = await response.json();

    //filter for active teams (with an id of 30 or less)
    const activeTeams = data.data.filter(
      (team: { id: number }) => team.id <= 30,
    );

    return NextResponse.json({ data: activeTeams });
  } catch (error) {
    console.error("Error fetching teams:", error);
    return NextResponse.json(
      { error: "Failed to fetch teams" },
      { status: 500 },
    );
  }
}
