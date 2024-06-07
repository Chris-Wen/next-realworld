import createMiddleware from "next-intl/middleware";

const I18nRouting = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "zh"],

  // Used when no locale matches
  defaultLocale: "en",
});

import { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";

export const widthIntl = (middleware: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    return I18nRouting(request);
  };
};
