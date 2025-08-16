import { BASE_SERVICE, BASE_URL } from "@/shared/service/api/api.common";

/** @apis  */
export const LIST_URIS = {
  ["api/list"]: () => ({
    uri: `${BASE_URL}/list`,
    tag: `${BASE_SERVICE}/list`,
  }),
} as const;
