
"use client";

import Link from "next/link";
import React, { useState, useRef } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function SuccessStory() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testmonials = [
    {
      heading: "Soft & Tasty Rotis",
      rating: 5,
      desc: "BAAZ Durum Wheat Traditional Atta gives my rotis a soft texture and delicious taste. The dough is easy to prepare and the quality feels really good. It has become a regular choice for our family.",
      img: "https://i.pravatar.cc/150?img=47",
      name: "Neha Sharma",
      position: "Homemaker",
    },
    {
      heading: "Great Everyday Atta",
      rating: 5,
      desc: "I have been using BAAZ Durum Wheat Atta for our daily meals and really like its texture. Rotis turn out soft and tasty, and the atta is easy to knead. A good option for everyday cooking.",
      img: "https://i.pravatar.cc/150?img=32",
      name: "Rahul Verma",
      position: "Working Professional",
    },
    {
      heading: "Perfect for Parathas",
      rating: 5,
      desc: "BAAZ Atta works really well for making parathas. The dough feels smooth and the parathas come out delicious. I also like the traditional wheat taste of this atta.",
      img: "https://i.pravatar.cc/150?img=44",
      name: "Pooja Mehta",
      position: "Home Cook",
    },
    {
      heading: "Wholesome Multigrain Choice",
      rating: 5,
      desc: "BAAZ Multigrain Atta has become part of our daily kitchen routine. I like having a blend of different grains in our meals, and the rotis taste great. The texture is also very good.",
      img: "https://i.pravatar.cc/150?img=25",
      name: "Amit Kapoor",
      position: "Business Owner",
    },
    {
      heading: "Good Taste & Texture",
      rating: 5,
      desc: "The quality of BAAZ Multigrain Atta is impressive. Rotis are soft, tasty, and easy to make. It is a convenient choice when you want to add variety to your everyday meals.",
      img: "https://i.pravatar.cc/150?img=49",
      name: "Simran Kaur",
      position: "Homemaker",
    },
    {
      heading: "Family Favourite",
      rating: 5,
      desc: "Everyone at home enjoys rotis made with BAAZ Atta. The flour has a nice texture and the rotis remain soft when prepared properly. We have been happy with the overall quality.",
      img: "https://i.pravatar.cc/150?img=12",
      name: "Vikas Thakur",
      position: "Family Customer",
    },
    {
      heading: "Excellent for Daily Rotis",
      rating: 5,
      desc: "BAAZ Durum Wheat Traditional Atta is now one of my preferred atta choices. It makes smooth dough and tasty rotis. The traditional wheat flavour is especially nice.",
      img: "https://i.pravatar.cc/150?img=36",
      name: "Anjali Gupta",
      position: "Home Cook",
    },
    {
      heading: "Multigrain Atta Tastes Great",
      rating: 4,
      desc: "I wanted to include more variety in our everyday meals, so I tried BAAZ Multigrain Atta. The taste is good and it works well for rotis and parathas.",
      img: "https://i.pravatar.cc/150?img=5",
      name: "Karan Malhotra",
      position: "Customer",
    },
    {
      heading: "Smooth Dough Every Time",
      rating: 5,
      desc: "One thing I really like about BAAZ Atta is how easily the dough comes together. The rotis have a good texture and taste delicious with our regular homemade meals.",
      img: "https://i.pravatar.cc/150?img=23",
      name: "Ritu Sharma",
      position: "Homemaker",
    },
    {
      heading: "Quality We Can Trust",
      rating: 5,
      desc: "BAAZ has been a great addition to our kitchen. The atta quality is consistent and the taste is excellent. We regularly use it for rotis, chapatis, and parathas.",
      img: "https://i.pravatar.cc/150?img=68",
      name: "Deepak Sharma",
      position: "Retail Customer",
    },
    {
      heading: "Delicious Homemade Rotis",
      rating: 5,
      desc: "The rotis made with BAAZ Durum Wheat Traditional Atta are soft and delicious. I like its fine texture and the natural wheat taste. Definitely a good atta for everyday meals.",
      img: "https://i.pravatar.cc/150?img=45",
      name: "Meena Joshi",
      position: "Home Cook",
    },
    {
      heading: "A Good Multigrain Option",
      rating: 5,
      desc: "BAAZ Multigrain Atta is a convenient way to bring different grains into our regular meals. It makes tasty rotis and parathas and has become a regular product in our kitchen.",
      img: "https://i.pravatar.cc/150?img=60",
      name: "Nitin Sharma",
      position: "Customer",
    },
  ];

  const [showDec, setShowDec] = useState(110);
  const [expan, setExpand] = useState(null);

  const setExpnadHandler = (id) => {
    setExpand((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className="
        relative
        mt-5
        lg:mt-10
        overflow-hidden
        py-5
        md:py-10
        lg:py-16
        bg-[url('/img/test-bg.png')]
        bg-cover
        bg-center
      "
    >
      {/* Background Leaf */}
      <img
        src="/img/bg-leaf3.png"
        alt="BAAZ Atta Reviews"
        className="
          absolute
          opacity-60
          md:opacity-100
          -right-44
          md:right-0
          top-0
        "
      />

      {/* Background Shape */}
      <img
        src="/img/bg-shape3.png"
        alt="BAAZ Atta Reviews"
        className="absolute left-0 top-0"
      />

      <div className="relative z-10 bg-cover bg-center space-y-10 lg:space-y-16 text-black">

        <div
          className="
            px-5
            md:pl-16
            xl:pl-32
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-y-10
            lg:gap-y-0
            gap-x-5
            items-center
          "
        >
          {/* ================= LEFT SECTION ================= */}
          <div className="col-span-1 space-y-5">

            <span
              className="
                relative
                tracking-wider
                border-[3px]
                text-xs
                py-[0.3rem]
                md:py-2
                px-4
                md:px-7
                font-bold
                border-[#eee9e3]
              "
            >
              Happy Customers
            </span>

            <h3
              className="
                text-xl
                mt-2
                md:text-3xl
                xl:text-5xl
                font-bold
              "
            >
              What Our
              <br />
              Customers Say
            </h3>

            <p className="text-sm md:text-base text-justify">
              From soft rotis to delicious parathas, our customers love
              BAAZ Atta for its quality, taste, and everyday convenience.
              Discover what families and home cooks have to say about
              BAAZ Durum Wheat Traditional Atta and BAAZ Multigrain Atta.
            </p>

            {/* Navigation Buttons */}
            <div className="relative space-x-2 flex justify-start">

              <button
                ref={prevRef}
                className="
                  w-10
                  h-10
                  md:w-12
                  md:h-12
                  text-[#62371F]
                  hover:bg-[#62371F]
                  hover:text-white
                  flex
                  items-center
                  justify-center
                  text-lg
                  md:text-2xl
                  bg-white
                  group
                  rounded-full
                  transition-all
                  duration-500
                  ease-in-out
                "
              >
                <IoArrowBack
                  className="
                    group-hover:-translate-x-1
                    transition-all
                    duration-100
                    ease-in-out
                  "
                />
              </button>

              <button
                ref={nextRef}
                className="
                  w-10
                  h-10
                  md:w-12
                  md:h-12
                  text-[#62371F]
                  hover:bg-[#62371F]
                  hover:text-white
                  flex
                  items-center
                  justify-center
                  text-lg
                  md:text-2xl
                  bg-white
                  group
                  rounded-full
                  transition-all
                  duration-500
                  ease-in-out
                "
              >
                <IoArrowForward
                  className="
                    group-hover:translate-x-1
                    transition-all
                    duration-100
                    ease-in-out
                  "
                />
              </button>

            </div>
          </div>

          {/* ================= RIGHT SECTION ================= */}
          <div className="col-span-2">

            <Swiper
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"

              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
              }}
            >

              {testmonials.map((member, index) => (
                <SwiperSlide
                  key={index}
                  className="pb-10 md:pb-10"
                >
                  <div
                    className="
                      bg-white
                      shadow-xl
                      text-black
                      min-h-[250px]
                      border
                      border-gray-200
                      rounded-xl
                      p-6
                      transition-all
                      hover:shadow-2xl
                      hover:border-gray-300
                    "
                  >

                    {/* Review Heading */}
                    <h5
                      className="
                        font-bold
                        text-xl
                        md:text-2xl
                        text-gray-800
                      "
                    >
                      {member.heading}
                    </h5>

                    {/* Rating */}
                    <div className="flex items-center gap-x-1 text-yellow-500 mb-3">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <FaStar
                          key={starIndex}
                          className={
                            starIndex < member.rating
                              ? "opacity-100"
                              : "opacity-30"
                          }
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-gray-600 text-sm mb-4 leading-6">
                      {member.desc}
                    </p>

                    <hr className="border-gray-200 mb-4" />

                    {/* Customer */}
                    <div className="flex justify-between items-center">

                      <div className="flex items-center gap-x-3">

                        <img
                          src={member.img}
                          alt={member.name}
                          className="
                            h-10
                            w-10
                            rounded-full
                            object-cover
                          "
                        />

                        <div>
                          <h6 className="font-semibold text-gray-700">
                            {member.name}
                          </h6>

                          <p className="text-sm text-gray-500">
                            {member.position}
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>
                </SwiperSlide>
              ))}

            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
