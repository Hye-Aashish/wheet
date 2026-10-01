"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { AiFillProduct } from "react-icons/ai";
import { FaHome, FaEnvelope } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function BottomfixLinks() {
  const pathname = usePathname();

  const wishList = useSelector((state) => state.wish?.wishlist || []);
  const wishCount = wishList.length;

  const links = [
    { title: "Home", link: "/", icon: <FaHome size={20} /> },
    { title: "Products", link: "/all-products", icon: <AiFillProduct size={20} /> },
    { title: "Wishlist", link: "/wishlist", icon: <FaHeart size={20} />, badge: wishCount },
    { title: "Contact", link: "/contact-us", icon: <FaEnvelope size={19} /> },
  ];

  return (
    <div className="mobile-links fixed z-40 bottom-0 inset-x-0 md:hidden bg-[#023c68] border-t border-white/10 shadow-lg">
      <div className="flex items-center justify-around text-white py-2 text-xs">
        {links.map((item, idx) => {
          const isActive = pathname === item.link;
          return (
            <Link
              key={idx}
              href={item.link}
              className={`flex flex-col items-center justify-center py-1 flex-1 relative transition ${
                isActive ? "text-[#82c408] font-bold" : "text-gray-200 hover:text-white"
              }`}
            >
              <div className="relative">
                {item.icon}
                {item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="mt-1 text-[11px]">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
