"use client";

import React, { useState } from "react";

const Description = ({ product }) => {
    const [activeTab, setActiveTab] = useState("description");

    if (!product) return null;

    return (
        <div className="w-full">
            <div className="flex overflow-x-auto border-b border-gray-200">
                {["description", "additional-info", "reviews"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 md:px-8 py-4 text-base md:text-xl font-bold transition cursor-pointer text-nowrap ${
                            activeTab === tab
                                ? "border-b-4 border-[#023c68] text-[#023c68]"
                                : "text-gray-500 hover:text-gray-800"
                        }`}
                    >
                        {tab === "description"
                            ? "Product Description"
                            : tab === "additional-info"
                                ? "Specifications & Shelf Life"
                                : `Customer Reviews (${product.reviewsCount || 120})`}
                    </button>
                ))}
            </div>

            <div className="py-6 text-gray-700">
                {/* TAB 1: DESCRIPTION & USER GUIDE */}
                {activeTab === "description" && (
                    <div className="space-y-6 text-base md:text-lg leading-relaxed">
                        <p className="text-gray-700 leading-relaxed">
                            {product.description}
                        </p>

                        {/* User Guide / How to Prepare */}
                        {product.userGuide && (
                            <div className="bg-[#f7f9f4] p-5 rounded-xl border border-gray-200 mt-4">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">
                                    👨‍🍳 Preparation & User Guide
                                </h4>
                                <p className="text-gray-700 text-base">{product.userGuide}</p>
                            </div>
                        )}

                        {/* Key Benefits */}
                        {product.benefits && product.benefits.length > 0 && (
                            <div className="mt-4">
                                <h4 className="font-bold text-xl text-gray-900 mb-3">
                                    🌟 Key Highlights & Benefits
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {product.benefits.map((b, i) => (
                                        <li key={i} className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm md:text-base">
                                            <span className="text-[#023c68] font-bold">✓</span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {/* TAB 2: SPECIFICATIONS & SHELF LIFE */}
                {activeTab === "additional-info" && (
                    <div className="space-y-6 text-base md:text-lg">
                        <h4 className="font-bold text-xl text-gray-900">
                            📋 Technical Specifications
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex justify-between">
                                <span className="font-medium text-gray-500">Shelf Life:</span>
                                <strong className="text-gray-900">{product.shelfLife || "9 Months from MFG"}</strong>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex justify-between">
                                <span className="font-medium text-gray-500">Country of Origin:</span>
                                <strong className="text-gray-900">{product.origin || "Product of Canada"}</strong>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex justify-between">
                                <span className="font-medium text-gray-500">Net Weight:</span>
                                <strong className="text-gray-900">{product.netWeight || "10 kg"}</strong>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex justify-between">
                                <span className="font-medium text-gray-500">Packaging:</span>
                                <strong className="text-gray-900">{product.packaging || "Food Grade Bag"}</strong>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 col-span-1 md:col-span-2">
                                <span className="font-medium text-gray-500 block mb-1">Ingredients:</span>
                                <strong className="text-gray-900">{product.ingredients}</strong>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 col-span-1 md:col-span-2">
                                <span className="font-medium text-gray-500 block mb-1">Storage Instructions:</span>
                                <strong className="text-gray-900">{product.storageInstructions}</strong>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6 mt-6">
                            <h4 className="font-bold text-xl text-gray-900 mb-2">🚚 Returns & Shipping Guarantee</h4>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                All BAAZ Atta packages are moisture-sealed and quality checked before dispatch. In case of transit damage or seal defect, we offer hassle-free replacements within 7 days of delivery.
                            </p>
                        </div>
                    </div>
                )}

                {/* TAB 3: CUSTOMER REVIEWS */}
                {activeTab === "reviews" && (
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-50 p-6 rounded-xl border border-gray-100 gap-4">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-amber-500 text-2xl font-bold">★ {product.rating || "4.8"} / 5.0</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">Based on {product.reviewsCount || 340} verified buyer reviews</p>
                            </div>
                            <button className="bg-[#023c68] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#4a9347] transition">
                                Write a Review
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="border-b border-gray-100 pb-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-amber-500 font-bold">★★★★★</span>
                                    <strong className="text-gray-900 text-sm">Gurpreet Singh</strong>
                                    <span className="text-xs text-green-600 font-medium">✓ Verified Purchase</span>
                                </div>
                                <h5 className="font-bold text-gray-800 text-base mt-1">Super soft rotis till evening!</h5>
                                <p className="text-gray-600 text-sm mt-1">
                                    We tried {product.heading} for the first time and the quality is outstanding. Dough is easy to knead and rotis stay soft for hours.
                                </p>
                            </div>

                            <div className="border-b border-gray-100 pb-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-amber-500 font-bold">★★★★★</span>
                                    <strong className="text-gray-900 text-sm">Priya Sharma</strong>
                                    <span className="text-xs text-green-600 font-medium">✓ Verified Purchase</span>
                                </div>
                                <h5 className="font-bold text-gray-800 text-base mt-1">Pure wheat flavor</h5>
                                <p className="text-gray-600 text-sm mt-1">
                                    Great texture, clean stone-ground quality. Excellent packaging as well.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Description;
