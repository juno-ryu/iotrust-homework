"use client";

import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import i18next, { KeyPrefix, Namespace } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { getLangOptions } from "@/shared/utils/i18next/i18next.const";
import {
  DEFINED_LANGS,
  I18NEXT_LANG_KEY,
  Language,
} from "@/shared/types/common";
import { useEffect, useState } from "react";

const isServer = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`@/shared/utils/locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getLangOptions(),
    lng: undefined, // Detect language on client side
    detection: { order: ["path", "htmlTag", "navigator"] },
    preload: isServer ? DEFINED_LANGS : [],
  });

export const useTranslation = (
  lang: Language,
  ns: Namespace,
  options?: { keyPrefix?: KeyPrefix<Namespace> }
) => {
  const { t, i18n, ready } = useTranslationOrg(ns, options);
  const [activeLang, setActiveLang] = useState(lang);

  if (isServer && lang && i18n.resolvedLanguage !== lang) {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    if (!i18n.resolvedLanguage) return;
    if (activeLang === i18n.resolvedLanguage) return;
    setActiveLang(i18n.resolvedLanguage as Language);
  }, [activeLang, i18n.resolvedLanguage]);

  useEffect(() => {
    if (!lang || i18n.resolvedLanguage === lang) return;
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return { t, i18n, ready };
};
