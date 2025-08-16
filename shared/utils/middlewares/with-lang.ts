import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { DEFINED_LANGS, FALLBACK_LANG } from "@/shared/types/common";
import { extractLang } from "@/shared/utils/i18next/i18next.const";
import { type MiddlewareFunctionProps } from "@rescale/nemo";

acceptLanguage.languages(DEFINED_LANGS);

const withLangMiddleware = async ({
  request,
  forward,
}: MiddlewareFunctionProps) => {
  try {
    let lang;
    const extractedLang = extractLang(request.nextUrl.pathname);
    const referer = request.headers.has("referer")
      ? request.headers.get("referer")
      : null;

    // 1. Extracted from Request URL
    if (!lang && extractedLang) {
      lang = extractedLang;
    }
    // 2. Extract from URL on previous page
    if (!lang && referer) {
      const refererLang = extractLang(new URL(referer).pathname);
      if (refererLang) lang = refererLang;
    }
    // 4. Extract from HTTP Header
    if (!lang && request?.headers) {
      const headerLang = acceptLanguage.get(
        request?.headers?.get?.("Accept-Language")
      );
      if (DEFINED_LANGS.some((lang) => lang === headerLang)) lang = headerLang;
    }
    // 5. Basic Language
    if (!lang) {
      lang = FALLBACK_LANG;
    }

    // Language code does not exist or is not supported in the request URL
    if (lang !== extractedLang) {
      const { pathname, search } = new URL(request.nextUrl);
      return NextResponse.redirect(
        new URL(`/${lang}${pathname}${search}`, request.url)
      );
    }

    // Response With Cookie
    const responseNext = NextResponse.next();
    return forward(responseNext);
  } catch (error) {
    console.error("FIXME: ", error);
  }
};

export default withLangMiddleware;
