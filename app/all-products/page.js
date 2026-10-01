import React from 'react';
import AllProducts from '../components/AllProducts';
import BottomFilter from "./BottomFilter";

export const metadata = {
  title: "Explore Our Full BAAZ Atta Range | BAAZ Canada",
  description: "Browse 100% pure stone-ground Durum Wheat, Organic Chakki, Sharbati, and Multigrain Atta range.",
};

export default function Page() {
  return (
    <main>
      <BottomFilter />
      <AllProducts />
    </main>
  );
}
