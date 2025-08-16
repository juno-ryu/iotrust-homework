"use client";
import React from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import { SwiperOptions } from "swiper/types";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

import { useTranslation } from "@/shared/utils/i18next/i18next.client";
import { Language } from "@/shared/types/common";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlideItem } from "@/app/_components/client/banner/banner.type";

interface BannerProps {
  banners: SlideItem[];
  lang: Language;
  options?: SwiperOptions;
}

export default function Banner(props: BannerProps) {
  const { banners, lang, options } = props;
  const { t } = useTranslation(lang, "common");

  const defaultOptions: SwiperOptions = {
    modules: [Pagination, Autoplay],
    pagination: { type: "fraction" },
    autoplay: { delay: 3000 },
    loop: true,
    spaceBetween: 20,
    ...options,
  };

  if (!banners || banners.length === 0) {
    return <div className="text-center text-gray-500">{t("no-banners")}</div>;
  }
  return (
    <Swiper {...defaultOptions}>
      {banners.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-[160px]">
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              fill
              style={{ objectFit: "cover" }}
              quality={90}
              sizes="360px"
            />
            <p
              className="absolute top-0 left-0 text-white p-3 text-lg"
              dangerouslySetInnerHTML={{ __html: slide.content }}
            />
            <a
              href={slide.ctaUrl}
              target="_blank"
              className="absolute bottom-3 left-3 bg-white text-black font-bold py-2 px-4 rounded-lg shadow-md"
            >
              {slide.ctaText}
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
