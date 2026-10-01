import Link from "next/link";
import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

export default function TermsCondition() {
  return (
    <>
      <div className="relative text-white">
        <div className="bg-cover bg-center bg-no-repeat relative bg-[url('/img/commonBanner/1.webp')] h-[20vh] lg:h-[40vh] flex flex-col justify-center items-center bg-[#023c68]">
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative text-center px-6 md:px-16 xl:px-40">
            <h1 className="text-2xl md:text-5xl lg:text-6xl uppercase font-serif font-bold">
              Terms & Conditions
            </h1>

            <div className="flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base">
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
              <FaGreaterThan className="text-xs opacity-70" />
              <span className="font-medium text-amber-400"> Terms & Conditions </span>
            </div>
          </div>
        </div>
      </div>

      <div className="terms-condition bg-[#F3F1EC]">
        <div className="container mx-auto px-5 md:px-12 xl:px-32 flex flex-col gap-y-10 lg:gap-y-10 justify-between py-10 lg:py-16">
          <section>
            <h2 className="text-2xl font-semibold text-[#023c68]">1. Introduction</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Welcome to BAAZ Atta, your trusted provider of 100% pure stone-ground Canadian Durum Wheat Atta, Multigrain Atta, Sharbati Atta, and wholesome flours. By accessing our website or purchasing our products, you agree to comply with and be bound by the following Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#023c68]">2. Eligibility & Accounts</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              You must be at least 18 years of age or possess legal parental/guardian consent to place orders on our website. You agree to provide accurate, up-to-date, and complete billing and shipping information for all purchases.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#023c68]">3. Product Descriptions & Quality Assurance</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              We take pride in delivering food-grade, stone-ground unbleached wheat flour. Because natural grains undergo seasonal harvests, minor natural variations in grain texture or aroma may occur without compromising our high nutritional and quality standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#023c68]">4. Pricing & Payments</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li>All product prices are clearly displayed and inclusive of applicable taxes unless stated otherwise.</li>
              <li>Payments are processed securely through certified online payment gateways.</li>
              <li>Orders are confirmed upon successful payment verification.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#023c68]">5. Shipping & Deliveries</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li>Orders are dispatched in sealed, moisture-proof food packaging within 1–3 business days.</li>
              <li>Delivery tracking information is provided once the package is in transit with our logistics partner.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#023c68]">6. Contact Information</h2>
            <p className="mt-2 text-gray-700">For inquiries regarding our terms or orders, please contact our support team:</p>
            <p className="mt-2 text-gray-700 font-semibold">Email: Baazatta1@gmail.com</p>
            <p className="text-gray-700 font-semibold">Phone: +1 (778) 981-2002</p>
            <p className="text-gray-700 font-semibold">Address: 123, 12885 85 Ave, Surrey, BC, Canada</p>
          </section>
        </div>
      </div>
    </>
  );
}
