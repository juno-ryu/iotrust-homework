import { BANNER_URIS } from "@/shared/service/api/consts/banner.const";
import { FAVORITE_URIS } from "@/shared/service/api/consts/favorite.const";
import { LIST_URIS } from "@/shared/service/api/consts/list.const";

export type EnumApiURI = (typeof API_URIS)[keyof typeof API_URIS];
export const API_URIS = {
  ...BANNER_URIS,
  ...FAVORITE_URIS,
  ...LIST_URIS,
} as const;
