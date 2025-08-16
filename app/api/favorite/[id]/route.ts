import { Language, Platform } from "@/shared/types/common";
import { NextRequest, NextResponse } from "next/server";

const FAVORITE_LIST = [
  {
    id: "opensea",
    name: "OpenSea",
    icon: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_opensea.png",
    url: "https://opensea.io/",
    description: {
      en: "OpenSea is a marketplace for digital goods, including collectibles, game items, digital art, and other digital assets backed by blockchain such as Ethereum.",
      ko: "OpenSea는 수집품, 게임 아이템, 디지털 아트와 같은 이더리움 기반의 디지털 상품 및 디지털 자산을 거래할 수 있는 마켓 플레이스입니다.",
    },
    networks: ["Ethereum", "Polygon"],
    visibleCondition: null,
  },
  {
    id: "moonpay",
    name: "MoonPay",
    icon: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_moonpay.png",
    url: "https://buy.moonpay.com",
    description: {
      en: "MoonPay offers simple and safer way to buy crypto instantly using VISA/Mastercard payment",
    },
    networks: [],
    visibleCondition: {
      langs: [Language.En],
      platforms: [Platform.IOS],
    },
  },
];

function jsonError(message: string, status = 500) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  let favorites = FAVORITE_LIST;

  const exists = FAVORITE_LIST.find((item) => item.id === id);
  if (!exists) {
    return NextResponse.json(
      { success: false, message: "Item not found" },
      { status: 404 }
    );
  }

  favorites = favorites.filter((item) => item.id !== id);

  return NextResponse.json({ success: true, id });
}
