import Link from "next/link";
import { Projects as projects } from "../info/projects";
import { Button } from "./ui/button";
import Projects from "./projects";

export default function HeroBlog() {
  const threeRecentProjects = projects.slice(0, 3);

  return (
    <div className="">
      <main className="px-4 py-8  container ">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-2xl font-semibold">Some of my projects</h4>
            <div className="flex items-center space-x-2">
              <Link href={"/projects"}>
                <Button className="bg-primary ">All projects</Button>
              </Link>
            </div>
          </div>
          <div className="">
            <Projects projects={threeRecentProjects} />
          </div>
        </section>
      </main>
    </div>
  );
}
