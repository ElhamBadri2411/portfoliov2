import React from "react";
import { Experiences as experiences } from "@/info/links";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="">
      <main className="px-4 py-8  container ">
        <section>
          <h4 className="text-2xl font-semibold">Experience</h4>
          <ol className={"flex flex-col gap-1.5"}>
            {experiences.map(({ company, position, from, to, link, image }) => {
              return <div key={company}>test</div>;
            })}
          </ol>
        </section>
      </main>
    </div>
  );
};

export default Experience;
