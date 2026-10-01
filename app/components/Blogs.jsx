import React from "react";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";

export default function LatestBlog() {
  const blogData1 = [
    {
      slug: "secrets-to-making-softest-roti-durum-wheat",
      image: "/img/blog1.png",
      tag: "Durum Wheat Atta",
      title: "5 Secrets to Making the Softest Rotis Every Time",
      shape: "/img/blogs/shape.webp",
      author: "By Chef Aarav",
      comments: "18 comments",
      description:
        "Master the art of feather-soft, golden chapatis using 100% stone-ground durum wheat flour and proper dough hydration techniques.",
    },
    {
      slug: "traditional-stone-ground-chakki-atta-benefits",
      image: "/img/blog2.png",
      tag: "Stone Chakki Milling",
      title: "Why Traditional Stone-Ground Chakki Atta is Superior",
      shape: "/img/blogs/shape.webp",
      author: "By Dr. Vikram",
      comments: "29 comments",
      description:
        "Explore how slow cold-milling preserves vital wheat germ oils, dietary fiber, and natural aroma without any chemical bleaching.",
    },
  ];
  
  const blogData2 = [
    {
      slug: "why-multigrain-atta-is-essential-for-modern-diet",
      image: "/img/blog3.png",
      tag: "Multigrain Nutrition",
      title: "Why Multigrain Atta is Essential for a Balanced Diet",
      shape: "/img/blogs/shape.webp",
      author: "By Pooja Mehta",
      comments: "22 comments",
      description:
        "Combining wholesome durum wheat with oats, ragi, and chana creates a low-GI flour for steady daily energy and gut wellness.",
    },
    {
      slug: "the-golden-story-of-canadian-durum-wheat",
      image: "/img/blog4.png",
      tag: "Canadian Grains",
      title: "The Golden Harvest of Canadian Durum Wheat",
      shape: "/img/blogs/shape.webp",
      author: "By Ravi Narayan",
      comments: "14 comments",
      description:
        "Discover why Canadian prairie soils and extended summer sunshine produce dense amber durum kernels renowned worldwide for quality.",
    },
  ];
  
  return (
    <div className="latest-blogs relative z-10 py-10 md:py-16">
      <div className="text-center px-5 md:px-12 xl:px-32 w-full lg:w-[70%] mx-auto space-y-2">
        <span className="text-xs md:text-sm font-bold tracking-widest text-[#023c68] uppercase bg-[#023c68]/10 px-4 py-1.5 rounded-full inline-block">
          BAAZ Knowledge & Guides
        </span>
        <Link href="/blogs" className="block hover:opacity-85 transition">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic font-bold text-gray-900">
            Latest Blog
          </h2>
        </Link>
        <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
          Explore expert culinary tips, milling traditions, and wholesome nutrition insights from our grain experts.
        </p>
      </div>

      <div className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-2 md:gap-y-5 lg:gap-y-0 lg:grid-cols-4 relative">
        {blogData1.map((item, index) => (
          <div key={index} className="contents">
            <div className="overflow-hidden group">
              <Link href={`/blogs/${item.slug}`} className="block h-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500 min-h-[220px]"
                />
              </Link>
            </div>
            <div className="p-5 lg:p-6 space-y-3 flex flex-col items-center text-center justify-center bg-white">
              <Link href="/blogs" className="bg-[#023c68] px-4 py-1.5 rounded-full text-white text-xs font-bold hover:bg-[#82c408] transition shadow-sm">
                {item.tag}
              </Link>
              <h5 className="font-bold font-serif text-xl md:text-2xl hover:text-[#023c68] transition line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
                <Link href={`/blogs/${item.slug}`}>
                  {item.title}
                </Link>
              </h5>
              <img src={item.shape} alt="" loading="lazy" decoding="async" className="py-1" />
              <div className="text-xs flex items-center gap-x-4">
                <p className="flex items-center gap-x-1.5">
                  <FaCalendarAlt className="text-[#023c68]" />
                  <span className="text-gray-500 font-medium">{item.author}</span>
                </p>
                <p className="flex items-center gap-x-1.5">
                  <FaComments className="text-[#023c68]" />
                  <span className="text-gray-500 font-medium">{item.comments}</span>
                </p>
              </div>
              <p className="text-center text-sm text-gray-600 leading-relaxed line-clamp-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        {blogData2.map((item, index) => (
          <div key={index} className="flex flex-col-reverse md:contents mt-5 md:mt-10 lg:mt-0 lg:space-y-0">
            <div className="p-5 lg:p-6 space-y-3 flex flex-col items-center text-center justify-center bg-white">
              <Link href="/blogs" className="bg-[#023c68] px-4 py-1.5 rounded-full text-white text-xs font-bold hover:bg-[#82c408] transition shadow-sm">
                {item.tag}
              </Link>
              <h5 className="font-bold font-serif text-xl md:text-2xl hover:text-[#023c68] transition line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
                <Link href={`/blogs/${item.slug}`}>
                  {item.title}
                </Link>
              </h5>
              <img src={item.shape} alt="" loading="lazy" decoding="async" className="py-1" />
              <div className="text-xs flex items-center gap-x-4">
                <p className="flex items-center gap-x-1.5">
                  <FaCalendarAlt className="text-[#023c68]" />
                  <span className="text-gray-500 font-medium">{item.author}</span>
                </p>
                <p className="flex items-center gap-x-1.5">
                  <FaComments className="text-[#023c68]" />
                  <span className="text-gray-500 font-medium">{item.comments}</span>
                </p>
              </div>
              <p className="text-center text-sm text-gray-600 leading-relaxed line-clamp-3">
                {item.description}
              </p>
            </div>
            <div className="overflow-hidden group">
              <Link href={`/blogs/${item.slug}`} className="block h-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500 min-h-[220px]"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
