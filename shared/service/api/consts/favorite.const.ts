import { BASE_SERVICE, BASE_URL } from "@/shared/service/api/api.common";

/** @apis  */
export const FAVORITE_URIS = {
  ["api/favorite"]: (id?: string) => ({
    uri: `${BASE_URL}/favorite${id ? `/${id}` : ""}`,
    tag: `${BASE_SERVICE}/favorite`,
  }),
} as const;
