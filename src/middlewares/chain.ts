import { type NextMiddleware, NextResponse } from "next/server";

// eslint-disable-next-line no-unused-vars
export type NextMiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

export function chain(middlewares: NextMiddlewareFactory[] = [], index = 0): NextMiddleware {
  const current = middlewares[index];
  if (current) {
    return current(chain(middlewares, index + 1));
  }
  return () => NextResponse.next();
}
