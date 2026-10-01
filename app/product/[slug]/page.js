import React from "react";
import ProductDetails from "./ProductDetails";
import AyutramartProduct from "@/app/AyutramartData";

export const generateStaticParams = async () => {
  return AyutramartProduct.map((product) => ({
    slug: product.title.toLowerCase().replace(/,/g, "").split(" ").join("-"),
  }));
};

export default async function page({ params }) {
  const { slug } = await params;
  const singleProduct = AyutramartProduct.find(
    (product) => product.title.toLowerCase().replace(/,/g, "").split(" ").join("-") === slug
  );

  return (
    <div>
      <ProductDetails slug={slug} singleProduct={singleProduct} />
    </div>
  );
}
