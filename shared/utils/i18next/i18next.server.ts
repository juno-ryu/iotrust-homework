import { initReactI18next } from "react-i18next/initReactI18next";
import { createInstance, KeyPrefix, Namespace } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { Language } from "@/shared/types/common";
import { getLangOptions } from "@/shared/utils/i18next/i18next.const";

export const initI18next = async (lang: Language, ns: Namespace) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@/shared/utils/locales/${language}/${namespace}.json`)
      )
    )
    .init(getLangOptions(lang, ns));
  return i18nInstance;
};

export const getTranslation = async (
  lang: Language,
  ns: Namespace,
  options?: { keyPrefix?: KeyPrefix<Namespace> }
) => {
  const i18nextInstance = await initI18next(lang, ns);
  return {
    t: i18nextInstance.getFixedT(
      lang,
      Array.isArray(ns) ? ns[0] : ns,
      options?.keyPrefix
    ),
    i18n: i18nextInstance,
  };
};
