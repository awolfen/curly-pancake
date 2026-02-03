import { type NextRequest, NextResponse } from "next/server";

const API_BASE_URL = "https://api.balldontlie.io/v1";
const API_KEY = process.env.BALLDONTLIE_APIKEY || "";

export async function GET(request: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 },
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const teamId = searchParams.get("team_id");
  const season = searchParams.get("season");
  const cursor = searchParams.get("cursor");

  if (!teamId || !season) {
    return NextResponse.json(
      { error: "team_id and season are required" },
      { status: 400 },
    );
  }

  try {
    const url = new URL(`${API_BASE_URL}/games`);
    url.searchParams.append("team_ids[]", teamId);
    url.searchParams.append("seasons[]", season);
    url.searchParams.append("per_page", "100");
    if (cursor) {
      url.searchParams.append("cursor", cursor);
    }

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: API_KEY,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch games: ${response.status}` },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching games:", error);
    return NextResponse.json(
      { error: "Failed to fetch games" },
      { status: 500 },
    );
  }
}
