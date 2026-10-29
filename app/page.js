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
import StoreLocator from "./components/StoreLocator";

export const metadata = {
  title: "BAAZ Flour Mill | Matwala Foods Millet & Specialty Flours (4 lb)",
  description:
    "Shop BAAZ Flour Mill by Matwala Foods — kodo, besan, ragi, corn, bajra, and jowar flours. Product of Canada, locally milled in Surrey BC.",
};

export default function page() {
  return (
    <>
      <HeroSection />
      <MarqueeText />
      <Aboutus />
      <ProductAyurved />
      <ShowCase />
      <Testmonails />
      <NewCategoriesJwellery />
      <MarqueeText />
      <Faq />

      {/* Retail Store Locator with Interactive Map & partner store directory */}
      <StoreLocator />

      <BottomfixLinks />
      <Blogs />
      <FooterTopMarque />
    </>
  );
}
