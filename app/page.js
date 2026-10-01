// "use client";
import React from "react";

import HeroSection from "./components/HeroSection";
import MarqueeText from "./components/MarqueeText";
import Blogs from "./components/Blogs";

import Testmonails from "./components/Testmonails";
import Faq from "./components/Faq";
import NewCategoriesJwellery from "./components/NewCategoriesJwellery";

import BottomfixLinks from "./components/BottomfixLinks";
import ProductAyurved from "./components/ProductAyurved";
import ShowCase from "./components/ShowCase";
import Aboutus from "./components/Aboutus";
import FooterTopMarque from "./components/FooterTopMarque";




export const metadata = {
  title: "BAAZ Durum Wheat Atta | Premium Quality Whole Wheat Flour for Healthy Living",
  description:
    "Discover BAAZ Atta – your trusted source for authentic durum wheat products, wellness solutions, and holistic health. Embrace natural living with quality you can trust.",
};


export default function page() {
  // useEffect(() => {
  //   AOS.init({ duration: 800 });
  // }, []);
  return (
    <>
      <HeroSection />
        <MarqueeText />
      <Aboutus/>
      <ProductAyurved/>
      <ShowCase/>
     
      <Testmonails />
       <NewCategoriesJwellery/> 
      <MarqueeText />     
      <Faq/>
   
       <BottomfixLinks/>  
         <Blogs />
         <FooterTopMarque/>

    </>
  );
}
