"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
const linkData = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];
const Head: FC<Props> = () => {
  const pathname = usePathname();
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto text-black p-8 items-center">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-xl space-x-4">
          {linkData.map((link) => (
            <Link
              className={
                pathname === link.href ? "text-purple-500" : "text-black"
              }
              href={link.href}
              key={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Head);
