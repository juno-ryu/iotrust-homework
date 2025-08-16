"use server";

import { Platform } from "@/shared/types/common";
import { headers } from "next/headers";

export async function getPletformServer(): Promise<Platform> {
  const h = await headers();
  const ua = h.get("user-agent")?.toLowerCase() ?? "";

  if (ua.includes("iphone") || ua.includes("ipad")) return Platform.IOS;
  if (ua.includes("android")) return Platform.Android;
  if (ua.includes("windows")) return Platform.Windows;
  if (ua.includes("macintosh")) return Platform.Mac;

  return Platform.Unknown;
}
