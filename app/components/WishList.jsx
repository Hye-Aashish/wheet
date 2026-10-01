"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import ProductAyurvedCard from "./ProductAyurvedCard";
import { clearWishlist } from "../store/wishListSlice";

export default function WishList() {
  const wishList = useSelector((state) => state.wish?.wishlist || []);
  const dispatch = useDispatch();

  return (
    <section className="py-12 bg-gray-50 min-h-[60vh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#023c68]">Your Wishlist</h1>
          {wishList.length > 0 && (
            <button 
              onClick={() => dispatch(clearWishlist())}
              className="text-sm font-semibold text-red-500 hover:text-red-700 transition"
            >
              Clear All
            </button>
          )}
        </div>

        {wishList.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl text-gray-500 mb-4">Your wishlist is currently empty.</h2>
            <Link href="/all-products" className="inline-block bg-[#023c68] text-white px-6 py-3 rounded-full hover:bg-[#82c408] transition">
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishList.map((product) => (
              <ProductAyurvedCard key={product.id} data={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
