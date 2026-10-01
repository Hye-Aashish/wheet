import Link from "next/link";
import React from 'react'
import { FaGreaterThan } from 'react-icons/fa6'

export default function PrivacyPolicy() {
  return (
    <>
      

          <div className="relative text-white">
                  <div className="bg-cover bg-center bg-no-repeat relative bg-[url('/img/commonBanner/1.webp')] h-[20vh] lg:h-[40vh] flex flex-col justify-center items-center">
                    <div className="absolute inset-0 bg-black/40"></div>
        
                    <div className="relative text-center px-6 md:px-16 xl:px-40">
                    <h1 className="text-2xl md:text-5xl lg:text-6xl uppercase">
                    Privacy & Policy 
                    </h1>
        
                      <div className="flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base">
                        <Link href="/" className="hover:text-gray-300 transition">
                          Home
                        </Link>
                        <FaGreaterThan className="text-xs opacity-70" />
                        <span className="font-medium"> Privacy & Policy </span>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="Privacy-Policy bg-[#F3F1EC]">
  <div className="container mx-auto px-5 md:px-12 xl:px-32 flex flex-col gap-y-10 lg:gap-y-10 justify-between py-10 lg:py-16">

    <section>
      <h2 className="text-2xl font-semibold">1. Introduction</h2>
      <p className="mt-2 text-gray-700">
        At Ayutramart, we value your trust and are committed to safeguarding your personal data. This Privacy Policy outlines how we collect, use, and protect your information when you explore our Ayurvedic products like Shilajit, Safed Musli, Ashwagandha, Kesar, and Keeda Jadi on our website.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
      <ul className="list-disc pl-5 mt-2 text-gray-700">
        <li>Personal details (name, email, phone number, delivery address)</li>
        <li>Order details including purchased items like Shilajit or Ashwagandha</li>
        <li>Billing and payment data (processed via secure third-party gateways)</li>
        <li>Device information, IP address, and browsing behavior</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
      <ul className="list-disc pl-5 mt-2 text-gray-700">
        <li>To fulfill product orders and manage returns or refunds</li>
        <li>To provide customer support and personalized product recommendations</li>
        <li>To improve your experience while browsing our natural wellness range</li>
        <li>To share updates, offers, and wellness tips related to products like Safed Musli or Kesar</li>
        <li>To prevent fraudulent transactions and ensure data safety</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">4. Sharing of Information</h2>
      <p className="mt-2 text-gray-700">We respect your privacy and only share information with:</p>
      <ul className="list-disc pl-5 mt-2 text-gray-700">
        <li>Payment partners for secure transactions</li>
        <li>Delivery services for prompt product dispatch</li>
        <li>Regulatory authorities when required by law</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">5. Data Security</h2>
      <p className="mt-2 text-gray-700">
        We implement safety protocols to keep your information protected. However, we encourage users to keep login credentials secure and avoid sharing personal details publicly.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">6. Cookies & Tracking</h2>
      <p className="mt-2 text-gray-700">
        Ayutramart uses cookies to personalize your experience and analyze traffic. You can control cookie preferences through your browser settings.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">7. Your Rights</h2>
      <ul className="list-disc pl-5 mt-2 text-gray-700">
        <li>Access or update your account and personal data</li>
        <li>Request deletion of your data</li>
        <li>Unsubscribe from promotional communications</li>
        <li>Request a copy of your stored information</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">8. Third-Party Links</h2>
      <p className="mt-2 text-gray-700">
        Our site may contain links to external wellness or health sources. Ayutramart is not responsible for their content or privacy practices.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">9. Updates to This Policy</h2>
      <p className="mt-2 text-gray-700">
        We may revise this Privacy Policy as needed. Updates will be posted on this page and apply from the date of publication.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">10. Contact Us</h2>
      <p className="mt-2 text-gray-700">If you have any questions about your privacy or data, feel free to reach us:</p>
      <p className="mt-2 text-gray-700 font-semibold">Email: support@ayutramart.com</p>
      <p className="text-gray-700 font-semibold">Phone: +17789812002</p>
      <p className="text-gray-700 font-semibold">Address: #221 Wellness Avenue, Sector 21, New Delhi, 110075, India</p>
    </section>

  </div>
</div>


      </>
  )
}
