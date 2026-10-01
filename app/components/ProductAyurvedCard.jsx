"use client";
import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa6";
import { IoMdCart, IoMdClose } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { addWish, removeWish } from "../store/wishListSlice";
import { useSelector } from "react-redux";

export default function ProductAyurvedCard({ product }) {
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
  } = product;
  const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [wishAdd, SetWishAdd] = useState(false);
  const wishList = useSelector((state) => state.wish?.wishlist || []);

  const isWishList = (productId) => {
    return wishList?.find((elm) => elm.id == productId);
  };

  const dispatch = useDispatch();

  const handleWishListToogle = (product) => {
    if (isWishList(product.id)) {
      dispatch(removeWish(product));
      toast.success("🎉 Removed from wishlist successfully!");
    } else {
      dispatch(addWish(product));
      toast.success("🎉 Added to wishlist successfully!");
    }
  };

  const [quickView, setQuickView] = useState(false);
  const [activeImg, setActiveImg] = useState(inerimgList ? inerimgList[0] : img);

  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
  };

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
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-gray-900">₹{price}</span>
                  <span className="line-through text-gray-400 text-base">₹{parseInt(price) + 150}</span>
                  <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">-{discount}% OFF</span>
                </div>

                <Link
                  href={`/product/${title
                    .toLowerCase()
                    .replace(/,/g, "")
                    .split(" ")
                    .join("-")}`}
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

  const added = mounted && isWishList(product.id);
  return (
    <>
      <div className="card group w-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden bg-white flex flex-col h-full justify-between">
        <div className="relative w-full h-72 sm:h-80 md:h-72 overflow-hidden bg-[#faf8f5] flex items-center justify-center p-4">
          <span className="absolute top-3 left-3 z-10 bg-green-600 text-white text-xs font-bold py-1 px-2.5 rounded-full shadow-sm">
            -{discount}%
          </span>
          <img
            src={img}
            alt={heading}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 bg-black/5">
            <img
              src={imgHover}
              alt={heading}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain"
            />

            <div className="absolute inset-0 z-10 flex items-start p-3 justify-end gap-4">
              <button
                onClick={() => setQuickView(true)}
                className="bg-white/90 backdrop-blur-sm cursor-pointer text-gray-700 hover:bg-black hover:text-white p-2.5 rounded-full shadow-md transition"
                title="Quick View"
              >
                <MdOutlineRemoveRedEye className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="font-semibold text-lg text-gray-800 line-clamp-2 min-h-[3.25rem]">{heading}</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 min-h-[2.5rem]">
              {isDescriptionExpanded
                ? description
                : `${description.slice(0, 60)}...`}
            </p>
          </div>

          <div className="mt-4">
            <hr className="text-gray-200 mb-3" />

            <div className="flex gap-x-3 items-center">
              <button
                onClick={() => handleWishListToogle(product)}
                className="cursor-pointer border border-gray-300 p-2.5 font-bold rounded-md hover:border-gray-400 hover:bg-gray-50 transition shrink-0"
                title={added ? "Remove from Wishlist" : "Add to Wishlist"}
              >
                {added ? <FaHeart className="text-red-500 text-lg" /> : <FaRegHeart className="text-lg text-gray-600" />}
              </button>

              <Link
                href={`/product/${title
                  .toLowerCase()
                  .replace(/,/g, "")
                  .split(" ")
                  .join("-")}`}
                className="font-semibold text-white w-full py-2.5 text-center flex items-center justify-center rounded-md border border-gray-200 bg-[#023c68] hover:bg-[#69a14fe7] transition duration-300 shadow-sm"
              >
                <IoMdCart className="mr-1.5 text-lg" />
                <span>View product</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {quickView && mounted && createPortal(<QuickView />, document.body)}
    </>
  );
}
