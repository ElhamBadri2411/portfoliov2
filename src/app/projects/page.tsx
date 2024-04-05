import Back from "@/components/back";
import Projects from "@/components/projects";
import React from "react";
import { Projects as projects } from "@/info/links";

type Props = {};

const ProjectsPage = (props: Props) => {
  return (
    <div className="md:container relative mx-auto w-full overflow-auto p-4 print:p-12 md:p-16">
      <main className="px-4 py-8  container ">
        <section>
          <Back link={"/"} />
          <h1 className=" text-3xl">projects</h1>
          <Projects projects={projects} />
        </section>
      </main>
    </div>
  );
};

export default ProjectsPage;
