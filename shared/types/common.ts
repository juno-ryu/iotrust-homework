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
