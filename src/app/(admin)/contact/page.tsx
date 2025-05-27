import Hero from "@/components/hero";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
};

export default function Contact() {
  return <Hero imgSrc="/contact.jpg" content="Contact Us" />;
}
