import {
  DEFINED_LANGS,
  FALLBACK_LANG,
  I18NEXT_DEFAULT_NS,
  Language,
} from "@/shared/types/common";
import { Namespace } from "i18next";

export const getLangOptions = (lang?: Language, ns?: Namespace) => {
  return {
    // debug: true,
    supportedLngs: DEFINED_LANGS,
    fallbackLng: lang ?? FALLBACK_LANG,
    lng: lang ?? FALLBACK_LANG,
    fallbackNS: ns ?? I18NEXT_DEFAULT_NS,
    defaultNS: I18NEXT_DEFAULT_NS,
    ns: ns ?? I18NEXT_DEFAULT_NS,
    rect: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "em", "i", "p", "a"],
    },
  };
};

export const extractLang = (pathname: string) => {
  const match = pathname.match(/^\/(?<lang>[^/]+)/);
  if (!match) return null;
  if (pathname.includes("/.well-known")) return null;

  return DEFINED_LANGS.find((lang) => lang === match?.groups?.lang) ?? null;
};
