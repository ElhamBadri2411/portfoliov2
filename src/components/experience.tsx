import React from "react";
import { Experiences as experiences } from "@/info/links";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="">
      <main className="px-4 py-8  container ">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-2xl font-semibold">Experience</h4>
        </div>
        {experiences.map((experience, i) => {
          return (
            <div className="pr-20" key={experience.company}>
              <div className=" z-50 flex justify-between items-center rounded-lg border border-gray-200 p-4 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-200 bg-transparent">
                {/*  dark:bg-gray-950 dark:hover:border-gray-700"> */}
                <Link href={experience.link} className="group">
                  <div className="flex flex-row">
                    <div className="h-16 w-16 rounded-lg border-gray-200 dark:border-gray-800">
                      <Image
                        alt={experience.company}
                        className="aspect-square w-full rounded-lg object-contain"
                        height={200}
                        src={experience.image}
                        width={200}
                      />
                    </div>
                    <div className="space-y-1 pl-5">
                      <h4 className="text-base font-medium inline">
                        {experience.position}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:underline">
                        {experience.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {experience.from} -{" "}
                        {experience.to ? experience.to : "Present"}
                      </p>
                    </div>
                  </div>
                </Link>
                {experience.hasNotes && (
                  <Link href={`/blog/${experience.company}`}>
                    <Button size={"sm"}>Notes</Button>
                  </Link>
                )}
              </div>
              {i != experiences.length - 1 && (
                <div
                  className="z-0 h-8
              bg-primary w-0.5 ml-10 "
                />
              )}
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Experience;
