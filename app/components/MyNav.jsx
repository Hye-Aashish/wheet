"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { RiPhoneLine, RiMailLine } from "react-icons/ri";
import { 
  FaHome, 
  FaInfoCircle, 
  FaShoppingBag, 
  FaBlog, 
  FaEnvelope, 
  FaChevronRight, 
  FaWhatsapp,
  FaArrowRight
} from "react-icons/fa";
import { FaLocationDot, FaWheatAwn } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function MyNav() {
  const [sideBar, setSideBar] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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
    { 
      title: "Home", 
      link: "/", 
      icon: <FaHome />, 
      badge: null 
    },
    { 
      title: "Our Products", 
      link: "/all-products", 
      icon: <FaShoppingBag />, 
      badge: "5 Flours" 
    },
    { 
      title: "Store Locator", 
      link: "/#store-locator", 
      icon: <FaLocationDot />, 
      badge: "12 Stores",
      highlight: true,
      isStoreLocator: true
    },
    { 
      title: "About BAAZ", 
      link: "/about", 
      icon: <FaInfoCircle />, 
      badge: null 
    },
    { 
      title: "Blogs & Tips", 
      link: "/blogs", 
      icon: <FaBlog />, 
      badge: null 
    },
    { 
      title: "Contact Us", 
      link: "/contact-us", 
      icon: <FaEnvelope />, 
      badge: null 
    },
  ];

  const mainNavLinks = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Products", link: "/all-products" },
    { title: "Store Locator", link: "/#store-locator" },
    { title: "Blogs", link: "/blogs" },
    { title: "Contact Us", link: "/contact-us" },
  ];

  // Quick product links in mobile sidebar
  const quickFlours = [
    { name: "Durum Wheat", slug: "baaz-durum-wheat-traditional-atta", color: "from-amber-600 to-yellow-600" },
    { name: "Multigrain Atta", slug: "baaz-multigrain-atta", color: "from-emerald-700 to-green-600" },
    { name: "Corn Flour", slug: "baaz-corn-flour", color: "from-yellow-500 to-amber-500" },
    { name: "Besan Flour", slug: "baaz-besan-flour", color: "from-amber-500 to-orange-500" },
    { name: "Jawar Flour", slug: "baaz-jawar-flour", color: "from-stone-600 to-stone-800" },
  ];

  // Handle store locator smooth scroll
  const handleNavClick = (e, item) => {
    setSideBar(false);
    if (item.isStoreLocator) {
      if (pathname === "/") {
        e.preventDefault();
        const el = document.getElementById("store-locator");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push("/#store-locator");
      }
    }
  };

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
              className="lg:hidden p-2.5 rounded-xl bg-stone-100 hover:bg-[#023c68] text-stone-800 hover:text-white shadow-sm border border-stone-200/80 transition-all duration-300 cursor-pointer active:scale-95 flex items-center gap-1.5"
              aria-label="Toggle Mobile Menu"
            >
              <HiMenu className="text-2xl" />
              <span className="text-xs font-bold uppercase tracking-wider hidden xs:inline">Menu</span>
            </button>
          </div>

        </div>
      </header>

      {/* ================= MODERN PREMIUM MOBILE SIDEBAR DRAWER ================= */}
      <div
        className={`fixed inset-0 z-[999999] lg:hidden transition-all duration-500 ease-in-out ${
          sideBar ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Frosted Dark Backdrop */}
        <div 
          className={`absolute inset-0 bg-stone-900/70 backdrop-blur-md transition-opacity duration-500 ease-in-out ${
            sideBar ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setSideBar(false)}
        />
        
        {/* Animated Slide-in Drawer */}
        <div
          className={`absolute left-0 top-0 h-full w-[88vw] max-w-[360px] bg-gradient-to-b from-[#FAF9F5] via-white to-[#F5F3EC] shadow-2xl flex flex-col justify-between transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-r border-stone-200/80 ${
            sideBar ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ================= DRAWER TOP HEADER ================= */}
          <div className="shrink-0 bg-white/90 backdrop-blur-md border-b border-stone-200/80 px-5 py-4 flex items-center justify-between shadow-2xs">
            <Link href="/" onClick={() => setSideBar(false)} className="flex items-center gap-2.5">
              <img
                src="/img/logo.webp"
                alt="BAAZ Logo"
                className="w-28 sm:w-32 h-auto object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={() => setSideBar(false)}
              className="w-9 h-9 rounded-full bg-stone-100 hover:bg-red-500 hover:text-white text-stone-600 transition-all duration-200 flex items-center justify-center cursor-pointer shadow-2xs active:scale-90 border border-stone-200"
              aria-label="Close Menu"
            >
              <RxCross2 className="text-lg" />
            </button>
          </div>

          {/* Quick Quality Pill */}
          <div className="bg-[#023c68]/5 px-5 py-2 border-b border-[#023c68]/10 flex items-center justify-between text-[11px] font-bold text-[#023c68]">
            <span className="flex items-center gap-1.5">
              <FaWheatAwn className="text-amber-600" />
              <span>100% Pure Canadian Wheat</span>
            </span>
            <span className="bg-[#023c68] text-white px-2 py-0.5 rounded-full text-[10px]">
              Canada
            </span>
          </div>

          {/* ================= SCROLLABLE CONTENT BODY ================= */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5 custom-scrollbar">
            
            {/* 1. MAIN NAVIGATION LINKS */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 px-3">
                Main Menu
              </span>

              {navLinks.map((item, index) => {
                const isActive = pathname === item.link;

                return (
                  <Link
                    key={index}
                    href={item.link}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl transition-all duration-200 group cursor-pointer ${
                      isActive
                        ? "bg-[#023c68] text-white shadow-md font-bold"
                        : item.highlight
                        ? "bg-amber-500/10 text-amber-900 hover:bg-amber-500/15 border border-amber-300/60 font-semibold"
                        : "bg-white/80 hover:bg-white text-stone-700 hover:text-[#023c68] border border-stone-200/60 font-semibold shadow-2xs"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-transform duration-200 group-hover:scale-110 ${
                        isActive
                          ? "bg-white/20 text-white"
                          : item.highlight
                          ? "bg-amber-500 text-white shadow-2xs"
                          : "bg-stone-100 text-[#023c68] group-hover:bg-[#023c68] group-hover:text-white"
                      }`}>
                        {item.icon}
                      </span>
                      <span className="text-sm">{item.title}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold flex items-center gap-1 ${
                          isActive
                            ? "bg-white/25 text-white"
                            : item.highlight
                            ? "bg-amber-500 text-white animate-pulse"
                            : "bg-[#023c68]/10 text-[#023c68]"
                        }`}>
                          {item.highlight && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          {item.badge}
                        </span>
                      )}
                      <FaChevronRight className={`text-xs opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 ${
                        isActive ? "text-white" : "text-stone-400"
                      }`} />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* 2. STORE LOCATOR MINI FEATURE BANNER */}
            <div 
              onClick={(e) => handleNavClick(e, { isStoreLocator: true })}
              className="bg-gradient-to-br from-[#023c68] to-[#04599a] text-white p-4 rounded-2xl shadow-md cursor-pointer relative overflow-hidden group border border-[#023c68]/20"
            >
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-amber-400/20 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-start justify-between mb-2">
                <span className="bg-amber-400 text-stone-950 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  📍 12 Verified Stores
                </span>
                <span className="text-xs text-amber-300 font-bold group-hover:translate-x-1 transition-transform">
                  View Map →
                </span>
              </div>
              <h4 className="font-bold text-sm text-white leading-snug mb-1">
                Find BAAZ Atta In Stores
              </h4>
              <p className="text-[11px] text-stone-200 leading-relaxed">
                Stocked across Calgary, Airdrie, Surrey, Langley & Abbotsford.
              </p>
            </div>

            {/* 3. FLOUR CATEGORIES QUICK CHIPS */}
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 px-3">
                Our 5 Flours Range
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickFlours.map((flour, idx) => (
                  <Link
                    key={idx}
                    href={`/product/${flour.slug}`}
                    onClick={() => setSideBar(false)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-stone-100 text-stone-800 border border-stone-200/80 shadow-2xs transition flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>{flour.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* 4. QUICK HELP & SUPPORT */}
            <div className="bg-white p-3.5 rounded-xl border border-stone-200/80 space-y-2.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400">
                Customer Support
              </span>

              {/* WhatsApp direct */}
              <a
                href="https://wa.me/17789812002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition text-xs font-bold border border-emerald-200"
              >
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-base text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </div>
                <FaArrowRight className="text-[10px] opacity-70" />
              </a>

              {/* Call direct */}
              <a
                href="tel:+17789812002"
                className="flex items-center gap-2.5 text-xs text-stone-700 font-semibold p-2 rounded-lg hover:bg-stone-50 transition"
              >
                <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-[#023c68] shrink-0">
                  <RiPhoneLine className="text-xs" />
                </div>
                <span>+1 (778) 981-2002</span>
              </a>

              {/* Email direct */}
              <a
                href="mailto:Baazatta1@gmail.com"
                className="flex items-center gap-2.5 text-xs text-stone-700 font-semibold p-2 rounded-lg hover:bg-stone-50 transition"
              >
                <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-[#023c68] shrink-0">
                  <RiMailLine className="text-xs" />
                </div>
                <span className="truncate">Baazatta1@gmail.com</span>
              </a>
            </div>

          </div>

          {/* ================= DRAWER FOOTER CTA ================= */}
          <div className="shrink-0 p-4 border-t border-stone-200/80 bg-white/95 backdrop-blur-md space-y-2">
            <Link
              href="/contact-us"
              onClick={() => setSideBar(false)}
              className="w-full py-3 bg-[#023c68] hover:bg-[#03518c] text-white rounded-xl text-xs sm:text-sm font-bold text-center flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <span>Get Wholesale Inquiry</span>
              <FaArrowRight className="text-xs" />
            </Link>

            <p className="text-center text-[10px] text-stone-400">
              © {new Date().getFullYear()} BAAZ Atta • Matwala Foods Canada
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
