import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "Vlad",
      age: 21,
      nickname: "calkio",
      email: "vlad@vlad",
      password: "12345",
    },
    {
      id: 2,
      name: "Vlad",
      age: 21,
      nickname: "calkio",
      email: "vlad@vlad",
      password: "12345",
    },
    {
      id: 3,
      name: "Vlad",
      age: 21,
      nickname: "calkio",
      email: "vlad@vlad",
      password: "12345",
    },
    {
      id: 4,
      name: "Vlad",
      age: 21,
      nickname: "calkio",
      email: "vlad@vlad",
      password: "12345",
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
