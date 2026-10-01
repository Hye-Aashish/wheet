import React from "react";
import Marquee from "react-fast-marquee";

export default function FooterTopMarque() {
  const marqueeItems = [
    "🌾 100% Pure Canadian Durum Wheat Atta",
    "✨ Traditional Stone-Ground Chakki Fresh Flour",
    "🌾 Naturally Rich in Fiber, Protein & Essential Nutrients",
    "✨ Soft, Fluffy & Delicious Rotis Guaranteed Everyday",
    "🌾 Zero Added Preservatives • Farm-Fresh Purity",
    "✨ Wholesome Nutrition For Your Entire Family",
  ];

  return (
    <div className="bg-[#023c68] text-white py-4 md:py-6 overflow-hidden border-y border-white/10 shadow-inner">
      <div className="w-full">
        <Marquee speed={45} gradient={false} pauseOnHover>
          {marqueeItems.map((item, index) => (
            <span
              key={index}
              className="mx-6 md:mx-10 text-lg md:text-2xl lg:text-3xl font-serif font-medium tracking-wide flex items-center gap-4 text-white/95"
            >
              <span>{item}</span>
              <span className="text-amber-400 text-sm md:text-lg select-none">•</span>
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
