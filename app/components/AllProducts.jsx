"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { FaSearch, FaFilter } from "react-icons/fa";
import AyutramartProduct from "../AyutramartData";
import ProductAyurvedCard from "./ProductAyurvedCard";

export default function AllProducts() {
  const [sortBy, setSortBy] = useState("newest");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState(1500);

  const categories = [
    "All",
    "Durum Wheat",
    "Multigrain Atta",
    "Corn Flour",
    "Besan Flour",
    "Jawar Flour",
  ];

  // Filter products based on Category, Search & Price
  const filteredProducts = AyutramartProduct.filter((prod) => {
    const matchesCategory =
      selectedCategory === "All" ||
      prod.heading?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      prod.category?.toLowerCase().includes(selectedCategory.toLowerCase());

    const matchesSearch =
      !searchQuery ||
      prod.heading?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPrice = Number(prod.price) <= priceRange;

    return matchesCategory && matchesSearch && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-high") return Number(b.price) - Number(a.price);
    if (sortBy === "price-low") return Number(a.price) - Number(b.price);
    if (sortBy === "rating") return Number(b.rating) - Number(a.rating);
    return 0; // Default newest / original order
  });

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
      <div className="container mx-auto px-4 sm:px-6 md:px-12 xl:px-28 py-8 lg:py-16 pb-28 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* SIDEBAR FILTER (VISIBLE ON BOTH MOBILE AND DESKTOP) */}
          <div className="w-full lg:col-span-3 bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6 sm:space-y-8 static lg:sticky lg:top-24">
            
            {/* Search Input */}
            <div>
              <h3 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4 flex items-center gap-2">
                <FaSearch className="text-[#023c68]" /> Search Products
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search flour, atta..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#023c68]"
                />
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4 flex items-center gap-2">
                <FaFilter className="text-[#023c68]" /> Categories
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-sm font-semibold transition cursor-pointer flex items-center justify-between ${
                      selectedCategory === cat
                        ? "bg-[#023c68] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && <span className="text-xs">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Max Price Slider */}
            <div>
              <h3 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4 flex items-center justify-between">
                <span>Max Price:</span>
                <span className="text-[#023c68]">₹{priceRange}</span>
              </h3>
              <input
                type="range"
                min="100"
                max="1500"
                step="50"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-[#023c68] cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>₹100</span>
                <span>₹1500</span>
              </div>
            </div>

            {/* Reset Filters */}
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                setPriceRange(1500);
                setSortBy("newest");
              }}
              className="w-full py-2.5 rounded-xl border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            >
              Reset All Filters
            </button>

          </div>

          {/* MAIN PRODUCT GRID & CONTROLS */}
          <div className="w-full lg:col-span-9 space-y-6">
            
            {/* Top Controls Bar */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-row justify-between items-center gap-4">
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                Showing <strong className="text-gray-900 font-bold">{sortedProducts.length}</strong> products
              </p>

              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm text-gray-500 font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-200 bg-gray-50 rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#023c68] cursor-pointer"
                >
                  <option value="newest">Featured & Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {sortedProducts.map((elm, index) => (
                  <div key={elm.id || index} className="w-full flex h-full">
                    <ProductAyurvedCard product={elm} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-gray-100 space-y-3">
                <h3 className="text-xl font-bold text-gray-800">No Products Found</h3>
                <p className="text-sm text-gray-500">Try adjusting your filters or search keywords.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                    setPriceRange(1500);
                  }}
                  className="px-5 py-2.5 bg-[#023c68] text-white rounded-full text-xs font-bold cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
