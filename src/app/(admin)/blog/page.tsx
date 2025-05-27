import Hero from "@/components/hero";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import type { Metadata } from "next";

interface Props {
  children?: ReactNode;
}

export const metadata: Metadata = {
  title: "Blog Page",
  keywords: "blog, posts, articles",
  description: "Read our latest blog posts and articles on various topics.",
};

const Blog: FC<Props> = () => {
  return <Hero imgSrc="/blog.jpg" content="Blog Posts" />;
};

export default memo(Blog);
