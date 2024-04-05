import React from "react";

import Back from "@/components/back";
import { Experiences } from "@/info/links";
import Image from "next/image";
import exp from "constants";
import { notFound } from "next/navigation";
import MDXRender from "@/components/mdxrender";
import { BlogPost, getNote } from "@/lib/blogutils";
import { Separator } from "@/components/ui/separator";

type Props = {};

function getExperienceBySlug(slug: string) {
  const experience = Experiences.find((experience) => experience.slug === slug);
  if (!experience) {
    notFound();
  }
  return experience;
}

const experiencePage = ({ params }: { params: any }) => {
  const experience = getExperienceBySlug(params.company);
  const experiencePost: BlogPost = {
    body: getNote(experience.slug),
  };
  return (
    <div className="md:container relative mx-auto w-full overflow-auto p-4 print:p-12 md:px-16">
      <main className="px-4 py-8  container ">
        <section>
          <h1 className="pt-10 text-4xl font-semibold max-w-3xl">
            {experience.company}{" "}
            <span className=" text--foreground "> - {experience.position}</span>
          </h1>
          <div className="mt-2 mb-8 text-sm flex flex-row justify-between max-w-2xl">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {experience.from} - {experience.to || "Present"}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {experience.location}
            </p>
          </div>
          <div className="flex flex-row items-center justify-center pt-2 pb-4">
            <Image
              src={experience.image || "/placeholder.jpg"}
              alt="image"
              width={100}
              height={200}
              className="rounded-lg"
            />
          </div>
          <MDXRender blogpost={experiencePost} />
        </section>
      </main>
    </div>
  );
};

export default experiencePage;
