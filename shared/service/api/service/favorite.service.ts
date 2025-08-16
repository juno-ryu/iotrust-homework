import { ListItem } from "@/app/_components/server/article/article.type";
import { FAVORITE_URIS } from "@/shared/service/api/consts/favorite.const";
import { BannerItem } from "@/shared/service/api/type/banner";
import { Language, Nullable, Platform } from "@/shared/types/common";
import { Operation, request } from "@/shared/utils/request";

/** @apis  */
const FAVORITE_APIS = {
  ["api/favorite"]: {
    get: async () => {
      const { tag, uri } = FAVORITE_URIS["api/favorite"]();
      return await request<{ data: ListItem[] }>(
        Operation.GET,
        uri,
        undefined,
        {
          next: {
            tags: [tag],
          },
        }
      );
    },
    delete: async (id: string) => {
      const { tag, uri } = FAVORITE_URIS["api/favorite"](id);
      return await request<{ success: boolean; message?: string }>(
        Operation.DELETE,
        uri,
        {}
      );
    },
  },
};

export default FAVORITE_APIS;
