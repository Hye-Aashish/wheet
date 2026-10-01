"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaStar, FaMinus, FaPlus, FaCheck, FaShieldAlt, FaTruck } from "react-icons/fa";
import ImageMagnifier from "@/app/components/ImageMagnifier";
import Description from "./Description ";
import AyutramartProduct from "../../AyutramartData";
import ProductAyurvedCard from "@/app/components/ProductAyurvedCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ToastContainer, toast } from 'react-toastify';
import { addCart } from "@/app/store/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = ({ slug, singleProduct }) => {
  const dispatch = useDispatch();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fallback to first product if singleProduct is not found
  const product = singleProduct || AyutramartProduct[0];

  const [activeImg, setActiveImg] = useState(product.inerimgList ? product.inerimgList[0] : product.img);
  const [qnty, setQnty] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.variants ? product.variants[1]?.id : "10kg");
  const [currentPrice, setCurrentPrice] = useState(product.price);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant.id);
    setCurrentPrice(variant.price);
  };

  const notify = () => toast.success("🎉 Added to cart successfully!");

  return (
    <>
      <div className="bg-[#f3f1ec76] py-8 lg:py-16">
        <div className="container mx-auto px-5 md:px-12 xl:px-32">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#023c68] transition">Home</Link>
            <span>/</span>
            <Link href="/all-products" className="hover:text-[#023c68] transition">Products</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate">{product.heading}</span>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 bg-white p-6 lg:p-10 rounded-2xl shadow-sm items-start">
            
            <div className="lg:col-span-6 lg:sticky lg:top-24 self-start flex flex-col-reverse md:flex-row gap-4 items-center lg:items-start">
              <div className="flex md:flex-col gap-3 shrink-0">
                {product.inerimgList?.map((elm, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImg(elm)}
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-lg border-2 overflow-hidden transition-all cursor-pointer ${
                      activeImg === elm ? "border-[#023c68] ring-2 ring-[#023c68]/20" : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img src={elm} alt={product.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="w-full flex justify-center items-center bg-gray-50 rounded-xl overflow-hidden p-4 border border-gray-100">
                <ImageMagnifier activeImg={activeImg || product.img} />
              </div>
            </div>

            {/* RIGHT SIDE: Product Title & Everything Else */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
              <div>
                {/* Category & Availability */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#023c68] bg-[#023c68]/10 px-3 py-1 rounded-full">
                    {product.category || "Flour & Atta"}
                  </span>
                  <span className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full flex items-center gap-1">
                    <FaCheck className="text-xs" /> {product.availability || "In Stock"}
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  {product.heading}
                </h1>

                {/* Rating & SKU */}
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 border-b border-gray-100 pb-3">
                  <div className="flex items-center gap-1 text-amber-500 font-semibold">
                    <FaStar />
                    <span>{product.rating} / 5</span>
                    <span className="text-gray-400 font-normal">({product.reviewsCount || 340} reviews)</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <span>SKU: <strong className="text-gray-800">{product.sku}</strong></span>
                </div>

                {/* Short Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-4">
                  {product.description}
                </p>

                {/* Key Specifications & Details Table */}
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div>
                    <span className="text-gray-500 block text-xs">Shelf Life</span>
                    <strong className="text-gray-800 font-semibold">{product.shelfLife}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-xs">Country of Origin</span>
                    <strong className="text-gray-800 font-semibold">{product.origin}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-xs">Net Weight</span>
                    <strong className="text-gray-800 font-semibold">{product.netWeight}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-xs">Packaging Type</span>
                    <strong className="text-gray-800 font-semibold">{product.packaging}</strong>
                  </div>
                  <div className="col-span-2 border-t border-gray-200 pt-2 mt-1">
                    <span className="text-gray-500 block text-xs">Ingredients</span>
                    <strong className="text-gray-800 font-medium">{product.ingredients}</strong>
                  </div>
                </div>

                {/* Package Size Variants Selector (Commented Out) */}
                {/*
                {product.variants && product.variants.length > 0 && (
                  <div className="mt-5">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Select Package Size:
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {product.variants.map((v) => (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => handleVariantChange(v)}
                          className={`py-2.5 px-3 rounded-lg border text-xs md:text-sm font-semibold cursor-pointer transition ${
                            selectedVariant === v.id
                              ? "border-[#023c68] bg-[#023c68] text-white shadow-sm"
                              : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          {v.label} (₹{v.price})
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                */}
              </div>

              {/* Quantity Counter & Add to Cart / Buy Now Buttons (Commented Out) */}
              {/*
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-gray-800">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                    <button
                      onClick={() => (qnty > 1 ? setQnty(qnty - 1) : null)}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                    >
                      <FaMinus className="text-xs" />
                    </button>
                    <span className="px-5 font-semibold text-gray-800">{qnty}</span>
                    <button
                      onClick={() => setQnty(qnty + 1)}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                    >
                      <FaPlus className="text-xs" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      notify();
                      dispatch(addCart({ ...product, qnty, price: currentPrice }));
                    }}
                    className="flex-1 bg-[#023c68] hover:bg-[#4a9347] text-white font-bold py-3.5 px-6 rounded-xl transition duration-300 shadow-md cursor-pointer text-center"
                  >
                    ADD TO CART
                  </button>

                  <button className="flex-1 border-2 border-[#023c68] text-[#023c68] hover:bg-[#023c68] hover:text-white font-bold py-3.5 px-6 rounded-xl transition duration-300 cursor-pointer text-center">
                    BUY IT NOW
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaTruck className="text-[#023c68] text-base" />
                    <span>Free shipping on orders above ₹999</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="text-[#023c68] text-base" />
                    <span>100% Quality Assurance & Sealed Pack</span>
                  </div>
                </div>
              </div>
              */}
            </div>
          </div>

          {/* Product Description Tabs */}
          <div className="product-Description mt-12 bg-white rounded-2xl p-6 lg:p-10 shadow-sm">
            <Description product={product} />
          </div>

          {/* Relevant Products Carousel */}
          <div className="related-product mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              Explore Our Full Atta Range
            </h3>

            <div className={`transition-opacity duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
              <Swiper
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 16 },
                  640: { slidesPerView: 2, spaceBetween: 16 },
                  768: { slidesPerView: 3, spaceBetween: 16 },
                  1280: { slidesPerView: 4, spaceBetween: 20 },
                }}
                className="mySwiper !pb-6"
              >
                {AyutramartProduct.map((elm, index) => (
                  <SwiperSlide key={index} className="!h-auto flex">
                    <ProductAyurvedCard product={elm} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
