import { NextResponse } from "next/server";

export const runtime = "edge";
export const revalidate = 60;

export async function GET(request: Request) {
  return NextResponse.json({ games: "a" });
}
