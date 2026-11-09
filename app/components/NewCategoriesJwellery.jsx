"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaWheatAwn, FaCheck } from "react-icons/fa6";
import { GiWheat } from "react-icons/gi";
import AyutramartProduct from "../AyutramartData";

const ringStyles = [
  "from-sky-400 via-amber-300 to-[#023c68]",
  "from-orange-400 via-amber-300 to-[#023c68]",
  "from-rose-400 via-orange-300 to-[#023c68]",
  "from-amber-400 via-yellow-300 to-[#023c68]",
  "from-emerald-400 via-green-300 to-[#023c68]",
  "from-stone-400 via-emerald-300 to-[#023c68]",
];

const bgStyles = [
  "from-sky-50 via-white to-amber-50/30",
  "from-orange-50 via-white to-amber-50/30",
  "from-rose-50 via-white to-orange-50/30",
  "from-amber-50 via-white to-yellow-50/40",
  "from-emerald-50 via-white to-stone-50",
  "from-stone-100 via-white to-emerald-50/30",
];

export default function NewCategoriesJwellery() {
  const [hoveredId, setHoveredId] = useState(null);

  const products = AyutramartProduct.map((item, index) => {
    const slug = item.title.toLowerCase().replace(/,/g, "").split(" ").join("-");
    return {
      id: String(item.id),
      src: item.img,
      title: item.heading,
      category: item.category,
      weight: item.netWeight,
      highlight: item.regionalName || item.brand,
      ringGradient: ringStyles[index % ringStyles.length],
      bgGradient: bgStyles[index % bgStyles.length],
      link: `/product/${slug}`,
    };
  });

  return (
    <section
      id="products-range"
      className="categories bg-gradient-to-b from-[#f5f3ec] via-[#f7f5ef] to-[#f3f1ec] py-14 md:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#023c68]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="px-4 sm:px-6 md:px-12 xl:px-20 container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-[#023c68] border border-stone-200 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase shadow-2xs">
            <FaWheatAwn className="text-amber-600 animate-pulse text-sm" />
            <span>Matwala Foods · BAAZ Flour Mill</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
            Our Products Range
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Six premium 4 lb flours — kodo, besan, ragi, corn, bajra, and jowar — stone-ground in Surrey, BC and labelled on every bag.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {products.map((item, index) => {
            const isHovered = hoveredId === item.id;

            return (
              <Link
                key={index}
                href={item.link}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group flex flex-col items-center w-[150px] sm:w-[170px] md:w-[190px] lg:w-[210px] cursor-pointer"
              >
                <div className="relative mb-4 flex items-center justify-center">
                  <div
                    className={`w-[145px] h-[145px] sm:w-[165px] sm:h-[165px] md:w-[185px] md:h-[185px] lg:w-[205px] lg:h-[205px] rounded-full p-1.5 bg-gradient-to-tr ${item.ringGradient} shadow-md group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-1`}
                  >
                    <div
                      className={`w-full h-full rounded-full bg-gradient-to-b ${item.bgGradient} p-3.5 sm:p-4 md:p-5 flex items-center justify-center relative overflow-hidden shadow-inner border border-white/80`}
                    >
                      <div className="absolute w-28 h-28 bg-white/90 rounded-full blur-md pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500 ease-out relative z-10"
                      />
                    </div>
                  </div>

                  <div className="absolute -bottom-2.5 z-20">
                    <span className="bg-[#023c68] group-hover:bg-amber-600 text-white font-extrabold text-[10px] sm:text-[11px] px-3 py-0.5 rounded-full shadow-md border-2 border-white transition-colors duration-300 block whitespace-nowrap">
                      {item.weight}
                    </span>
                  </div>
                </div>

                <div className="text-center mt-2 flex flex-col items-center space-y-1 w-full px-1">
                  <span className="text-[10px] sm:text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
                    {item.category}
                  </span>

                  <h3 className="font-serif font-bold text-gray-900 text-sm sm:text-base md:text-lg group-hover:text-[#023c68] transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-[11px] text-stone-500 line-clamp-1">{item.highlight}</p>

                  <div className="pt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#023c68] group-hover:text-amber-600 transition-colors opacity-80 group-hover:opacity-100">
                    <span>View Product</span>
                    <FaArrowRight className="text-[9px] transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-stone-300/60 max-w-5xl mx-auto">
          <div className="bg-white/70 backdrop-blur-xs p-4 rounded-2xl border border-stone-200/80 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center text-lg shrink-0">
              <GiWheat />
            </div>
            <div>
              <h4 className="font-bold text-sm text-stone-900">Product of Canada</h4>
              <p className="text-xs text-stone-500">Locally milled in Surrey, BC</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xs p-4 rounded-2xl border border-stone-200/80 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-[#023c68]/10 text-[#023c68] flex items-center justify-center text-lg shrink-0">
              <FaWheatAwn />
            </div>
            <div>
              <h4 className="font-bold text-sm text-stone-900">Premium Stone-Ground</h4>
              <p className="text-xs text-stone-500">Natural taste and wholesome nutrition</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xs p-4 rounded-2xl border border-stone-200/80 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center text-lg shrink-0">
              <FaCheck />
            </div>
            <div>
              <h4 className="font-bold text-sm text-stone-900">4 lb Retail Pack</h4>
              <p className="text-xs text-stone-500">Same size as in-store BAAZ bags</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
