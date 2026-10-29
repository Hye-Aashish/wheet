import React from 'react';
import AllProducts from '../components/AllProducts';
import BottomFilter from "./BottomFilter";

export const metadata = {
  title: "Explore Our Full BAAZ Atta Range | BAAZ Canada",
  description: "Browse all six BAAZ Flour Mill 4 lb bags — kodo, besan, ragi, corn, bajra, and jowar.",
};

export default function Page() {
  return (
    <main>
      <BottomFilter />
      <AllProducts />
    </main>
  );
}
