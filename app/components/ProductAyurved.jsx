"use client";
import React, { useState } from "react";
import Link from "next/link";
import ProductAyurvedCard from "./ProductAyurvedCard";
import AyutramartProduct from "../AyutramartData";
import { FaArrowRight } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

export default function ProductAyurved() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { label: "All", filter: "All" },
    { label: "Durum Wheat", filter: "Durum" },
    { label: "Multigrain", filter: "Multigrain" },
    { label: "Whole Wheat", filter: "Whole Wheat" },
    { label: "Sharbati", filter: "Sharbati" },
    { label: "Organic Chakki", filter: "Organic" },
  ];

  const displayedProducts = AyutramartProduct.filter((prod) => {
    if (selectedCategory === "All") return true;
    const cat = selectedCategory.toLowerCase();
    return (
      prod.heading?.toLowerCase().includes(cat) ||
      prod.title?.toLowerCase().includes(cat) ||
      prod.category?.toLowerCase().includes(cat)
    );
  });

  return (
    <section className="relative categories bg-[#F3F1EC] py-12 lg:py-20 overflow-hidden">
      {/* Decorative Leaf (matches original design & screenshot) */}
      <img
        src="/img/bg-leaf1.png"
        alt="Natural leaf decoration"
        className="absolute left-0 top-0 our-product-anime pointer-events-none select-none z-0 opacity-80"
      />

      <div className="w-full relative z-10 container mx-auto px-5 md:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10 space-y-2">
          <span className="text-xs md:text-sm font-bold tracking-widest text-[#023c68] uppercase bg-[#023c68]/10 px-4 py-1.5 rounded-full inline-block">
            100% Pure & Stone-Ground
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic text-gray-900 tracking-wide font-serif">
            Our Products
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Discover all wholesome varieties of premium Canadian Durum Wheat, Sharbati, Organic Chakki, and Multigrain flours.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.filter;
            return (
              <button
                key={cat.filter}
                onClick={() => setSelectedCategory(cat.filter)}
                className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#023c68] text-white shadow-md scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {isActive && <FaCheck className="text-[10px]" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div
          className={`grid gap-6 items-stretch ${
            displayedProducts.length === 1
              ? "grid-cols-1 max-w-sm mx-auto"
              : displayedProducts.length === 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          }`}
        >
          {displayedProducts.map((elm, index) => (
            <div key={elm.id || index} className="flex h-full">
              <ProductAyurvedCard product={elm} />
            </div>
          ))}
        </div>

        {/* Bottom CTA to Product Page */}
        <div className="mt-12 text-center">
          <Link
            href="/all-products"
            className="inline-flex items-center gap-3 bg-[#023c68] hover:bg-[#4a9347] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base cursor-pointer"
          >
            <span>View All Products Range</span>
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
