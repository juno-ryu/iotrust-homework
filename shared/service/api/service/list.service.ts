import { ListItem } from "@/app/_components/server/article/article.type";
import { BANNER_URIS } from "@/shared/service/api/consts/banner.const";
import { LIST_URIS } from "@/shared/service/api/consts/list.const";
import { BannerItem } from "@/shared/service/api/type/banner";
import { Language, Nullable, Platform } from "@/shared/types/common";
import { Operation, request } from "@/shared/utils/request";

/** @apis  */
const LIST_APIS = {
  ["api/list"]: {
    post: async (lang: Language, platform: Platform) => {
      const { tag, uri } = LIST_URIS["api/list"]();
      return await request<{ data: ListItem[] }>(
        Operation.POST,
        uri,
        {
          lang,
          platform,
        },
        {
          next: {
            tags: [tag],
          },
        }
      );
    },
  },
};

export default LIST_APIS;
