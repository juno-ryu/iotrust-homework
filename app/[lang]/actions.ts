"use server";

import API_APIS from "@/shared/service/api/api.service";
import { Language, Platform } from "@/shared/types/common";

export async function fetchBanners(lang: Language) {
  try {
    const response = await API_APIS["api/banner"].post(lang);
    return response?.data || [];
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error;
  }
}
export async function fetchList(lang: Language, platform: Platform) {
  try {
    const response = await API_APIS["api/list"].post(lang, platform);
    return response?.data || [];
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error;
  }
}

export async function fetchFavorite(lang: Language, platform: Platform) {
  try {
    const response = await API_APIS["api/favorite"].get();
    return response?.data || [];
  } catch (error) {
    console.error("Error fetching favorite:", error);
    throw error;
  }
}

export async function deleteFavorite(id: string) {
  try {
    const response = await API_APIS["api/favorite"].delete(id);
    return response?.success || false;
  } catch (error) {
    console.error("Error deleting favorite:", error);
    throw error;
  }
}
