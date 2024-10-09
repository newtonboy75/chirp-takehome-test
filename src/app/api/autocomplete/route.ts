import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  try {
    const response = await axios.get(
      "https://api.crunchbase.com/api/v4/autocompletes",
      {
        headers: {
          accept: "application/json",
          "X-cb-user-key": process.env.CRUNCHBASE_API_KEY,
        },
        params: { query },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
