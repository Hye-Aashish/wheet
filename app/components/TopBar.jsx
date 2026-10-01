"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import {
  FaInstagram,
  FaFacebookF,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";

import { useSelector } from "react-redux";

export default function TopBar() {
  const [langPop, setLangPop] = useState(false);


  return (
    <>
  

      <div>
        {/* Welcome Bar */}
        <div className="bg-[#023c68] text-center text-sm text-white py-2">
          Welcome to our store!
        </div>

        {/* Top Info Bar */}
        <div className="px-5 md:px-12 xl:px-32 hidden xl:flex items-center justify-between border-b border-gray-200 py-2">

          {/* LEFT SIDE - Social Icons + Links */}
          <div className="flex items-center gap-x-5">
  <a
              href="tel:+91123456789"
              className="hover:text-[#023c68] transition"
            >
              <span className="text-gray-500">Call Us:</span>{" "}
              <span className="text-[#023c68] font-medium">
                +17789812002
              </span>
            </a>

            <span className="h-5 border-l border-gray-300"></span>
            {/* Social Icons */}
          

            <span className="h-5 border-l border-gray-300"></span>

            {/* Links */}
        
          </div>

          {/* RIGHT SIDE - Contact + Language/Currency */}
          <div className="flex items-center gap-x-4 text-sm">

             <div className="flex items-center gap-x-3 text-gray-600">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#E4405F] transition"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#1877F2] transition"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="Google"
                className="hover:text-[#4285F4] transition"
              >
                <FaGoogle size={15} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-[#FF0000] transition"
              >
                <FaYoutube size={17} />
              </a>
            </div>

            <span className="h-5 border-l border-gray-300"></span>

            {/* Email */}
            <a
              href="mailto:Baazatta1@gmail.com"
              className="hover:text-[#023c68] transition"
            >
              <span className="text-gray-500">Email:</span>{" "}
              <span className="text-[#023c68] font-medium">
               Baazatta1@gmail.com
              </span>
            </a>


           
          </div>
        </div>
      </div>
    </>
  );
}
