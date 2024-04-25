import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("미들웨어가 경로를 리다이렉팅함");
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

export const config = {
  maatcher: ["/products/:path*"],
};
