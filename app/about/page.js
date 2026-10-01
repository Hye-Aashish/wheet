import React from 'react';
import Link from 'next/link';
import { FaGreaterThan } from 'react-icons/fa6';
import Aboutus from '../components/Aboutus';

export const metadata = {
  title: "About BAAZ Atta - 100% Pure Canadian Durum Wheat & Whole Grain Flour",
  description:
    "Learn more about BAAZ Atta, our traditional stone-ground chakki milling process, Canadian wheat sourcing, and commitment to healthy, natural living.",
};

export default function page() {
  return (
    <>
      {/* TOP HERO BANNER (MATCHES CONTACT US & OTHER PAGES) */}
      <div className="relative text-white">
        <div className="bg-cover bg-center bg-no-repeat relative bg-[url('/img/commonBanner/1.webp')] h-[22vh] lg:h-[36vh] flex flex-col justify-center items-center bg-[#023c68]">
          <div className="absolute inset-0 bg-black/45"></div>

          <div className="relative text-center px-6 md:px-16 xl:px-40 space-y-2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif uppercase font-bold tracking-wide">
              About Us
            </h1>

            <div className="flex items-center justify-center gap-x-2 text-sm md:text-base font-medium">
              <Link href="/" className="hover:text-amber-400 transition">
                Home
              </Link>
              <FaGreaterThan className="text-xs opacity-70" />
              <span className="text-amber-400">About Us</span>
            </div>
          </div>
        </div>
      </div>

      <Aboutus />
    </>
  );
}
