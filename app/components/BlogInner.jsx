"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaTag,
  FaArrowLeft,
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLink,
  FaHeart,
  FaRegHeart,
  FaQuoteLeft,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { getRelatedBlogs } from "../blogs/blogData";

export default function BlogInner({ currentBlog }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(currentBlog?.likes || 150);

  if (!currentBlog) {
    return (
      <div className="py-20 text-center bg-[#f8f6f0]">
        <h2 className="text-2xl font-bold text-gray-700">Article Not Found</h2>
        <Link href="/blogs" className="mt-4 inline-block bg-[#023c68] text-white px-6 py-2.5 rounded-full text-sm font-semibold">
          Back to Blogs
        </Link>
      </div>
    );
  }

  const relatedPosts = getRelatedBlogs(currentBlog.slug, 3);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikesCount((prev) => prev + 1);
      toast.success("❤️ Article liked!");
    }
  };

  const copyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast.info("📋 Link copied to clipboard!");
    }
  };

  return (
    <div className="bg-[#f8f6f0] min-h-screen py-8 lg:py-16">
      <ToastContainer />
      <div className="container mx-auto px-5 md:px-12 xl:px-32">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#023c68] transition">Home</Link>
          <span>/</span>
          <Link href="/blogs" className="hover:text-[#023c68] transition">Blogs</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate max-w-xs md:max-w-md">{currentBlog.title}</span>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-sm border border-gray-100 max-w-5xl mx-auto">
          
          {/* Header & Meta */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#023c68] bg-[#023c68]/10 px-3.5 py-1.5 rounded-full">
                {currentBlog.category}
              </span>
              <span className="text-xs text-gray-400">|</span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <FaClock className="text-[#82c408]" /> {currentBlog.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900 leading-tight">
              {currentBlog.title}
            </h1>

            {currentBlog.subtitle && (
              <p className="text-gray-600 text-base md:text-lg italic leading-relaxed">
                "{currentBlog.subtitle}"
              </p>
            )}

            {/* Author Info & Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <img
                  src={currentBlog.authorAvatar}
                  alt={currentBlog.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#82c408]"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{currentBlog.author}</h4>
                  <p className="text-xs text-gray-500">{currentBlog.authorRole} • Published on {currentBlog.date}</p>
                </div>
              </div>

              {/* Like & Share */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border transition cursor-pointer ${
                    liked
                      ? "bg-red-50 text-red-600 border-red-200"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                  <span>{likesCount} Likes</span>
                </button>

                <button
                  onClick={copyLink}
                  className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-[#023c68] hover:text-white transition cursor-pointer"
                  title="Share / Copy Link"
                >
                  <FaLink />
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-72 sm:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden mb-10 bg-gray-100 shadow-md">
            <img
              src={currentBlog.image}
              alt={currentBlog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Excerpt / Highlight Box */}
          <div className="bg-[#f8f6f0] border-l-4 border-[#023c68] p-6 rounded-r-2xl mb-10">
            <div className="flex items-start gap-4">
              <FaQuoteLeft className="text-3xl text-[#023c68]/30 shrink-0" />
              <p className="text-gray-800 text-base md:text-lg font-medium leading-relaxed italic">
                {currentBlog.excerpt}
              </p>
            </div>
          </div>

          {/* Article Body Content */}
          <div className="prose max-w-none space-y-8 text-gray-700 text-base md:text-lg leading-relaxed">
            {currentBlog.content?.map((section, index) => (
              <div key={index} className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 border-b border-gray-100 pb-2">
                  {section.heading}
                </h2>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          {/* Article Tags */}
          {currentBlog.tags && (
            <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-gray-500 flex items-center gap-1 mr-2">
                <FaTag className="text-[#82c408]" /> Tags:
              </span>
              {currentBlog.tags.map((tag, i) => (
                <span key={i} className="text-xs font-semibold bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Author Bio Box */}
          <div className="mt-12 bg-[#023c68]/5 rounded-2xl p-6 sm:p-8 border border-[#023c68]/10 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <img
              src={currentBlog.authorAvatar}
              alt={currentBlog.author}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#023c68] shrink-0"
            />
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-lg font-bold text-gray-900">Written by {currentBlog.author}</h3>
              <p className="text-xs font-medium text-[#023c68] uppercase tracking-wider">{currentBlog.authorRole}</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Dedicated to researching traditional milling techniques, pure Himalayan botanicals, and bringing authentic holistic health guides to families across the globe.
              </p>
            </div>
          </div>

          {/* Back to All Blogs Button */}
          <div className="mt-10 text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 bg-[#023c68] hover:bg-[#82c408] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-md"
            >
              <FaArrowLeft /> View All Wellness Articles
            </Link>
          </div>

        </div>

        {/* RELATED ARTICLES */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 max-w-5xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-8 text-center">
              Recommended Further Reading
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col justify-between group">
                  <div>
                    <div className="h-44 overflow-hidden bg-gray-100 relative">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                      <span className="absolute top-2 left-2 bg-[#023c68] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="text-[11px] text-gray-400 flex items-center gap-1">
                        <FaClock className="text-[#82c408]" /> {post.readTime}
                      </span>
                      <h4 className="font-bold font-serif text-base text-gray-900 group-hover:text-[#023c68] transition line-clamp-2">
                        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <Link href={`/blogs/${post.slug}`} className="text-xs font-bold text-[#023c68] group-hover:text-[#82c408] transition">
                      Read Article →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
