import React from 'react';
import BlogPage from '../components/BlogPage';

export const metadata = {
  title: "BAAZ Atta Journal - Wheat Milling Insights, Recipes & Healthy Living Guides",
  description:
    "Explore the BAAZ Atta blog for expert roti-making secrets, stone-ground chakki milling insights, multigrain nutrition, and wholesome culinary guides.",
};

export default function page() {
  return (
    <div>
      <BlogPage />
    </div>
  );
}
