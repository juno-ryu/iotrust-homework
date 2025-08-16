import { Fragment } from "react";
import Image from "next/image";
import BottomSheetTrigger from "@/app/_components/client/trigger/bottom-sheet";
import FavoriteDeleteTrigger from "@/app/_components/client/trigger/favorite-delete";
import { Language } from "@/shared/types/common";
import { ListItem } from "@/app/_components/server/article/article.type";

interface ArticleProps {
  lang: Language;
  lists: ListItem[];
  title: string;
  isFavorite?: boolean;
}

export default async function Article(props: ArticleProps) {
  const { lang, lists, title, isFavorite } = props;

  return (
    <article className="w-full">
      <h3 className="text-xl font-bold ">{title}</h3>
      <div className="w-full min-h-[1px] bg-gray-600 my-2" />
      {lists.map((item, i) => {
        const isLast = i === lists.length - 1;

        return (
          <Fragment key={`favorite_${item.id}`}>
            <div className="flex w-full gap-[20px] justify-between relative pr-3">
              <BottomSheetTrigger item={item} lang={lang} />
              {item.icon && (
                <div className="relative flex justify-center shrink-0 w-[80px] h-[80px] bg-white rounded-lg overflow-hidden shadow-sm shadow-gray-50">
                  <Image
                    src={item.icon}
                    alt={item.id}
                    width={60}
                    height={60}
                    style={{ objectFit: "contain" }}
                    quality={90}
                  />
                </div>
              )}
              <div className="flex flex-col justify-center mr-auto flex-1 min-w-0 ">
                <p className="text-xl font-bold">{item.name}</p>
                <p className="text-sm truncate max-w-full">
                  {isFavorite ? item.url : item?.description?.[lang]}
                </p>
              </div>
              {isFavorite && <FavoriteDeleteTrigger lang={lang} id={item.id} />}
            </div>
            {!isLast && <div className="w-full min-h-[1px] bg-gray-600 my-2" />}
          </Fragment>
        );
      })}
    </article>
  );
}
