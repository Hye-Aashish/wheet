"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { RiUserLine, RiPhoneLine, RiMailLine } from "react-icons/ri";
import { FaHome, FaInfoCircle, FaShoppingBag, FaBlog, FaEnvelope, FaExchangeAlt, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function MyNav() {
  const [sideBar, setSideBar] = useState(false);
  const pathname = usePathname();

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (sideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sideBar]);

  const navLinks = [
    { title: "Home", link: "/", icon: <FaHome /> },
    { title: "About Us", link: "/about", icon: <FaInfoCircle /> },
    { title: "Products", link: "/all-products", icon: <FaShoppingBag /> },
    { title: "Blogs", link: "/blogs", icon: <FaBlog /> },
    { title: "Contact Us", link: "/contact-us", icon: <FaEnvelope /> },
  ];

  const mainNavLinks = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Products", link: "/all-products" },
    { title: "Blogs", link: "/blogs" },
    { title: "Contact Us", link: "/contact-us" },
  ];

  // Redux cart count
  const cartItems = useSelector((state) => state.cart?.cartItem || []);
  const cartLengthTotal = cartItems.reduce((total, item) => total + (item.qnty || 1), 0);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-3 md:py-4 flex items-center justify-between gap-4">
          
          {/* LOGO */}
          <Link href="/" className="shrink-0 transition hover:opacity-90">
            <img
              src="/img/logo.webp"
              alt="BAAZ Atta & Wellness"
              className="w-24 sm:w-28 md:w-36 lg:w-40 h-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {mainNavLinks.map((item, index) => {
              const isActive = pathname === item.link;
              return (
                <Link
                  key={index}
                  href={item.link}
                  className={`text-[15px] font-semibold transition-all duration-300 relative py-2 ${
                    isActive
                      ? "text-[#023c68]"
                      : "text-gray-600 hover:text-[#023c68]"
                  }`}
                >
                  {item.title}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#023c68] rounded-t-md transition-all duration-300" />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#82c408] rounded-t-md transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/contact-us"
              className="hidden sm:inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#023c68] text-white text-sm font-semibold hover:bg-[#82c408] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            >
              Contact Us
            </Link>

            {/* MOBILE HAMBURGER MENU BUTTON */}
            <button
              type="button"
              onClick={() => setSideBar(true)}
              className="lg:hidden p-2 rounded-xl bg-gray-50 text-gray-700 hover:bg-[#023c68] hover:text-white shadow-sm border border-gray-100 hover:border-transparent transition-all duration-300 cursor-pointer active:scale-95"
              aria-label="Toggle Mobile Menu"
            >
              <HiMenu className="text-2xl sm:text-3xl" />
            </button>
          </div>

        </div>
      </header>

      {/* ================= MOBILE SIDEBAR DRAWER ================= */}
      <div
        className={`fixed inset-0 z-[999999] lg:hidden transition-all duration-500 ease-in-out ${
          sideBar
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
            sideBar ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setSideBar(false)}
        />
        
        {/* Drawer */}
        <div
          className={`absolute left-0 top-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl flex flex-col justify-between transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            sideBar ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* SIDEBAR HEADER */}
          <div className="flex flex-col h-full overflow-hidden">
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100 bg-white z-10 shadow-sm">
              <Link href="/" onClick={() => setSideBar(false)}>
                <img
                  src="/img/logo.webp"
                  alt="BAAZ Logo"
                  className="w-28 h-auto object-contain"
                />
              </Link>

              <button
                type="button"
                onClick={() => setSideBar(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 border border-gray-200 text-gray-500 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all duration-300 cursor-pointer active:scale-90"
                aria-label="Close Menu"
              >
                <RxCross2 className="text-xl" />
              </button>
            </div>

            {/* MOBILE LINKS LIST */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <nav className="px-4 py-6 space-y-2">
                {navLinks.map((item, index) => {
                  const isActive = pathname === item.link;
                  return (
                    <Link
                      key={index}
                      href={item.link}
                      onClick={() => setSideBar(false)}
                      className={`flex items-center gap-4 px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-[#023c68]/5 text-[#023c68] border-l-4 border-[#023c68]"
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#023c68] border-l-4 border-transparent"
                      }`}
                    >
                      <span className={`text-lg transition-colors duration-300 ${isActive ? "text-[#023c68]" : "text-gray-400 group-hover:text-[#023c68]"}`}>
                        {item.icon}
                      </span>
                      <span>{item.title}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* SIDEBAR FOOTER QUICK CONTACT */}
            <div className="p-5 border-t border-gray-100 bg-gray-50/80">
              <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">
                Get in Touch
              </div>
              <div className="space-y-3 mb-5">
                <a
                  href="tel:+17789812002"
                  className="flex items-center gap-3 text-sm text-gray-600 font-medium hover:text-[#023c68] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#023c68]">
                    <RiPhoneLine className="text-lg" />
                  </div>
                  <span>+1 (778) 981-2002</span>
                </a>
                <a
                  href="mailto:Baazatta1@gmail.com"
                  className="flex items-center gap-3 text-sm text-gray-600 font-medium hover:text-[#023c68] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#023c68]">
                    <RiMailLine className="text-lg" />
                  </div>
                  <span className="truncate">Baazatta1@gmail.com</span>
                </a>
              </div>

              <Link
                href="/contact-us"
                onClick={() => setSideBar(false)}
                className="w-full py-3.5 bg-[#023c68] text-white rounded-xl text-sm font-bold text-center block hover:bg-[#82c408] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
