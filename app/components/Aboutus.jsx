
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

export default function Aboutus() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
        bg-[url('/img/about/bg.webp')]
      "
    >
      {/* ================= BACKGROUND OVERLAY ================= */}
      <div className="absolute inset-0 bg-white/95" />

      {/* ================= ABOUT CONTENT ================= */}
      <div
        className="
          relative
          z-10
          py-10
          sm:py-14
          md:py-16
          lg:py-20
          xl:py-24
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-4
            sm:px-6
            md:px-8
            lg:px-10
            xl:px-8
          "
        >
          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-12
              sm:gap-14
              md:gap-16
              lg:grid-cols-2
              lg:gap-12
              xl:gap-20
            "
          >
            {/* =================================================
                LEFT IMAGE
            ================================================= */}
            <div className="relative mx-auto w-full max-w-[650px] lg:mx-0">
              {/* Decorative Circle */}
              <div
                className="
                  absolute
                  -left-3
                  -top-3
                  hidden
                  h-16
                  w-16
                  rounded-full
                  bg-[#023c68]/10
                  sm:block
                  sm:-left-4
                  sm:-top-4
                  sm:h-20
                  sm:w-20
                  md:h-24
                  md:w-24
                  lg:-left-6
                  lg:-top-6
                "
              />

              {/* Image */}
              <div
                className="
                  relative
                  z-10
                  overflow-hidden
                  rounded-[18px]
                  shadow-[0_15px_45px_rgba(0,0,0,0.12)]
                  sm:rounded-[22px]
                  md:rounded-[26px]
                  lg:rounded-[28px]
                "
              >
                <Image
                  src="/img/about/12.png"
                  alt="About Our Company"
                  width={700}
                  height={650}
                  priority
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 90vw,
                    50vw
                  "
                  className="
                    h-[270px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105

                    sm:h-[360px]
                    md:h-[420px]
                    lg:h-[470px]
                    xl:h-[520px]
                  "
                />
              </div>

           
            </div>

            {/* =================================================
                RIGHT CONTENT
            ================================================= */}
            <div className="relative z-10 pt-2 lg:pt-0">
              {/* Small Heading */}
              <div className="mb-3 flex items-center gap-2 sm:gap-3">
                <span className="h-[2px] w-6 bg-[#023c68] sm:w-8" />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[1.5px]
                    text-[#023c68]

                    sm:text-xs
                    sm:tracking-[2px]

                    md:text-sm
                  "
                >
                  About Our Company
                </span>
              </div>

              {/* Main Heading */}
              <h2
                className="
                  max-w-2xl
                  text-[28px]
                  font-bold
                  leading-[1.18]
                  tracking-tight
                  text-gray-900

                  sm:text-[34px]
                  sm:leading-[1.15]

                  md:text-[40px]

                  lg:text-[40px]

                  xl:text-[44px]

                  2xl:text-[52px]
                "
              >
                Quality You Can Trust,
                <span className="block text-[#023c68]">
                  Service You Can Count On.
                </span>
              </h2>

              {/* First Description */}
              <p
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-6
                  text-gray-600

                  sm:mt-6
                  sm:text-base
                  sm:leading-7

                  md:text-lg

                  lg:text-base

                  xl:text-lg
                "
              >
                We are committed to bringing high-quality products and a
                reliable shopping experience to our customers. 
              </p>

              {/* Second Description */}
              <p
                className="
                  mt-3
                  max-w-2xl
                  text-xs
                  leading-6
                  text-gray-500

                  sm:mt-4
                  sm:text-sm
                  sm:leading-7

                  md:text-base
                "
              >
                Our goal is simple — to make quality products easily
                accessible while building long-lasting relationships with our
                customers through trust, transparency, and excellent service.
              </p>

              {/* =================================================
                  FEATURES
              ================================================= */}
              <div
                className="
                  mt-7
                  grid
                  grid-cols-1
                  gap-5

                  sm:mt-8
                  sm:grid-cols-2
                  sm:gap-6

                  lg:gap-5

                  xl:gap-8
                "
              >
                {/* Feature 1 */}
                <div className="flex items-start gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#023c68]/10
                      text-[#023c68]

                      sm:h-11
                      sm:w-11
                    "
                  >
                    <IoIosCheckmarkCircle className="text-[22px] sm:text-2xl" />
                  </div>

                  <div>
                    <h4
                      className="
                        text-sm
                        font-bold
                        text-gray-900
                        sm:text-base
                      "
                    >
                      Quality Products
                    </h4>

                    <p
                      className="
                        mt-1
                        max-w-[220px]
                        text-xs
                        leading-5
                        text-gray-500
                        sm:text-sm
                      "
                    >
                      Carefully selected products for you.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#023c68]/10
                      text-[#023c68]

                      sm:h-11
                      sm:w-11
                    "
                  >
                    <IoIosCheckmarkCircle className="text-[22px] sm:text-2xl" />
                  </div>

                  <div>
                    <h4
                      className="
                        text-sm
                        font-bold
                        text-gray-900
                        sm:text-base
                      "
                    >
                      Customer First
                    </h4>

                    <p
                      className="
                        mt-1
                        max-w-[220px]
                        text-xs
                        leading-5
                        text-gray-500
                        sm:text-sm
                      "
                    >
                      Your satisfaction always matters to us.
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  BUTTON
              ================================================= */}
              <div className="mt-8 sm:mt-9">
                <Link
                  href="/about"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2.5
                    rounded-lg
                    bg-[#023c68]
                    px-5
                    py-3
                    text-xs
                    font-semibold
                    text-white
                    shadow-[0_8px_25px_rgba(156,95,50,0.25)]
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-[#7f4b28]
                    hover:shadow-[0_12px_30px_rgba(156,95,50,0.30)]

                    sm:px-6
                    sm:py-3.5
                    sm:text-sm

                    md:px-7
                  "
                >
                  Discover More

                  <FaArrowRight
                    className="
                      text-[10px]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      sm:text-xs
                    "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
