import React from "react";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";

export default function LatestBlog() {
  const blogData1 = [
    {
      slug: "shilajit-himalayan-booster-energy-stamina",
      image: "/img/blog1.png",
      tag: "Pure Himalayan Shilajit",
      title: "Revitalize with Pure Himalayan Shilajit",
      shape: "/img/blogs/shape.webp",
      author: "By admin",
      comments: "2 comments",
      description:
        "Our Shilajit is known for its purity and strength, boosting energy and stamina naturally while supporting overall wellness.",
    },
    {
      slug: "kashmiri-kesar-saffron-benefits-glowing-skin-mood",
      image: "/img/blog2.png",
      tag: "Premium Kashmiri Kesar",
      title: "Enhance Vitality with Premium Kashmiri Kesar",
      shape: "/img/blogs/shape.webp",
      author: "By admin",
      comments: "2 comments",
      description:
        "Experience the richness of authentic saffron, hand-picked from Kashmir’s finest farms, known to uplift mood and health.",
    },
  ];
  
  const blogData2 = [
    {
      slug: "ashwagandha-organic-stress-relief-adaptogen",
      image: "/img/blog3.png",
      tag: "Pure Organic Ashwagandha",
      title: "Balance and Calm with Organic Ashwagandha",
      shape: "/img/blogs/shape.webp",
      author: "By admin",
      comments: "2 comments",
      description:
        "Ashwagandha helps reduce stress, improve focus, and promote a healthy immune system with its adaptogenic power.",
    },
    {
      slug: "safed-musli-root-strength-vitality-stamina",
      image: "/img/blog4.png",
      tag: "Premium Safed Musli Root",
      title: "Boost Strength with Safed Musli Root",
      shape: "/img/blogs/shape.webp",
      author: "By admin",
      comments: "2 comments",
      description:
        "Known for its powerful aphrodisiac and health-enhancing properties, Safed Musli supports vitality and strength naturally.",
    },
  ];
  
  return (
    <div className="latest-blogs relative z-10 py-10 md:py-10">
      <div className="text-center px-5 md:px-12 xl:px-32 w-full lg:w-[70%] mx-auto">
        <Link href="/blogs" className="hover:opacity-80 transition">
          <h2 className="text-2xl text-black md:text-3xl lg:text-4xl italic font-bold">
            Latest Blog
          </h2>
        </Link>
      </div>

      <div className="mt-5 md:mt-12 grid grid-cols-1 md:grid-cols-2 md:gap-y-5 lg:gap-y-0 lg:grid-cols-4 relative">
        {blogData1.map((item, index) => (
          <div key={index} className="contents">
            <div className="overflow-hidden">
              <Link href={`/blogs/${item.slug}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover hover:scale-105 transition duration-500"
                />
              </Link>
            </div>
            <div className="p-4 lg:p-6 space-y-4 flex flex-col items-center text-center">
              <Link href="/blogs" className="bg-[#82c408] px-4 py-2 rounded-3xl text-white text-xs font-bold hover:bg-[#023c68] transition">
                {item.tag}
              </Link>
              <h5 className="font-bold font-serif text-2xl hover:text-[#023c68] transition">
                <Link href={`/blogs/${item.slug}`}>
                  {item.title}
                </Link>
              </h5>
              <img src={item.shape} alt="" loading="lazy" decoding="async" />
              <div className="text-xs flex items-center gap-x-4">
                <p className="flex items-center gap-x-2">
                  <FaCalendarAlt className="text-[#82c408]" />
                  <span className="text-gray-400">{item.author}</span>
                </p>
                <p className="flex items-center gap-x-2">
                  <FaComments className="text-[#82c408]" />
                  <span className="text-gray-400">{item.comments}</span>
                </p>
              </div>
              <p className="text-center text-base text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        {blogData2.map((item, index) => (
          <div key={index} className="flex flex-col-reverse md:contents mt-5 md:mt-10 lg:mt-0 lg:space-y-0">
            <div className="p-4 lg:p-6 space-y-4 flex flex-col items-center text-center">
              <Link href="/blogs" className="bg-[#82c408] px-4 py-2 rounded-3xl text-white text-xs font-bold hover:bg-[#023c68] transition">
                {item.tag}
              </Link>
              <h5 className="font-bold font-serif text-2xl hover:text-[#023c68] transition">
                <Link href={`/blogs/${item.slug}`}>
                  {item.title}
                </Link>
              </h5>
              <img src={item.shape} alt="" loading="lazy" decoding="async" />
              <div className="text-xs flex items-center gap-x-4">
                <p className="flex items-center gap-x-2">
                  <FaCalendarAlt className="text-[#82c408]" />
                  <span className="text-gray-400">{item.author}</span>
                </p>
                <p className="flex items-center gap-x-2">
                  <FaComments className="text-[#82c408]" />
                  <span className="text-gray-400">{item.comments}</span>
                </p>
              </div>
              <p className="text-center text-base text-gray-500">
                {item.description}
              </p>
            </div>
            <div className="overflow-hidden">
              <Link href={`/blogs/${item.slug}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover hover:scale-105 transition duration-500"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
