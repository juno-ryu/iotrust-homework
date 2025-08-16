"use client";

import Portal from "@/app/_components/client/portal/portal";
import { ListItem } from "@/app/_components/server/article/article.type";
import { Fragment, useCallback, useState } from "react";
import Image from "next/image";
import { Language } from "@/shared/types/common";
import { useTranslation } from "@/shared/utils/i18next/i18next.client";

interface BottomSheetTriggerProps {
  item: ListItem;
  lang: Language;
}

export default function BottomSheetTrigger(props: BottomSheetTriggerProps) {
  const { item, lang } = props;
  const { t } = useTranslation(lang, "common");
  const [open, setOpen] = useState(false);

  const openSheet = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation?.();
    setOpen(true);
  }, []);

  const closeSheet = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation?.();
    setOpen(false);
  }, []);

  return (
    <Fragment>
      <div
        className="absolute z-50 top-0 left-0 w-full h-full bg-gray-100 opacity-0 "
        onClick={openSheet}
      />
      {open && (
        <Portal>
          <div
            className="fixed inset-0 z-[100] bg-black/50"
            onClick={closeSheet}
          />

          <div className="fixed inset-x-0 bottom-0 z-[101] flex justify-center">
            <div
              className="w-full max-w-md rounded-t-2xl bg-white shadow-lg
              pb-[env(safe-area-inset-bottom)]
              translate-y-0 transition-transform duration-200 ease-out"
            >
              <div
                className="flex text-gray-800 justify-end px-4 pt-2"
                onClick={closeSheet}
              >
                X
              </div>
              <div className="flex px-6 gap-1 flex-col">
                <div className="flex w-full gap-[20px] justify-between relative ">
                  <div className="relative flex justify-center shrink-0 w-[80px] h-[80px] bg-white rounded-lg overflow-hidden shadow-sm shadow-gray-10">
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
                    <p className="text-xl text-gray-700 font-bold">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      {item.name.toLowerCase()}
                    </p>
                  </div>
                </div>
                <a
                  href={item.url || "#"}
                  target="_blank"
                  className="text-sm text-gray-700"
                >
                  {item.url}
                </a>
                {item.description[lang] && (
                  <Fragment>
                    <p className="text-lg text-gray-700 font-bold mt-5">
                      Description
                    </p>
                    <p className="text-xs text-gray-400 ">
                      {item.description[lang]}
                    </p>
                  </Fragment>
                )}
              </div>

              <div className="px-4 pb-4 pt-20 flex justify-center">
                <a
                  href={item.url || "#"}
                  target="_blank"
                  className="w-1/2 text-center rounded-lg bg-blue-500 text-white text-sm py-2 hover:bg-blue-600"
                >
                  {t("go_to_dapp")}
                </a>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </Fragment>
  );
}
