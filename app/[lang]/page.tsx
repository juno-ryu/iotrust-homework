import { fetchBanners, fetchFavorite, fetchList } from "@/app/[lang]/actions";
import Banner from "@/app/_components/client/banner/banner";
import Article from "@/app/_components/server/article/article";
import { ListItem } from "@/app/_components/server/article/article.type";
import API_APIS from "@/shared/service/api/api.service";
import { Environment, Language, Platform } from "@/shared/types/common";
import { getPletformServer } from "@/shared/utils/get-pletform.server";
import { getTranslation } from "@/shared/utils/i18next/i18next.server";
import { Suspense } from "react";

interface HomeProps {
  params: Promise<{ lang: Language }>;
}

export default async function Home(props: HomeProps) {
  const { params } = props;
  const { lang } = await params;
  const pletform = await getPletformServer();
  const banners = await fetchBanners(lang);
  const favorites = await fetchFavorite(lang, pletform);
  const lists = await fetchList(lang, pletform);
  console.log(lists);
  const { t } = await getTranslation(lang, "common");

  return (
    <main className="font-sans flex flex-col gap-[32px] items-center min-h-screen py-10">
      <div className="w-full max-w-lg min-w-[320px] px-4">
        <Banner lang={lang} banners={banners} />
      </div>
      <div className="w-full max-w-lg min-w-[320px] flex flex-col gap-[32px] px-4">
        <Article
          lang={lang}
          lists={favorites}
          title={t("dapp_favorite_title")}
          isFavorite
        />
        <Article lang={lang} lists={lists} title={t("dapp_list_title")} />
      </div>
    </main>
  );
}
