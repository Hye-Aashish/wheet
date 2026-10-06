"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { AiFillProduct } from "react-icons/ai";
import { FaHome, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function BottomfixLinks() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLocationClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("store-locator");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to homepage #store-locator
      router.push("/#store-locator");
    }
  };

  const links = [
    { title: "Home", link: "/", icon: <FaHome size={20} /> },
    { title: "Products", link: "/all-products", icon: <AiFillProduct size={20} /> },
    {
      title: "Location",
      link: "/#store-locator",
      icon: <FaMapMarkerAlt size={20} />,
      badge: "12",
      isLocation: true,
    },
    { title: "Contact", link: "/contact-us", icon: <FaEnvelope size={19} /> },
  ];

  return (
    <div className="mobile-links fixed z-40 bottom-0 inset-x-0 md:hidden bg-[#023c68] border-t border-white/10 shadow-lg">
      <div className="flex items-center justify-around text-white py-2 text-xs">
        {links.map((item, idx) => {
          const isActive =
            pathname === item.link ||
            (item.isLocation && typeof window !== "undefined" && window.location.hash === "#store-locator");

          return (
            <Link
              key={idx}
              href={item.link}
              onClick={item.isLocation ? handleLocationClick : undefined}
              className={`flex flex-col items-center justify-center py-1 flex-1 relative transition cursor-pointer ${
                isActive ? "text-[#82c408] font-bold" : "text-gray-200 hover:text-white"
              }`}
            >
              <div className="relative">
                {item.icon}
                {item.badge && (
                  <span className="absolute -top-1.5 -right-2.5 bg-amber-500 text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="mt-1 text-[11px] font-medium">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
