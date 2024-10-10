import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const entity_id = searchParams.get("entity_id");
  const fieldIds = searchParams.get("fieldIds");

  console.log(entity_id, fieldIds);

  if (!entity_id) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  try {
    const response = await axios.get(
      `https://api.crunchbase.com/api/v4/entities/organizations/${entity_id}`,
      {
        headers: {
          accept: "application/json",
          "X-cb-user-key": process.env.CRUNCHBASE_API_KEY,
        },
        params: {
          field_ids:
            "created_at,entity_def_id,facebook,facet_ids,identifier,image_id,image_url,linkedinlocation_identifiers,name,permalink,short_description,stock_exchange_symbol,stock_symbol,twitter,updated_at,uuid,website_url",
        },
      }
    );

    // console.log(response.data)

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { error: error},
      { status: 500 }
    );
  }
}
