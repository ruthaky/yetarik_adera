import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["en", "fr", "ar", "zh"];
let defaultLocale = "en";

// Get the preferred locale
function getLocale(request: NextRequest) {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Get language from cookie if it exists
  const languageCookie = request.cookies.get("NEXT_LOCALE");
  if (languageCookie) {
    return languageCookie.value;
  }

  // Otherwise, use accept-language header
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return matchLocale(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and robots.txt
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap|robots.txt).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
