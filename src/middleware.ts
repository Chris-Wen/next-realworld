import { chain } from "@/middlewares/chain";
import { widthRoute } from "./middlewares/withRoute";

export default chain([widthRoute]);

// 配置详情：https://nextjs.org/docs/app/building-your-application/routing/middleware
export const config = {
  matcher: [
    // "/home",
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/*
     * - favicon.ico (favicon file)
     */
    // "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/((?!api|_next|.*\\..*).*)",
  ],
};
