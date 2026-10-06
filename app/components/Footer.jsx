
"use client";

import Link from "next/link";
import {
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";
import { usePathname } from "next/navigation";
import BottomfixLinks from "./BottomfixLinks";

const Footer = () => {
  const pathname = usePathname();

  // Show bottom fixed links only on homepage
  const isHome = pathname === "/";

  // ================= PRODUCTS =================
  const products = [
    {
      title: "BAAZ Durum Wheat Traditional Atta",
      slug: "baaz-durum-wheat-traditional-atta",
    },
    {
      title: "BAAZ Multigrain Atta",
      slug: "baaz-multigrain-atta",
    },
    {
      title: "BAAZ Corn Flour",
      slug: "baaz-corn-flour",
    },
    {
      title: "BAAZ Besan Flour",
      slug: "baaz-besan-flour",
    },
    {
      title: "BAAZ Jawar Flour",
      slug: "baaz-jawar-flour",
    },
  ];

  // ================= QUICK LINKS =================
  const quickLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blogs",
      href: "/blogs",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact Us",
      href: "/contact-us",
    },
    {
      title: "All Products",
      href: "/all-products",
    },
    {
      title: "Store Locator",
      href: "/#store-locator",
    },
  ];

  // ================= SOCIAL LINKS =================
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com",
      icon: <RiInstagramFill />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com",
      icon: <RiFacebookFill />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: <RiTwitterXFill />,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com",
      icon: <RiYoutubeFill />,
    },
  ];

  return (
    <>
      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="relative w-full overflow-hidden bg-[#023c68] px-5 pt-12 text-white sm:px-8 md:px-12 lg:px-16 xl:px-32">
        {/* ================= BACKGROUND DECORATIONS ================= */}

        <img
          src="/img/footer-left.png"
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-40
            -top-10
            w-[320px]
            opacity-30
            sm:-left-32
            sm:w-[380px]
            lg:-left-24
            lg:top-5
            lg:w-[450px]
            lg:opacity-70
          "
        />

        <img
          src="/img/footer-right.png"
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-5
            -right-24
            w-[320px]
            opacity-30
            sm:-right-16
            sm:w-[380px]
            lg:-right-5
            lg:-top-5
            lg:w-[450px]
            lg:opacity-70
          "
        />

        {/* ================= MAIN CONTAINER ================= */}

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div
            className="
              grid
              grid-cols-1
              gap-10
              pb-10
              sm:grid-cols-2
              lg:grid-cols-[1.4fr_0.7fr_1fr_1.2fr]
              lg:gap-8
              xl:gap-12
            "
          >
            {/* =====================================================
                COMPANY / ABOUT
            ===================================================== */}

            <div className="flex flex-col items-start">
              {/* LOGO */}
              <Link href="/" className="inline-block">
                <img
                  src="/img/logo.webp"
                  alt="BAAZ Atta"
                  className="
                    h-auto
                    w-32
                    rounded-lg
                    bg-white
                    p-2
                    sm:w-36
                    lg:w-44
                  "
                />
              </Link>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-5
                  max-w-md
                  text-sm
                  leading-7
                  text-white/90
                  sm:text-base
                "
              >
                BAAZ Atta brings quality flour made from carefully selected
                grains. Our products are prepared to deliver natural taste,
                smooth texture and wholesome goodness for everyday meals.
              </p>

              {/* SOCIAL ICONS */}
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      text-xl
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-white
                      hover:text-[#023c68]
                    "
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* =====================================================
                QUICK LINKS
            ===================================================== */}

            <div>
              <h2 className="mb-5 text-lg font-semibold sm:text-xl">
                Quick Links
              </h2>

              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="
                        inline-flex
                        text-sm
                        text-white/85
                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:text-white
                        sm:text-base
                      "
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* =====================================================
                PRODUCTS
            ===================================================== */}

            <div>
              <h2 className="mb-5 text-lg font-semibold sm:text-xl">
                Our Products
              </h2>

              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/product/${product.slug}`}
                      className="
                        inline-flex
                        text-sm
                        leading-6
                        text-white/85
                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:text-white
                        sm:text-base
                      "
                    >
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* =====================================================
                CONTACT / ADDRESS
            ===================================================== */}

            <div>
              <h2 className="mb-5 text-lg font-semibold sm:text-xl">
                Contact Us
              </h2>

              <div className="space-y-5">
                {/* ADDRESS */}
                <div className="flex items-start gap-3">
                  <IoLocationOutline className="mt-1 shrink-0 text-xl" />

                  <p className="text-sm leading-6 text-white/90 sm:text-base">
                    123, 12885 85 Ave,
                    <br />
                    Surrey, BC, Canada
                  </p>
                </div>

                {/* PHONE */}
                <a
                  href="tel:+17789812002"
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-white/90
                    transition-colors
                    duration-300
                    hover:text-white
                    sm:text-base
                  "
                >
                  <IoCallOutline className="shrink-0 text-xl" />
                  <span>+1 778 981 2002</span>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:Baazatta1@gmail.com"
                  className="
                    flex
                    items-start
                    gap-3
                    break-all
                    text-sm
                    text-white/90
                    transition-colors
                    duration-300
                    hover:text-white
                    sm:text-base
                  "
                >
                  <IoMailOutline className="mt-1 shrink-0 text-xl" />
                  <span>Baazatta1@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* =========================================================
              DIVIDER
          ========================================================= */}

          <div className="h-px w-full bg-white/20" />

          {/* =========================================================
              BOTTOM FOOTER
          ========================================================= */}

          <div
            className="
              flex
              flex-col
              items-center
              gap-4
              py-6
              text-center
              lg:flex-row
              lg:justify-between
              lg:text-left
            "
          >
            {/* COPYRIGHT */}
            <p className="text-sm text-white/90 sm:text-base">
              © {new Date().getFullYear()} BAAZ Atta. All rights reserved.
            </p>

            {/* DESIGNED BY */}
            <p className="text-sm text-white/90 sm:text-base">
              Designed by{" "}
              <a
                href="https://skymoreitsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-medium
                  text-white
                  transition-colors
                  duration-300
                  hover:text-white/70
                "
              >
                Skymore IT Solutions ❤️
              </a>
            </p>

            {/* POLICY LINKS */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm sm:text-base">
              <Link
                href="/privacy-policy"
                className="text-white/90 transition-colors duration-300 hover:text-white"
              >
                Privacy Policy
              </Link>

              <span className="hidden text-white/40 sm:block">|</span>

              <Link
                href="/terms-condition"
                className="text-white/90 transition-colors duration-300 hover:text-white"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================
          BOTTOM FIXED LINKS
      ========================================================= */}

      {isHome && <BottomfixLinks />}
    </>
  );
};

export default Footer;
