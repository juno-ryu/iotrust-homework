"use client";
import React, { FC } from "react";

import { SwiperSlide, Swiper as SwiperWrapper } from "swiper/react";
import { SwiperOptions } from "swiper/types";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideItem {
  id: number;
  img: string;
  title: string;
  content: string;
}

interface SwiperProps {
  slides: SlideItem[];
  options?: SwiperOptions;
}

export default function Swiper(props: SwiperProps) {
  const { slides, options } = props;

  const defaultOptions: SwiperOptions = {
    modules: [Pagination, Autoplay],
    pagination: { type: "fraction" },
    autoplay: { delay: 3000 },
    loop: true,
    spaceBetween: 20,
    ...options,
  };

  if (!slides || slides.length === 0) {
    return (
      <div className="text-center text-gray-500">슬라이드가 없습니다.</div>
    );
  }
  return (
    <SwiperWrapper {...defaultOptions}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-[160px]">
            <Image
              src={slide.img}
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
            <button className="absolute bottom-3 left-3 bg-white text-black font-bold py-2 px-4 rounded">
              구매하기
            </button>
          </div>
        </SwiperSlide>
      ))}
    </SwiperWrapper>
  );
}
