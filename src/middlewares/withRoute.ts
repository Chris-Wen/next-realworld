import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

export const widthRoute = (middleware: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    // const { pathname } = request.nextUrl;

    // if (pathname === "/") {
    //   return NextResponse.redirect(new URL("/home", request.url), 307);
    // }

    return middleware(request, _next);
  };
};
