import Hero from "@/components/hero";
import HeroProjects from "@/components/heroprojects";
import React from "react";
import HeroBlog from "@/components/heroblog";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import HeroExperience from "@/components/heroexperiences";

type Props = {};

const Page = (props: Props) => {
  return (
    <main className="md:container relative mx-auto w-full  p-4 print:p-12 md:px-16">
      <Hero />
      <HeroExperience />
      <HeroBlog />
      <Skills />
      <HeroProjects />
    </main>
  );
};

export default Page;
