import { NextResponse, type NextRequest } from "next/server";

type RouteContext = {
  params: Promise<{
    token: string;
  }>;
};

export async function GET(request: NextRequest, context: RouteContext) {
  const { token } = await context.params;
  const destination = new URL("/", request.url);

  destination.searchParams.set("reveal_token", token);

  return NextResponse.redirect(destination);
}
