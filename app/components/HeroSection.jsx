"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function HeroSection() {
  const swiperData = [
    {
      link: "",
      banner: "/img/banner/1.png",
    },
    {
      link: "",
      banner: "/img/banner/2.png",
    },
  ];

  return (
    <section className="w-full relative bg-[#faf8f5] overflow-hidden">
      <Swiper
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper relative w-full"
      >
        {swiperData.map((elm, index) => (
          <SwiperSlide key={index} className="w-full">
            <div className="w-full relative">
              <img
                src={elm.banner}
                alt="BAAZ Wheat Atta Banner"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                className="w-full h-auto block object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
