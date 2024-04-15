import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Skills as skills } from "@/info/skills";
import Link from "next/link";

type Props = {};
const coloursMap: any = {
  java: "hover:bg-[#F09310]",
  clang: "hover:bg-[#659BD3]",
  Python: "hover:bg-[#D1B000]",
  Csharp: "hover:bg-[#6F42C1]",
  Mysql: "hover:bg-[#007FFF]",
  Postgresql: "hover:bg-[#007FFF]",
  Javascript: "hover:bg-[#D1b000]",
  Typescript: "hover:bg-[#007ACC]",
  Html5: "hover:bg-[#1F4E79]",
  Css3: "hover:bg-[#FF9900]",
  React: "hover:bg-[#00BDFE]",
  Nextjs: "hover:bg-[#4D6785]",
  Redux: "hover:bg-[#6F42C1]",
  Tailwindcss: "hover:bg-[#9BD8DD]",
  Nodejs: "hover:bg-[#4CAF50]",
  Flask: "hover:bg-[#F05030]",
  Expressjs: "hover:bg-[#4D6785]",
  Mongodb: "hover:bg-[#4CAF50]",
  Microsoftsqlserver: "hover:bg-[#0078D4]",
  Git: "hover:bg-[#F05030]",
  Docker: "hover:bg-[#0db7ed]",
  Googlecloud: "hover:bg-[#DE5246]",
  Amazonaws: "hover:bg-[#FF9900]",
  Kubernetes: "hover:bg-[#007BFF]",
  Linux: "hover:bg-[#F05030]",
  Gitlab: "hover:bg-[#7C53C3]",
};

const Skills = (props: Props) => {
  return (
    <div className="" id="skills">
      <main className="px-4 py-8  container ">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-2xl font-semibold">Skills</h4>
            <div className="flex items-center space-x-2">
              {/* <RssIcon className="text-orange-500 h-6 w-6" /> */}
              {/* <Button className=" bg-primary text-white">RSS Feed</Button> */}
              <Link href={"/Elham_Badri_Resume.pdf"} locale={false}>
                <Button className="bg-primary ">Resume</Button>
              </Link>
            </div>
          </div>
          {skills.map(({ colour, name, logo: Icon }, index) => {
            return (
              <span key={index}>
                <Badge
                  variant={"outline"}
                  className={` ${coloursMap[colour]} flex-row w-fit py-1.5 space-x-4 flex-wrap m-1.5 `}
                  // className={"hover:bg-logo-" + colour}
                >
                  <Icon className=" w-7 h-7" />
                  <span className="px-1.5 text-sm font-thin text-secondary-forground">
                    {name}
                  </span>
                </Badge>
              </span>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Skills;
