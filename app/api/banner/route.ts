import { BannerItem } from "@/shared/service/api/type/banner";
import { Language } from "@/shared/types/common";
import { NextRequest, NextResponse } from "next/server";

const BANNERS_KO: BannerItem[] = [
  {
    id: 1,
    imageUrl:
      "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_dcent.png",
    title: "banner_dcent",
    content: `디센트 지문인증형 지갑으로 한층 더 강화된 보안을 경험하세요!`,
    ctaText: "구매하기",
    ctaUrl: "https://store-kr.dcentwallet.com",
  },
  {
    id: 2,
    imageUrl:
      "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_blog.png",
    title: "banner_blog",
    content: `새로운 디센트 블로그를 방문하여 최신 업데이트를 먼저 확인해보세요!`,
    ctaText: "확인하기",
    ctaUrl: "https://buy.moonpay.com",
  },
];
const BANNERS_EN: BannerItem[] = [
  {
    id: 1,
    imageUrl:
      "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_dcent.png",
    title: "banner_dcent",
    content: `Enhance your security with D'CENT biometric wallet`,
    ctaText: "Buy Now",
    ctaUrl: "https://store.dcentwallet.com/blogs/post",
  },
  {
    id: 2,
    imageUrl:
      "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_blog.png",
    title: "banner_blog",
    content: `Visit the new D’CENT Blog to explore the latest updates first!`,
    ctaText: "Explore",
    ctaUrl: "https://store-kr.dcentwallet.com/blogs/post",
  },
];

function jsonError(message: string, status = 500) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(req: NextRequest) {
  try {
    const { lang } = await req.json();

    const data = lang === Language.Ko ? BANNERS_KO : BANNERS_EN;
    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch (err) {
    // 예상치 못한 에러 처리
    console.error("[GET /api/banner] unexpected error:", err);
    return jsonError("Internal Server Error", 500);
  }
}
