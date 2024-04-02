// import { Navbar } from "@/components/navbar2";
import { Navbar } from "@/components/navbar";
import Hero from "@/components/hero";
import React from "react";
import HeroBlog from "@/components/heroblog";

type Props = {};

const Page = (props: Props) => {
  return (
    <main className="container relative mx-auto w-full overflow-auto p-4 print:p-12 md:p-16">
      <Navbar />
      <Hero />
      <HeroBlog />
    </main>
  );
};

export default Page;
