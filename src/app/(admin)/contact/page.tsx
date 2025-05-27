import Hero from "@/components/hero";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import type { Metadata } from "next";

interface Props {
  children?: ReactNode;
}

export const metadata: Metadata = {
  title: "Contact Page",
};

const Contact: FC<Props> = () => {
  return <Hero imgSrc="/contact.jpg" content="Contact Us" />;
};

export default memo(Contact);
