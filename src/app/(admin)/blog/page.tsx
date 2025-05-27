import Hero from "@/components/hero";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page",
  keywords: "blog, posts, articles",
  description: "Read our latest blog posts and articles on various topics.",
};

export default function Blog() {
  return <Hero imgSrc="/blog.jpg" content="Blog Posts" />;
}
