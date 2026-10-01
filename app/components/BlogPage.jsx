"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaSearch, FaUser, FaArrowRight, FaTag, FaBookOpen } from "react-icons/fa";
import { blogData } from "../blogs/blogData";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Organic Wheat & Atta", "Ayurvedic Wellness", "Lifestyle & Nutrition"];

  const filteredBlogs = blogData.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = blogData[0];
  const regularBlogs = filteredBlogs;

  return (
    <div className="bg-[#f8f6f0] min-h-screen py-10 lg:py-16">
      <div className="container mx-auto px-5 md:px-12 xl:px-28">
        
        {/* HERO BANNER & HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold tracking-widest text-[#023c68] uppercase bg-[#023c68]/10 px-4 py-1.5 rounded-full inline-block">
            BAAZ Journal & Wellness Guide
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900 leading-tight">
            Insights for Healthy Living & Pure Wellness
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Discover expert recipes, traditional wheat milling secrets, Ayurvedic herbal knowledge, and holistic living tips from our wellness team.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mt-6">
            <input
              type="text"
              placeholder="Search articles, ingredients, recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#023c68] shadow-sm transition"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#023c68] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED POST (Only shown when active category is All and no search) */}
        {activeCategory === "All" && !searchTerm && featuredBlog && (
          <div className="mb-14 bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-0 group">
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-gray-100">
              <img
                src={featuredBlog.image}
                alt={featuredBlog.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-[#82c408] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                Featured Article
              </span>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                  <span className="text-[#023c68] font-bold uppercase tracking-wider bg-[#023c68]/10 px-3 py-1 rounded-full">
                    {featuredBlog.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-[#82c408]" /> {featuredBlog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-[#82c408]" /> {featuredBlog.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 leading-snug group-hover:text-[#023c68] transition-colors">
                  <Link href={`/blogs/${featuredBlog.slug}`}>
                    {featuredBlog.title}
                  </Link>
                </h2>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {featuredBlog.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredBlog.authorAvatar}
                    alt={featuredBlog.author}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">{featuredBlog.author}</h4>
                    <p className="text-[11px] text-gray-500">{featuredBlog.authorRole}</p>
                  </div>
                </div>

                <Link
                  href={`/blogs/${featuredBlog.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#023c68] hover:text-[#82c408] transition"
                >
                  Read Post <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* BLOG GRID */}
        {regularBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBlogs.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-[#023c68] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-[#82c408]" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock className="text-[#82c408]" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-serif text-gray-900 leading-snug group-hover:text-[#023c68] transition-colors line-clamp-2">
                      <Link href={`/blogs/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0 mt-2 flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.authorAvatar}
                      alt={post.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-xs font-semibold text-gray-700">{post.author}</span>
                  </div>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-xs font-bold text-[#023c68] group-hover:text-[#82c408] transition flex items-center gap-1"
                  >
                    Read Article <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl p-8 border border-gray-200">
            <FaBookOpen className="text-4xl text-gray-300 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-700">No Articles Found</h3>
            <p className="text-gray-500 text-sm mt-1">Try searching with a different keyword or category.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
              className="mt-4 px-5 py-2 bg-[#023c68] text-white rounded-full text-sm font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* NEWSLETTER SUBCRIPTION BOX */}
        <div className="mt-16 bg-[#023c68] text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl space-y-4 relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif">
              Stay Inspired with BAAZ Health Updates
            </h3>
            <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto">
              Get handpicked recipes, flour milling insights, and Ayurvedic wellness guides delivered directly to your inbox once a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 rounded-xl sm:rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none w-full text-sm"
              />
              <button className="px-6 py-3 bg-[#82c408] hover:bg-[#6fa807] text-white font-bold rounded-xl sm:rounded-full transition text-sm cursor-pointer whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
