export type Nullable<T> = null | T;

export enum Environment {
  Dev = "dev",
  Stage = "stage",
  Prod = "prod",
}

export enum Language {
  En = "en",
  Ko = "ko",
}

export enum Platform {
  IOS = "ios",
  Android = "android",
  Windows = "windows",
  Mac = "mac",
  Unknown = "unknown",
}

export const FALLBACK_LANG = Language.En;
export const SUPPORT_LANGS = Object.values(Language).filter(
  (lang) => lang !== FALLBACK_LANG
);
export const DEFINED_LANGS = [FALLBACK_LANG, ...SUPPORT_LANGS];

export const I18NEXT_LANG_KEY = "i18next-lang";
export const I18NEXT_DEFAULT_NS = "translation";
