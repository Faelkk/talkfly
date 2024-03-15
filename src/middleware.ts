import { NextRequest, NextResponse } from "next/server";
import verifyToken from "./functions/verify-token";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value;
  const authenticated = token ? await verifyToken(token) : false;

  const isPublicPath =
    path === "/signin" || path === "/signup" || path === "/recovery";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/home",
    "/signin",
    "/signup",
    "/connections",
    "/solicitations/:path*",
  ],
};
