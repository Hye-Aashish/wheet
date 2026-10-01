import React from "react";
import Link from "next/link";

export default function NewCategoriesJwellery() {
  const images = [
    {
      src: "/img/prod1.png",
      alt: "Durum Wheat Atta",
      link: "/all-products",
    },
    {
      src: "/img/prod2.png",
      alt: "Multigrain Atta",
      link: "/all-products",
    },
    {
      src: "/img/prod3.png",
      alt: "Whole Wheat Atta",
      link: "/all-products",
    },
    {
      src: "/img/prod4.png",
      alt: "Sharbati Atta",
      link: "/all-products",
    },
    {
      src: "/img/prod5.png",
      alt: "Organic Chakki Atta",
      link: "/all-products",
    },
  ];

  return (
    <div className="categories bg-[#f3f1ec]">
      <div className="px-5 md:px-12 xl:px-32 pt-8 md:pt-12 lg:pt-10 pb-14 lg:pb-20 container mx-auto">
        <h6 className="text-2xl md:text-3xl xl:text-5xl text-center font-bold text-gray-800 font-serif">
          Our Products Range
        </h6>

        <div className="mt-8 md:mt-12">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 xl:gap-14">
            {images.map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                <Link
                  href={item.link}
                  className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-full bg-white overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 flex items-center justify-center p-2"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full rounded-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <p className="text-center font-semibold mt-3 text-gray-800 text-sm md:text-base group-hover:text-[#023c68] transition-colors">
                  {item.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
