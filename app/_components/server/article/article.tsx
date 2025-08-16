import { Fragment } from "react";
import Image from "next/image";
import { ArticleProps } from "@/app/_components/server/article/article.type";
import { headers } from "next/headers";
import { getPletformServer } from "@/shared/utils/get-pletform.server";

export default async function Article(props: ArticleProps) {
  const { lists, title, isFavorite } = props;
  const a = await getPletformServer();
  console.log(a);
  return (
    <article className="w-full">
      <h3 className="text-xl font-bold ">{title}</h3>
      <div className="w-full min-h-[1px] bg-gray-600 my-2" />
      {lists.map((item, i) => {
        const isLast = i === lists.length - 1;

        return (
          <Fragment key={`favorite_${item.id}`}>
            <div className="flex w-full gap-[20px] justify-between">
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
              <div className="flex flex-col justify-center mr-auto">
                <p className="text-xl font-bold">{item.name}</p>
                <p className="text-sm">{item.url}</p>
              </div>
              {isFavorite && (
                <div className="flex items-center justify-center">
                  <p className="cursor-pointer">삭제</p>
                </div>
              )}
            </div>
            {!isLast && <div className="w-full min-h-[1px] bg-gray-600 my-2" />}
          </Fragment>
        );
      })}
    </article>
  );
}
