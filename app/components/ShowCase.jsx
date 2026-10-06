


"use client";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const showcaseData = [
  {
    title: "Sale 30% Off",
    topheading: "TRADITIONAL QUALITY",
    subtitle: "BAAZ Durum Wheat Traditional Atta",
    image: "/img/prod2.png",
    buttonText: "Read More",
    description:
      "BAAZ Durum Wheat Traditional Atta is made from quality durum wheat and carefully processed to deliver a wholesome, nutritious, and naturally delicious atta. Perfect for making soft and tasty rotis, parathas, and everyday Indian breads.",
  },
  {
    title: "Sale 30% Off",
    topheading: "EVERYDAY NOURISHMENT",
    subtitle: "BAAZ Multigrain Atta",
    image: "/img/prod1.png",
    buttonText: "Read More",
    description:
      "BAAZ Multigrain Atta is a wholesome blend of carefully selected grains, crafted to provide delicious taste and everyday nourishment. Ideal for soft rotis, parathas, and healthy homemade meals for the whole family.",
  },
];

export default function ShowCase() {
  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    const interId = setInterval(() => {
      setShowIndex((prev) => (prev + 1) % showcaseData.length);
    }, 4000);
    return () => clearInterval(interId);
  }, []);

  const safeIndex = showIndex % showcaseData.length;

  return (
    <div className="lg:pl-20 xl:pl-32">
      <div className="relative bg-gray-100 lg:bg-transparent lg:bg-[url(/img/ShowCase/bg-new.webp)] lg:rounded-l-full h-[75vh] md:h-[80vh] my-10 lg:my-20">
        {showcaseData.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              safeIndex === index ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none invisible"
            } flex flex-col lg:flex-row text-center lg:text-start items-start lg:items-center gap-4 lg:gap-x-10 justify-center py-5 lg:py-16 px-5 md:px-12 lg:px-0 xl:pl-0`}
          >
            <div
              className="mx-auto lg:mx-0 h-[250px] w-[250px] xl:h-[420px] xl:w-[420px] md:h-[220px] md:w-[220px] lg:w-[320px] lg:h-[320px] bg-center bg-cover rounded-full overflow-hidden shadow-lg shrink-0"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="w-full lg:w-[50%] space-y-5">
              <h6 className="text-white text-lg lg:text-xl relative">
                {item.topheading}
                <img
                  src="/img/ShowCase/shape2.png"
                  alt="showCase"
                  className="absolute inset-0 -top-2 left-0 md:left-[28%] lg:-top-2 lg:-left-2 xl:-left-4 -z-10"
                />
              </h6>
              <h5 className="text-black font-bold text-2xl md:text-4xl xl:text-5xl font-serif">
                {item.title}
              </h5>
              <h5 className="text-black font-bold text-2xl lg:text-4xl xl:text-5xl font-serif">
                All <span className="text-[#023c68]">{item.subtitle && item.subtitle}</span>
              </h5>
              <p className="text-base md:text-lg">{item.description}</p>
              <button className="flex mx-auto lg:mx-0 group items-center gap-x-2 px-5 py-2 lg:px-8 bg-[#023c68] text-white font-bold rounded-3xl cursor-pointer hover:bg-[#4a9347] transition">
                {item.buttonText}
                <FaLongArrowAltRight className="group-hover:translate-x-2 duration-200 ease-in transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
