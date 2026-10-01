import Link from "next/link";
import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

export default function TermsCondition() {
  return (
    <>
      <div className="relative text-white">
        <div className="bg-cover bg-center bg-no-repeat relative bg-[url('/img/commonBanner/1.webp')] h-[20vh] lg:h-[40vh] flex flex-col justify-center items-center">
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative text-center px-6 md:px-16 xl:px-40">
            <h1 className="text-2xl md:text-5xl lg:text-6xl uppercase">
              Terms & Condition
            </h1>

            <div className="flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base">
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
              <FaGreaterThan className="text-xs opacity-70" />
              <span className="font-medium"> Terms & Condition </span>
            </div>
          </div>
        </div>
      </div>

      <div className="terms-condition bg-[#F3F1EC]">
  <div className="container mx-auto px-5 md:px-12 xl:px-32 flex flex-col gap-y-10 lg:gap-y-10 justify-between py-10 lg:py-16">
    <section>
      <h2 className="text-2xl font-semibold">1. Introduction</h2>
      <p className="mt-2 text-gray-700">
        Welcome to Ayutramart, your reliable source for premium Ayurvedic and natural wellness products including Shilajit, Safed Musli, Ashwagandha, Kesar, and Keeda Jadi. By using our website, you agree to abide by these Terms and Conditions. Please read them carefully before placing any orders.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">2. Eligibility</h2>
      <p className="mt-2 text-gray-700">
        You must be at least 18 years of age to make purchases on our website. If you are under 18, parental or guardian consent is required. By using Ayutramart, you confirm that all the information provided by you is accurate and truthful.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">3. Product Information</h2>
      <p className="mt-2 text-gray-700">
        We strive to present accurate descriptions and images of our herbal products. Due to the nature of raw and organic ingredients, slight variations in appearance or aroma may occur, which are normal and do not indicate any defect.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">4. Pricing & Payments</h2>
      <ul className="list-disc pl-5 mt-2 text-gray-700">
        <li>All prices are listed in Indian Rupees (INR) and are subject to change without notice.</li>
        <li>Payments are accepted through secure third-party payment gateways.</li>
        <li>Orders are confirmed only upon successful payment. Failed transactions will not be processed.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">5. Shipping & Delivery</h2>
      <ul className="list-disc pl-5 mt-2 text-gray-700">
        <li>Orders are typically dispatched within 1-4 business days.</li>
        <li>Delivery timelines vary by location and logistics partner.</li>
        <li>Ayutramart is not liable for delays caused by courier companies or unforeseen circumstances.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">6. Returns & Refunds</h2>
      <ul className="list-disc pl-5 mt-2 text-gray-700">
        <li>Returns are accepted within 7 days of delivery, only if the product is unused and sealed.</li>
        <li>Refunds are processed post inspection and approval of returned items.</li>
        <li>Opened or used products are not eligible for return due to safety concerns.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">7. Intellectual Property</h2>
      <p className="mt-2 text-gray-700">
        All content on Ayutramart’s website—including text, images, packaging design, and branding—is the intellectual property of Ayutramart. Unauthorized use is strictly prohibited.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
      <p className="mt-2 text-gray-700">
        Ayutramart is not liable for indirect, incidental, or consequential damages, including health reactions. Always consult a healthcare professional before using herbal supplements, especially if you are pregnant, nursing, or on medication.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">9. Governing Law</h2>
      <p className="mt-2 text-gray-700">
        These Terms and Conditions are governed by the laws of India. Any disputes arising shall fall under the jurisdiction of the courts in Bengaluru, Karnataka.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">10. Contact Us</h2>
      <p className="mt-2 text-gray-700">
        For any queries or support related to your order, please contact us:
      </p>
      <p className="mt-2 text-gray-700 font-semibold">Email: support@ayutramart.com</p>
      <p className="text-gray-700 font-semibold">Phone: +17789812002</p>
      <p className="text-gray-700 font-semibold">Address: #99 Ayurvedic Lane, Whitefield, Bengaluru, 560066, India</p>
    </section>
  </div>
</div>

    </>
  );
}
