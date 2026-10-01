import React from "react";
import BlogInner from "@/app/components/BlogInner";
import { blogData, getBlogBySlug } from "../blogData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  return {
    title: `${blog?.title || "Wellness Article"} | BAAZ Atta & Wellness`,
    description: blog?.excerpt || "Read our latest health, organic wheat, and Ayurvedic wellness insights.",
  };
}

export function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  const currentBlog = getBlogBySlug(slug);

  return (
    <main>
      <BlogInner currentBlog={currentBlog} />
    </main>
  );
}
