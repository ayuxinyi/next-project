import Hero from "@/components/hero";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
};

export default function About() {
  return <Hero imgSrc="/about.jpg" content="About Your App" />;
}
