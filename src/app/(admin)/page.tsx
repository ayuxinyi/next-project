import Hero from "@/components/hero";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Home: FC<Props> = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default memo(Home);
