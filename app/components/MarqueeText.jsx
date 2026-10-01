import React from 'react';
import Marquee from "react-fast-marquee";

export default function MarqueeText() {
  return (
    <>
      <div className="w-full bg-[#023c68] text-white py-3 shadow-md border-y border-white/10">
        <Marquee gradient={false} speed={50} pauseOnHover>
          <ul className="flex gap-8 text-sm md:text-lg font-medium list-none mx-4 md:mx-10 tracking-wide">
            <li>🌾 100% Pure Canadian Wheat -</li>
            <li>✨ Traditional Stone Ground Atta -</li>
            <li>🌾 Rich in Natural Fiber & Nutrients -</li>
            <li>✨ Soft & Fresh Rotis Guaranteed -</li>
            <li>🌾 No Added Preservatives -</li>
            <li>✨ Premium Quality Grains -</li>
            <li>🌾 100% Pure Canadian Wheat -</li>
            <li>✨ Traditional Stone Ground Atta -</li>
            <li>🌾 Rich in Natural Fiber & Nutrients -</li>
            <li>✨ Soft & Fresh Rotis Guaranteed -</li>
          </ul>
        </Marquee>
      </div>
    </>
  );
}
