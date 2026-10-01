"use client";
import React from "react";
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa6";
import {
  FaMapLocationDot,
  FaPhoneVolume,
  FaEnvelopeCircleCheck,
} from "react-icons/fa6";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaMapLocationDot />,
      link: "https://maps.google.com/?q=123+12885+85+Ave+Surrey+BC+Canada",
      title: "Our Address",
      text1: "123, 12885 85 Ave,",
      text2: "Surrey, BC, Canada",
    },
    {
      icon: <FaEnvelopeCircleCheck />,
      link: "mailto:Baazatta1@gmail.com",
      title: "Email Us",
      text1: "Baazatta1@gmail.com",
      text2: "info@baazatta.com",
    },
    {
      icon: <FaPhoneVolume />,
      link: "tel:+17789812002",
      title: "Call Us",
      text1: "+1 (778) 981-2002",
      text2: "+1 778 981 2002",
    },
  ];

  return (
    <>
      <div>
        {/* TOP HERO BANNER */}
        <div className="relative text-white">
          <div className="bg-cover bg-center bg-no-repeat relative bg-[url('/img/commonBanner/1.webp')] h-[22vh] lg:h-[36vh] flex flex-col justify-center items-center bg-[#023c68]">
            <div className="absolute inset-0 bg-black/45"></div>

            <div className="relative text-center px-6 md:px-16 xl:px-40 space-y-2">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif uppercase font-bold tracking-wide">
                Contact Us
              </h1>

              <div className="flex items-center justify-center gap-x-2 text-sm md:text-base font-medium">
                <Link href="/" className="hover:text-amber-400 transition">
                  Home
                </Link>
                <FaGreaterThan className="text-xs opacity-70" />
                <span className="text-amber-400">Contact Us</span>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT CONTENT SECTION */}
        <div className="relative px-5 md:px-12 xl:px-32 py-10 lg:py-16 bg-[#faf8f5]">
          <img
            src="/img/anime/anime1.webp"
            alt=""
            className="float-left hidden lg:block w-md -z-10 absolute -left-10 top-0 opacity-40 pointer-events-none"
          />
          <img
            src="/img/anime/anime2.webp"
            alt=""
            className="float-right hidden w-md -z-10 absolute right-0 bottom-0 opacity-40 pointer-events-none"
          />

          <div>
            <div className="flex flex-col items-center justify-center gap-y-3 text-center mb-8 lg:mb-12">
              <span className="text-xs md:text-sm font-bold tracking-widest text-[#023c68] uppercase bg-[#023c68]/10 px-4 py-1.5 rounded-full inline-block">
                Get in Touch With Us
              </span>
              <h2 className="font-bold font-serif text-slate-800 text-3xl md:text-4xl lg:text-5xl">
                Have Any Questions? <br />
                Send Us a Message
              </h2>
            </div>

            <div className="flex lg:mt-8 relative z-10 items-start flex-col lg:flex-row gap-8 xl:gap-12">
              
              {/* CONTACT FORM */}
              <div className="left w-full lg:w-[68%] bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="form-container">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Your Name</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="bg-[#F8F9FA] border border-gray-200 focus:border-[#023c68] focus:bg-white px-4 py-3 text-sm md:text-base rounded-xl w-full outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address</label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="bg-[#F8F9FA] border border-gray-200 focus:border-[#023c68] focus:bg-white px-4 py-3 text-sm md:text-base rounded-xl w-full outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+1 (778) 981-2002"
                          className="bg-[#F8F9FA] border border-gray-200 focus:border-[#023c68] focus:bg-white px-4 py-3 text-sm md:text-base rounded-xl w-full outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Subject</label>
                        <input
                          type="text"
                          placeholder="Inquiry about BAAZ Atta"
                          className="bg-[#F8F9FA] border border-gray-200 focus:border-[#023c68] focus:bg-white px-4 py-3 text-sm md:text-base rounded-xl w-full outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Your Message</label>
                      <textarea
                        placeholder="How can we assist you with our products or orders?"
                        className="bg-[#F8F9FA] border border-gray-200 focus:border-[#023c68] focus:bg-white px-4 py-3 text-sm md:text-base rounded-xl h-36 lg:h-44 w-full outline-none transition resize-none"
                      ></textarea>
                    </div>

                    <div className="flex items-center justify-end mt-6">
                      <button
                        type="submit"
                        className="bg-[#023c68] hover:bg-[#4a9347] transition-colors duration-300 px-8 py-3.5 rounded-xl text-white text-base font-bold shadow-md cursor-pointer inline-flex items-center gap-2"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* CONTACT INFO SIDEBAR */}
              <div className="right w-full lg:w-[32%] space-y-4">
                <div className="grid w-full grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target={info.title === "Our Address" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="contact-info bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-4 items-center text-center lg:text-left hover:shadow-md hover:border-gray-200 transition group"
                    >
                      <div className="icon text-[#023c68] group-hover:bg-[#023c68] group-hover:text-white transition-colors duration-300 h-16 w-16 bg-[#023c68]/10 rounded-2xl text-2xl flex items-center justify-center shrink-0">
                        {info.icon}
                      </div>
                      <div className="content">
                        <h3 className="text-base font-bold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <div className="text-sm text-gray-600 space-y-0.5 leading-snug">
                          <p className="font-medium">{info.text1}</p>
                          <p>{info.text2}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* GOOGLE MAP */}
        <section className="w-full h-[300px] lg:h-[450px] overflow-hidden bg-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.839218680074!2d-122.86828592323382!3d49.15579977931818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9571e219769%3A0x6b1ea87d377b63f5!2s12885%2085%20Ave%2C%20Surrey%2C%20BC%20V3W%200K8%2C%20Canada!5e0!3m2!1sen!2sca!4v1710000000000!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BAAZ Atta Location Map"
          ></iframe>
        </section>
      </div>
    </>
  );
}
