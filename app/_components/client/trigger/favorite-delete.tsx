"use client";

import Portal from "@/app/_components/client/portal/portal";
import { Language } from "@/shared/types/common";
import { useTranslation } from "@/shared/utils/i18next/i18next.client";
import { ReactNode, useCallback, useState } from "react";

interface FavoriteDeleteTriggerProps {
  id: string;
  lang: Language;
}

export default function FavoriteDeleteTrigger(
  props: FavoriteDeleteTriggerProps
) {
  const { id, lang } = props;
  const { t } = useTranslation(lang, "common");
  const [open, setOpen] = useState(false);

  const openModal = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation?.();
    setOpen(true);
  }, []);

  const closeModal = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation?.();
    setOpen(false);
  }, []);

  return (
    <div className="flex items-center justify-center z-50" onClick={openModal}>
      <p className="cursor-pointer">삭제</p>
      {open && (
        <Portal>
          <div
            id="alert-modal"
            className="fixed z-100 inset-0 bg-black/60 flex items-center justify-center "
            onClick={closeModal}
          >
            <div className="bg-white max-w-[320px] rounded-lg shadow-lg p-4 w-full relative">
              <div className="pt-2 pb-1">
                <h3 className="text-base font-semibold text-gray-800">
                  {`${t("dapp_favorite_title")} ${t("dapp_favorite_delete")}`}
                </h3>
              </div>

              <div className="py-3 max-h-[60vh] overflow-y-auto">
                <p className="text-sm text-gray-700">
                  {t("dapp_favorite_delete_confirm")}
                </p>
              </div>

              <div className="pt-2 flex gap-[10px]">
                <button
                  className="w-1/2 rounded-lg bg-gray-100 text-black text-sm py-2 "
                  onClick={closeModal}
                >
                  {t("button_cancel")}
                </button>
                <button
                  className="w-1/2 rounded-lg bg-blue-500 text-white text-sm py-2 "
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {t("button_confirm")}
                </button>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
