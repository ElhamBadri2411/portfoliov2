import Hero from "@/components/hero";
import React from "react";
import HeroBlog from "@/components/heroblog";
import Skills from "@/components/skills";
import Experience from "@/components/experience";

type Props = {};

const Page = (props: Props) => {
  return (
    <main className="md:container relative mx-auto w-full  p-4 print:p-12 md:p-16">
      <Hero />
      <HeroBlog />
      <Skills />
      <Experience />
    </main>
  );
};

export default Page;
