"use client";
import React from "react";
import { HoverEffect } from "./card-hover-effect";
import { Project } from "@/info/Link";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <div className="max-w-5xl ">
      <HoverEffect items={projects} />
    </div>
  );
}

export default Projects;
