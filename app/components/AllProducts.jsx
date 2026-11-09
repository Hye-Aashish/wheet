"use client";
import Link from "next/link";
import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import AyutramartProduct from "../AyutramartData";
import ProductAyurvedCard from "./ProductAyurvedCard";

export default function AllProducts() {
  return (
    <div className="bg-[#f8f6f0] min-h-screen">
      
      {/* BANNER HEADER */}
      <div className="relative text-white">
        <div className="bg-cover bg-center bg-no-repeat relative bg-[url('/img/commonBanner/1.webp')] h-[20vh] sm:h-[25vh] lg:h-[38vh] flex flex-col justify-center items-center bg-[#023c68]">
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative text-center px-4 md:px-16 xl:px-40 space-y-2 sm:space-y-3">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold uppercase tracking-wide">
              Our Atta Range
            </h1>

            <div className="flex items-center justify-center gap-x-2 text-xs sm:text-sm md:text-base font-medium">
              <Link href="/" className="hover:text-amber-400 transition">
                Home
              </Link>
              <FaGreaterThan className="text-xs opacity-70" />
              <span className="text-amber-400">All Products</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN PRODUCTS SECTION */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 xl:px-24 py-10 lg:py-16">
        
        {/* Section Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <span className="text-xs md:text-sm font-bold tracking-widest text-[#023c68] uppercase bg-[#023c68]/10 px-4 py-1.5 rounded-full inline-block">
            100% Pure & Freshly Stone-Ground
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Explore All Products
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            All six BAAZ Flour Mill 4 lb bags — kodo, besan, ragi, corn, bajra, and jowar.
          </p>
        </div>

        {/* Product Grid - Full Width without Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {AyutramartProduct.map((elm, index) => (
            <div key={elm.id || index} className="w-full flex h-full">
              <ProductAyurvedCard product={elm} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
