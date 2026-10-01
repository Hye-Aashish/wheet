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
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper relative"
      >
        {swiperData.map((elm, index) => (
          <SwiperSlide key={index} className="">
            <div className="h-[30vh] md:h-[57vh] lg:h-[75vh] w-full">
              <img
                src={elm.banner}
                alt="BAAZ Wheat Atta Banner"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                className="w-full h-full object-cover object-center"
              />
            </div>

          </SwiperSlide>
        ))}
      </Swiper>



    </>
  );
}
