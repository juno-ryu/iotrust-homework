import Banner from "@/app/_components/client/banner/banner";
import Article from "@/app/_components/server/article/article";
import { ListItem } from "@/app/_components/server/article/article.type";
import { Environment, Language, Platform } from "@/shared/types/common";
import { getPletformServer } from "@/shared/utils/get-pletform.server";
import { getTranslation } from "@/shared/utils/i18next/i18next.server";

interface HomeProps {
  params: Promise<{ lang: Language }>;
}

export default async function Home(props: HomeProps) {
  const { params } = props;
  const { lang } = await params;
  const pletform = await getPletformServer();

  const banners = [
    {
      id: 1,
      imageUrl:
        "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_dcent.png",
      title: "첫 번째 슬라이드",
      content: `<span class="font-bold">첫 번째 슬라이드의 내용입니다.</span><br/>여기에 추가적인 설명을 넣을 수 있습니다.`,
      ctaText: "확인하기",
      ctaUrl: "https://buy.moonpay.com",
    },
    {
      id: 2,
      imageUrl:
        "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/banner_blog.png",
      title: "두 번째 슬라이드",
      content: `<span class="font-bold">두 번째 슬라이드의 내용입니다.</span></br>여기에 추가적인 설명을 넣을 수 있습니다.`,
      ctaText: "구매하기",
      ctaUrl: "https://buy.moonpay.com",
    },
  ];

  const lists = [
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
    {
      id: "ftso-portal",
      name: "FTSO Portal",
      icon: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_ftso.png",
      url: "https://ftsoportal.com/",
      description: {
        en: "FTSO Portal is a service by D’CENT to provide fast and easy way to delegate Vote Power to the user’s favorite FTSO provider. By delegating Vote Power, users can earn passive income as reward.",
        ko: "FTSO Portal은 사용자가 원하는 FTSO provider에 Vote Power 쉽고 빠르게 위임할 수 있는 기능을 제공하는 디센트의 서비스입니다. 사용자는 Vote Power 위임을 통해 패시브인컴(passive income)을 보상으로 받을 수 있습니다.",
      },
      networks: ["Songbird", "Flare"],
      visibleCondition: null,
    },
    {
      id: "astar-portal",
      name: "Astar Portal",
      icon: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_astar.png",
      url: "https://portal.astar.network/",
      description: {
        en: "Astar Portal is the official Astar Network application for using everything that Astar Network offers.",
        ko: "아스타포탈은 Astar Network에서 제공하는 모든 것을 사용하기 위한 Astar Network의 공식 애플리케이션입니다.",
      },
      networks: ["Astar"],
      visibleCondition: {
        environments: [Environment.Dev, Environment.Stage],
      },
    },
    {
      id: "1inch",
      name: "1inch",
      icon: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_1inch.png",
      url: "https://app.1inch.io/",
      description: {
        en: "1inch is a decentralized exchange (DEX) aggregator. It's designed to roll liquidity and pricing from all major DEXes into one platform, making it easy to get the best price for the desired trade.",
        ko: "1inch는 모든 주요 DEX 거래소의 유동성과 가격 정보를 하나의 플랫폼에서 제공합니다. 원하는 거래의 가격을 쉽게 조회하여 토큰을 교환할 수 있습니다.",
      },
      networks: ["Ethereum"],
      visibleCondition: null,
    },
    {
      id: "xdsea",
      name: "XDSea",
      icon: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_xdsea.png",
      url: null,
      description: {
        en: "XDSea is the world's first and largest peer-to-peer decentralized marketplace for buying and selling NFTs built on the XDC Network.",
        ko: "XDSea는 XDC 네트워크에 구축된 NFT를 사고 파는 세계 최초이자 최대 규모의 P2P 분산형 시장입니다.",
      },
      networks: ["XDC Network"],
      visibleCondition: null,
    },
    {
      id: "compound",
      name: "Compound",
      icon: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_compound.png",
      url: "https://app.compound.finance/",
      description: {
        en: "Compound is Ethereum's algorithmic money market protocol that allows users to earn interest or borrow assets through collateral. Anyone can supply assets to Compound's liquidity pool and earn continuous compound interest immediately.",
        ko: "Compound는 담보를 통해 이자를 얻거나 자산을 빌릴 수 있는 이더리움 기반의 머니 마켓 프로토콜입니다. 컴파운드의 유동성 풀에 자산을 공급하면 복리이자를 얻을 수 있습니다.",
      },
      networks: ["Ethereum"],
      visibleCondition: null,
    },
    {
      id: "pooltogether",
      name: "PoolTogether",
      icon: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_pooltogether.png",
      url: "https://app.pooltogether.com/",
      description: {
        en: "PoolTogether is an Ethereum based application that makes saving money as fun as a game. You join a pool by getting a “savings ticket”. Each Savings Ticket gives you a chance to win a prize, but even if you don’t win, you keep all your money!",
        ko: "PoolTogether는 저축을 재미있게 하는 이더리움 기반의 서비스입니다. 자산을 예치하면 “저축 티켓“을 받아 '풀'에 참여합니다. 각 저축 티켓은 풀에서 발생한 이자를 받을 수있는 기회를 제공하지만, 당첨되지 않더라도 손실이 없습니다.",
      },
      networks: ["Ethereum"],
      visibleCondition: null,
    },
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
      id: "bluewhale",
      name: "BlueWhale",
      icon: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_bluewhale.png",
      url: "https://bwpm.io/",
      description: {
        ko: "블루웨일 프로토콜은 사용하기 쉬운 디파이 서비스를 지향하는 프로젝트입니다. 디파이 대시보드, DEX 어그리게이터, 자동 재예치 서비스 등 탈중앙화 금융(DeFi) 관련 서비스 제공을 통해 클레이튼 디파이 생태계 활동을 더 쉽고 효율적으로 만듭니다.",
      },
      networks: ["Kaia"],
      visibleCondition: {
        langs: [Language.Ko],
      },
    },
  ];

  const { t } = await getTranslation(lang, "common");

  return (
    <main className="font-sans flex flex-col gap-[32px] items-center min-h-screen py-10">
      <div className="w-full max-w-lg min-w-[320px] px-4">
        <Banner lang={lang} banners={banners} />
      </div>
      <div className="w-full max-w-lg min-w-[320px] flex flex-col gap-[32px] px-4">
        <Article lists={lists} title={t("dapp_favorite_title")} isFavorite />
        <Article lists={lists} title={t("dapp_list_title")} />
      </div>
    </main>
  );
}
