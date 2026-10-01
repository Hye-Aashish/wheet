
"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    number: "01",
    question: "What is BAAZ Durum Wheat Traditional Atta?",
    answer:
      "BAAZ Durum Wheat Traditional Atta is made from carefully selected quality durum wheat. It is traditionally processed to retain the natural taste and wholesome goodness of wheat, making it suitable for preparing soft rotis, parathas, and other everyday Indian breads.",
  },
  {
    number: "02",
    question: "What makes BAAZ Durum Wheat Atta a good choice?",
    answer:
      "BAAZ Durum Wheat Traditional Atta is crafted with a focus on quality, taste, and everyday nourishment. Its fine texture makes it easy to knead and suitable for preparing delicious homemade rotis and parathas for the whole family.",
  },
  {
    number: "03",
    question: "What is BAAZ Multigrain Atta?",
    answer:
      "BAAZ Multigrain Atta is a wholesome blend of carefully selected grains. The combination of multiple grains provides a delicious taste and variety in your daily diet, making it an ideal choice for rotis, parathas, and other homemade Indian breads.",
  },
  {
    number: "04",
    question: "How can I use BAAZ Multigrain Atta?",
    answer:
      "BAAZ Multigrain Atta can be used just like regular atta. It is ideal for preparing soft rotis, chapatis, parathas, and other homemade breads. Simply knead the atta with water to make a smooth dough and prepare your favourite recipes.",
  },
  {
    number: "05",
    question: "Which BAAZ Atta is suitable for everyday meals?",
    answer:
      "Both BAAZ Durum Wheat Traditional Atta and BAAZ Multigrain Atta are suitable for everyday meals. Choose Durum Wheat Traditional Atta for the classic wheat taste and texture, or choose Multigrain Atta when you prefer a blend of different grains in your daily diet.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#F3F1EC] pb-6 md:py-6 lg:pb-12">
      {/* ================= HEADING ================= */}
      <div className="text-center mb-8 xl:pb-10 px-6">
        <p className="text-lg md:text-xl text-gray-800">
          Explore
        </p>

        <h2 className="text-2xl mt-4 md:text-3xl lg:text-4xl italic text-gray-900">
          Get to Know BAAZ Atta
        </h2>
      </div>

      <div className="container mx-auto px-5 md:px-12 xl:px-32 flex flex-col md:flex-row gap-8 md:gap-12 items-start">

        {/* ================= IMAGE SECTION ================= */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/img/about/13.png"
            alt="BAAZ Atta"
            loading="lazy"
            decoding="async"
            className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* ================= FAQ SECTION ================= */}
        <div className="w-full md:w-2/3">
          {faqs.map((elm, index) => (
            <ul
              key={index}
              onClick={() => toggleFAQ(index)}
              className="border-b cursor-pointer"
            >
              {/* Question */}
              <div className="flex justify-between items-center text-lg md:text-xl py-4 gap-4">
                <div className="flex text-xl items-start md:items-center space-x-3">
                  <span className="font-bold text-gray-700">
                    {elm.number}
                  </span>

                  <h6 className="font-medium text-gray-900">
                    {elm.question}
                  </h6>
                </div>

                <span className="duration-200 transition-all text-gray-700 shrink-0">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>

              {/* Answer */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-[300px] opacity-100 py-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-justify text-base leading-7">
                  {elm.answer}
                </p>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
