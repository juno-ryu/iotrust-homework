import { BASE_SERVICE, BASE_URL } from "@/shared/service/api/api.common";

/** @apis  */
export const BANNER_URIS = {
  ["api/banner"]: () => ({
    uri: `${BASE_URL}/banner`,
    tag: `${BASE_SERVICE}/banner`,
  }),
} as const;
