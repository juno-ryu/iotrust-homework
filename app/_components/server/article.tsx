import { Fragment } from "react";
const list = [
  {
    id: 1,
    img: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_moonpay.png",
    title: "MoonPay",
    subTitle: "MoonPay",
    href: "https://buy.moonpay.com",
    description: `<span class="font-bold">MoonPay offers simple and safer way to buy crypto instantly using VISA/Mastercard payment</span><br/>영어를 사용하는 아이폰 사용자에게만 노출됩니다.`,
  },
  {
    id: 2,
    img: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_ftso.png",
    title: "FTSO Portal",
    subTitle: "Songbird, Flare",
    href: "https://ftsoportal.com/",
    description: `<span class="font-bold">FTSO Portal is a service by D’CENT to provide fast and easy way to delegate Vote Power to the user’s favorite FTSO provider.</span><br/>FTSO Portal은 사용자가 원하는 FTSO provider에 Vote Power를 쉽고 빠르게 위임할 수 있는 기능을 제공합니다.`,
  },
  {
    id: 3,
    img: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_astar.png",
    title: "Astar Portal",
    subTitle: "Astar",
    href: "https://portal.astar.network/",
    description: `<span class="font-bold">Astar Portal is the official Astar Network application for using everything that Astar Network offers.</span><br/>아스타포탈은 Astar Network의 공식 애플리케이션입니다. (dev/stage 환경 전용)`,
  },
  {
    id: 4,
    img: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_1inch.png",
    title: "1inch",
    subTitle: "Ethereum",
    href: "https://app.1inch.io/",
    description: `<span class="font-bold">1inch is a decentralized exchange (DEX) aggregator.</span><br/>1inch는 모든 주요 DEX 거래소의 유동성과 가격 정보를 하나의 플랫폼에서 제공합니다.`,
  },
  {
    id: 5,
    img: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_xdsea.png",
    title: "XDSea",
    subTitle: "XDC Network",
    href: "",
    description: `<span class="font-bold">XDSea is the world's first and largest P2P decentralized NFT marketplace built on the XDC Network.</span><br/>XDSea는 XDC 네트워크 기반 NFT를 사고 파는 세계 최초·최대 규모 P2P 시장입니다.`,
  },
  {
    id: 6,
    img: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_compound.png",
    title: "Compound",
    subTitle: "Ethereum",
    href: "https://app.compound.finance/",
    description: `<span class="font-bold">Compound is Ethereum's algorithmic money market protocol.</span><br/>컴파운드는 담보를 통해 이자를 얻거나 자산을 빌릴 수 있는 이더리움 기반 머니 마켓 프로토콜입니다.`,
  },
  {
    id: 7,
    img: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_pooltogether.png",
    title: "PoolTogether",
    subTitle: "Ethereum",
    href: "https://app.pooltogether.com/",
    description: `<span class="font-bold">PoolTogether makes saving money as fun as a game.</span><br/>저축 티켓으로 이자를 받을 기회를 제공하지만, 당첨되지 않아도 원금 손실이 없습니다.`,
  },
  {
    id: 8,
    img: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_opensea.png",
    title: "OpenSea",
    subTitle: "Ethereum, Polygon",
    href: "https://opensea.io/",
    description: `<span class="font-bold">OpenSea is a marketplace for blockchain-backed digital goods.</span><br/>OpenSea는 수집품, 게임 아이템, 디지털 아트를 거래할 수 있는 마켓플레이스입니다.`,
  },
  {
    id: 9,
    img: "https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images/icon_bluewhale.png",
    title: "BlueWhale",
    subTitle: "Kaia",
    href: "https://bwpm.io/",
    description: `<span class="font-bold">블루웨일 프로토콜은 사용하기 쉬운 디파이 서비스를 지향하는 프로젝트입니다.</span><br/>한국어 사용자에게만 노출됩니다.`,
  },
];
export default function Article() {
  return (
    <section className="w-full">
      <h3 className="text-xl font-bold ">즐겨찾기</h3>
      <div className="w-full min-h-[1px] bg-gray-600 my-2" />
      {list.map((item) => (
        <Fragment key={`favorite_${item.id}`}>
          <div className="flex w-full gap-[20px]">
            <div className="flex shrink-0 w-[80px] h-[80px] bg-white rounded-lg overflow-hidden shadow-sm shadow-gray-50">
              <img src={item.img} alt={item.title} className="scale-70" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xl font-bold">{item.title}</p>
              <p className="text-sm">{item.href}</p>
            </div>
          </div>
          <div className="w-full min-h-[1px] bg-gray-600 my-2" />
        </Fragment>
      ))}
    </section>
  );
}
