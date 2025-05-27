import Hero from "@/components/hero";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import type { Metadata } from "next";

interface Props {
  children?: ReactNode;
}

export const metadata: Metadata = {
  title: "About Page",
};

const About: FC<Props> = () => {
  return <Hero imgSrc="/about.jpg" content="About Your App" />;
};

export default memo(About);
