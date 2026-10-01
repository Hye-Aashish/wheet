"use client";
import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaStar } from "react-icons/fa6";
import { IoMdCart, IoMdClose } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Link from "next/link";

export default function ProductAyurvedCard({ product, data }) {
  const currentProduct = product || data;
  if (!currentProduct) return null;

  const {
    img,
    title,
    imgHover,
    inerimgList,
    heading,
    description,
    price,
    rating,
    discount,
    category,
    netWeight,
    reviewsCount,
  } = currentProduct;

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [quickView, setQuickView] = useState(false);
  const [activeImg, setActiveImg] = useState(inerimgList ? inerimgList[0] : img);

  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
  };

  const productSlug = title
    ? title
        .toLowerCase()
        .replace(/,/g, "")
        .split(" ")
        .join("-")
    : "";

  const QuickView = () => {
    return (
      <div className="fixed inset-0 bg-black/60 z-[999999] flex justify-center items-center px-4 md:px-8 py-6 overflow-y-auto backdrop-blur-xs">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl relative overflow-hidden my-auto border border-gray-100 animate-in fade-in zoom-in duration-200">
          <button
            onClick={() => setQuickView(false)}
            className="absolute z-20 top-4 right-4 bg-gray-100 hover:bg-red-500 hover:text-white transition rounded-full p-2 text-xl text-gray-700 cursor-pointer shadow-sm"
            title="Close"
          >
            <IoMdClose />
          </button>

          <div className="grid md:grid-cols-5 gap-6 p-6 sm:p-8 md:p-10">
            <div className="leftside md:col-span-2 w-full flex flex-col-reverse lg:flex-row gap-4 items-center">
              <div className="flex lg:flex-col gap-2.5 overflow-x-auto max-w-full">
                {inerimgList?.map((elm, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImg(elm)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg border-2 overflow-hidden cursor-pointer transition ${
                      activeImg === elm ? "border-[#023c68] ring-2 ring-[#023c68]/20" : "border-gray-200"
                    }`}
                  >
                    <img src={elm} className="w-full h-full object-cover" alt="thumbnail" />
                  </button>
                ))}
              </div>

              <div
                className="relative h-[260px] sm:h-[320px] md:h-[360px] w-full border border-gray-200 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center cursor-zoom-in"
                onMouseEnter={() => setZoom(true)}
                onMouseLeave={() => setZoom(false)}
                onMouseMove={handleMouseMove}
              >
                <img
                  ref={imgRef}
                  className="w-full h-full object-cover"
                  src={activeImg || img}
                  alt={heading}
                />
                {zoom && (
                  <div
                    className="absolute inset-0 bg-no-repeat rounded-xl pointer-events-none"
                    style={{
                      backgroundImage: `url(${activeImg || img})`,
                      backgroundSize: "220%",
                      backgroundPosition: `${position.x}% ${position.y}%`,
                    }}
                  ></div>
                )}
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col justify-between space-y-4 max-h-[80vh] overflow-y-auto pr-2">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#023c68] bg-[#023c68]/10 px-3 py-1 rounded-full">
                  Quick Preview
                </span>
                <h2 className="text-2xl font-bold text-gray-900 leading-snug">
                  {heading}
                </h2>
                <div className="flex items-center gap-2 text-amber-500 text-sm font-semibold">
                  <FaStar />
                  <span>{rating || "4.8"} / 5.0</span>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {description}
                </p>

                <ul className="text-sm text-gray-700 space-y-2 pt-2 border-t border-gray-100">
                  <li className="flex justify-between">
                    <span className="text-gray-500">Availability:</span>
                    <strong className="text-green-600 font-semibold">In Stock</strong>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Packaging:</span>
                    <strong className="text-gray-800 font-medium">Food Grade Sealed Bag</strong>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Shelf Life:</span>
                    <strong className="text-gray-800 font-medium">9 Months from MFG</strong>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-100">
                {/* Price and discount commented out */}
                {/* 
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-gray-900">₹{price}</span>
                  <span className="line-through text-gray-400 text-base">₹{parseInt(price) + 150}</span>
                  <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">-{discount}% OFF</span>
                </div>
                */}

                <Link
                  href={`/product/${productSlug}`}
                  onClick={() => setQuickView(false)}
                  className="w-full bg-[#023c68] hover:bg-[#4a9347] transition text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-base shadow-md"
                >
                  <IoMdCart className="text-xl" />
                  <span>View Full Product Details</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="card group w-full shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden bg-white flex flex-col h-full justify-between border border-gray-100 hover:border-gray-200">
        
        {/* Product Image Box */}
        <div className="relative w-full h-72 sm:h-80 md:h-72 overflow-hidden bg-[#faf8f5] flex items-center justify-center p-4">
          {/* Discount badge commented out */}
          {/* 
          {discount && (
            <span className="absolute top-3 left-3 z-10 bg-green-600 text-white text-xs font-bold py-1 px-2.5 rounded-full shadow-sm">
              -{discount}%
            </span>
          )}
          */}
          
          <Link href={`/product/${productSlug}`} className="w-full h-full flex items-center justify-center">
            <img
              src={img}
              alt={heading}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Hover Overlay with Quick Preview */}
          <div className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 bg-black/5 pointer-events-none">
            <Link href={`/product/${productSlug}`} className="w-full h-full flex items-center justify-center pointer-events-auto">
              <img
                src={imgHover || img}
                alt={heading}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </Link>

            <div className="absolute inset-0 z-10 flex items-start p-3 justify-end pointer-events-auto">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setQuickView(true);
                }}
                className="bg-white/90 backdrop-blur-sm cursor-pointer text-gray-700 hover:bg-[#023c68] hover:text-white p-2.5 rounded-full shadow-md transition"
                title="Quick View"
              >
                <MdOutlineRemoveRedEye className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Card Content */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            {category && (
              <span className="text-[11px] font-bold text-[#023c68] uppercase tracking-wider bg-[#023c68]/10 px-2.5 py-0.5 rounded-full inline-block">
                {category}
              </span>
            )}
            
            <Link
              href={`/product/${productSlug}`}
              className="block font-bold text-base sm:text-lg text-gray-900 hover:text-[#023c68] transition-colors line-clamp-2 min-h-[3rem]"
            >
              {heading}
            </Link>
            
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 min-h-[2.5rem]">
              {description}
            </p>
          </div>

          {/* Rating & Net Weight Summary */}
          <div className="pt-3 border-t border-gray-100 mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-amber-500 text-xs sm:text-sm font-semibold">
              <FaStar className="text-xs" />
              <span>{rating || "4.8"}</span>
              <span className="text-gray-400 font-normal">({reviewsCount || 340})</span>
            </div>

            <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
              {netWeight || "10 kg"}
            </span>
          </div>
        </div>
      </div>

      {quickView && mounted && createPortal(<QuickView />, document.body)}
    </>
  );
}
