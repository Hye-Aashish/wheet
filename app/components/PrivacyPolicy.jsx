import Link from "next/link";
import React from 'react'
import { FaGreaterThan } from 'react-icons/fa6'

export default function PrivacyPolicy() {
  return (
    <>
      <div className="relative text-white">
        <div className="bg-cover bg-center bg-no-repeat relative bg-[url('/img/commonBanner/1.webp')] h-[20vh] lg:h-[40vh] flex flex-col justify-center items-center bg-[#023c68]">
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative text-center px-6 md:px-16 xl:px-40">
            <h1 className="text-2xl md:text-5xl lg:text-6xl uppercase font-serif font-bold">
              Privacy & Policy
            </h1>

            <div className="flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base">
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
              <FaGreaterThan className="text-xs opacity-70" />
              <span className="font-medium text-amber-400"> Privacy & Policy </span>
            </div>
          </div>
        </div>
      </div>

      <div className="Privacy-Policy bg-[#F3F1EC]">
        <div className="container mx-auto px-5 md:px-12 xl:px-32 flex flex-col gap-y-10 lg:gap-y-10 justify-between py-10 lg:py-16">

          <section>
            <h2 className="text-2xl font-semibold text-[#023c68]">1. Introduction</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              At BAAZ Atta, we value your trust and are committed to safeguarding your personal data. This Privacy Policy outlines how we collect, use, and protect your information when you browse and purchase our premium wheat products, including Canadian Durum Wheat Atta, Multigrain Atta, Sharbati Atta, and Organic Chakki Fresh flours on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#023c68]">2. Information We Collect</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li>Personal details (name, email address, phone number, and delivery address)</li>
              <li>Order details including purchased wheat flour items, quantities, and packaging sizes</li>
              <li>Billing and payment details (processed securely via encrypted payment gateways)</li>
              <li>Device information, IP address, and website usage preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#023c68]">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li>To fulfill product orders, handle deliveries, and manage customer service inquiries</li>
              <li>To provide order tracking updates and delivery notifications</li>
              <li>To improve our products, recipes, and shopping experience</li>
              <li>To share exclusive seasonal offers, flour quality updates, and culinary guides</li>
              <li>To detect and prevent fraudulent transactions and ensure system security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#023c68]">4. Sharing of Information</h2>
            <p className="mt-2 text-gray-700">We respect your privacy. We only share information with trusted third parties:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li>Verified payment processing partners for secure transactions</li>
              <li>Reputable courier and logistics services for prompt order dispatch</li>
              <li>Authorized regulatory authorities when required by applicable law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#023c68]">5. Data Security</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              We implement industry-standard SSL encryption and safety protocols to keep your personal information secure. However, we encourage customers to maintain confidential passwords and avoid sharing login credentials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#023c68]">6. Cookies & Tracking</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              BAAZ Atta uses essential cookies to remember cart contents, personalize your shopping experience, and analyze site performance. You can manage cookie preferences via your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#023c68]">7. Contact Us</h2>
            <p className="mt-2 text-gray-700">If you have any questions regarding our Privacy Policy, please reach out to us:</p>
            <p className="mt-2 text-gray-700 font-semibold">Email: Baazatta1@gmail.com</p>
            <p className="text-gray-700 font-semibold">Phone: +1 (778) 981-2002</p>
            <p className="text-gray-700 font-semibold">Address: 123, 12885 85 Ave, Surrey, BC, Canada</p>
          </section>

        </div>
      </div>
    </>
  );
}
