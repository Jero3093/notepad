import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  const data = await request.json();

  const session = JSON.stringify(data);

  cookies().set("session", session, {
    maxAge: 432000,
  });

  return NextResponse.json({ status: 200 });
}
