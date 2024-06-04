import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  const session = JSON.stringify(data);

  const response = NextResponse.json({ session });

  response.cookies.set({
    name: "session",
    value: session,
  });

  return response;
}
