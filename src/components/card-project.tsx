import React from "react";
import { Project } from "@/types/project-types";

interface Props {
  projects: Project[];
}

const CardProject: React.FC<Props> = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col w-full bg-red-50/5 rounded-lg min-h-80"
        >
          <div className="">
            <img
              src={project.details.image}
              alt={project.details.title}
              className="w-full h-32 object-cover rounded-t-lg"
            />
          </div>
          <div className="p-5">
            <h1 className=" text-white text-lg font-bold">
              {project.details.title}
            </h1>
            <p className="text-white text-xs">{project.details.description}</p>
            <a
              href={project.details.github}
              target="_blank"
              rel="noreferrer"
              className="text-white underline"
            >
              View on Github
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardProject;
