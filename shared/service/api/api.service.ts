import BANNER_APIS from "@/shared/service/api/service/banner.service";
import FAVORITE_APIS from "@/shared/service/api/service/favorite.service";
import LIST_APIS from "@/shared/service/api/service/list.service";

const API_APIS = {
  ...BANNER_APIS,
  ...FAVORITE_APIS,
  ...LIST_APIS,
};

export default API_APIS;
