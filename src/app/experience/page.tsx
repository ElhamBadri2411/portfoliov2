import React from "react";
import Back from "@/components/back";
import { Experiences } from "@/info/links";
import Experience from "@/components/experience";

type Props = {};

const ExperiencesPage = (props: Props) => {
  return (
    <div className="md:container relative mx-auto w-full overflow-auto p-4 print:p-12 md:px-16">
      <main className="px-4 py-8  container ">
        <section>
          <Back link={"/"} />
          <h1 className=" text-3xl">experience</h1>
          <Experience experiences={Experiences} />
        </section>
      </main>
    </div>
  );
};

export default ExperiencesPage;
