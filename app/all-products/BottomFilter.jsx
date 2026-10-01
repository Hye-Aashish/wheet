"use client";

import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { BiCategory } from "react-icons/bi";
import { MdSort } from "react-icons/md";
import { IoColorFilterSharp, IoArrowBack } from "react-icons/io5";

const filterCategories = [
  { name: "Category", options: ["Durum Wheat (2)", "Organic Atta (2)", "Sharbati (1)"] },
  { name: "Price", options: ["Under ₹500", "₹500 - ₹1000"] },
  { name: "Packaging", options: ["5kg Bag", "10kg Bag", "20kg Pack"] },
  { name: "Form", options: ["Fine Flour", "Coarse Chakki"] },
];

const categoriesData = [
  {
    title: "Durum Wheat Atta",
    link: "/all-products",
    image: "/img/prod1.png"
  },
  {
    title: "Organic Chakki Atta",
    link: "/all-products",
    image: "/img/prod2.png"
  },
  {
    title: "Sharbati Premium Atta",
    link: "/all-products",
    image: "/img/prod3.png"
  },
  {
    title: "Multigrain Healthy Atta",
    link: "/all-products",
    image: "/img/prod4.png"
  }
];

export default function Superdropdown() {
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ duration: 500, easing: "ease-in-out", once: true });
      }).catch(() => {});
    }
  }, []);

  const toggleDropdown = (dropdown) => {
    setShowSortDropdown(dropdown === "sort" ? !showSortDropdown : false);
    setShowFilterDropdown(dropdown === "filter" ? !showFilterDropdown : false);
    setShowCategoriesDropdown(
      dropdown === "categories" ? !showCategoriesDropdown : false
    );
  };

  return (
    <>
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-[99999] bg-[#023c68] text-white px-5 md:px-12 py-3 flex justify-between items-center shadow-lg border-t border-white/10">
        <button
          className="flex items-center gap-2 text-sm font-medium hover:text-amber-300 transition cursor-pointer"
          onClick={() => toggleDropdown("categories")}
        >
          <BiCategory size={20} />
          <span>Categories</span>
        </button>

        <button
          className="flex items-center gap-2 text-sm font-medium hover:text-amber-300 transition cursor-pointer"
          onClick={() => toggleDropdown("sort")}
        >
          <MdSort size={20} />
          <span>Sort</span>
        </button>

        <button
          className="flex items-center gap-2 text-sm font-medium hover:text-amber-300 transition cursor-pointer"
          onClick={() => toggleDropdown("filter")}
        >
          <IoColorFilterSharp size={20} />
          <span>Filters</span>
        </button>
      </div>

      {showSortDropdown && (
        <div className="inset-0 fixed bg-black/60 z-[99999] flex flex-col justify-end">
          <div className="w-full bg-white rounded-t-2xl p-6 pb-20 space-y-4 animate-in slide-in-from-bottom duration-200 relative">
            <h3 className="text-center font-bold text-gray-800 text-base border-b pb-3">
              Sort Products By
            </h3>
            <button
              onClick={() => setShowSortDropdown(false)}
              className="absolute right-4 top-4 p-2 text-gray-500 hover:text-red-500 transition"
            >
              <RxCross2 size={20} />
            </button>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Featured & Newest",
                "Price: Low to High",
                "Price: High to Low",
                "Top Rated by Customers"
              ].map((item, index) => (
                <li
                  key={index}
                  onClick={() => setShowSortDropdown(false)}
                  className="py-2.5 px-4 rounded-xl hover:bg-gray-100 cursor-pointer font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {showCategoriesDropdown && (
        <div className="inset-0 fixed bg-black/60 z-[99999] flex flex-col justify-end">
          <div className="w-full bg-white rounded-t-2xl p-6 pb-20 space-y-4 animate-in slide-in-from-bottom duration-200 relative">
            <h3 className="text-center font-bold text-gray-800 text-base border-b pb-3">
              Select Atta Category
            </h3>
            <button
              onClick={() => setShowCategoriesDropdown(false)}
              className="absolute right-4 top-4 p-2 text-gray-500 hover:text-red-500 transition"
            >
              <RxCross2 size={20} />
            </button>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {categoriesData.map((category, index) => (
                <div
                  key={index}
                  onClick={() => setShowCategoriesDropdown(false)}
                  className="bg-gray-50 rounded-xl p-3 border border-gray-200 text-center cursor-pointer hover:border-[#023c68] transition"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-20 object-cover rounded-lg mb-2"
                  />
                  <p className="font-semibold text-xs text-gray-800 line-clamp-1">
                    {category.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showFilterDropdown && (
        <div className="inset-0 fixed bg-black/60 z-[99999] flex flex-col justify-end">
          <div className="w-full bg-white rounded-t-2xl p-6 pb-20 space-y-4 animate-in slide-in-from-bottom duration-200 relative max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-3 border-b">
              {selectedCategory ? (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-gray-600 text-sm font-semibold flex items-center gap-2"
                >
                  <IoArrowBack /> Back
                </button>
              ) : (
                <h3 className="font-bold text-gray-800 text-base">Filter Options</h3>
              )}
              <button
                onClick={() => setShowFilterDropdown(false)}
                className="text-gray-500 hover:text-red-500 transition"
              >
                <RxCross2 size={20} />
              </button>
            </div>

            <div className="py-2">
              <ul className="space-y-2 text-sm text-gray-700">
                {filterCategories.map((cat, idx) => (
                  <li
                    key={idx}
                    className="py-2.5 border-b border-gray-100 flex justify-between items-center cursor-pointer hover:bg-gray-50 px-2 rounded-lg"
                  >
                    <span className="font-medium">{cat.name}</span>
                    <span className="text-xs text-gray-400">{cat.options[0]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowFilterDropdown(false)}
                className="flex-1 py-2.5 bg-gray-100 text-gray-700 font-bold text-xs rounded-xl"
              >
                CLEAR ALL
              </button>
              <button
                onClick={() => setShowFilterDropdown(false)}
                className="flex-1 py-2.5 bg-[#023c68] text-white font-bold text-xs rounded-xl"
              >
                APPLY FILTERS
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
