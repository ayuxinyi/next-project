import Image from "next/image";
import React from "react";
import type { ReactNode } from "react";
// import homeSrc from "./public/home.jpg";

interface Props {
  children?: ReactNode;
  imgSrc?: string; // 可选的图片源路径
  content?: string; // 可选的内容
}

export default function Hero({
  imgSrc = "/home.jpg",
  content = "首页图片",
}: Props) {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        {/* next.js封装的内置组件,进行了优化 */}
        {/* Image组件可以直接访问public目录中的图片 */}
        <Image src={imgSrc} fill style={{ objectFit: "cover" }} alt={content} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900"></div>
      </div>
      <div className="flex justify-center items-center h-full">
        <h1 className="text-white text-6xl">{content}</h1>
      </div>
    </div>
  );
}
