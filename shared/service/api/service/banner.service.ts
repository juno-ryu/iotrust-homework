import { BANNER_URIS } from "@/shared/service/api/consts/banner.const";
import { BannerItem } from "@/shared/service/api/type/banner";
import { Language, Nullable } from "@/shared/types/common";
import { Operation, request } from "@/shared/utils/request";

/** @apis  */
const BANNER_APIS = {
  ["api/banner"]: {
    post: async (lang: Language) => {
      const { tag, uri } = BANNER_URIS["api/banner"]();
      return await request<{ data: BannerItem[] }>(
        Operation.POST,
        uri,
        {
          lang,
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

export default BANNER_APIS;
