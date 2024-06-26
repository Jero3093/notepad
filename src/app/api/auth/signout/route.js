import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request) {
  const cookieStore = cookies();

  cookieStore.delete("session");

  return NextResponse.json({ status: 200 });
}
