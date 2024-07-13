import React from "react";
import { Project } from "@/types/project-types";
import Image from "next/image";

interface Props {
  projects: Project[];
}

const CardProject: React.FC<Props> = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col w-full h-full bg-red-50/5 rounded-lg min-h-80"
        >
          <div className="">
            <img
              src={project.details.image}
              alt={project.details.title}
              className="w-full max-h-32 object-cover rounded-t-lg"
            />
          </div>
          <div className="flex flex-col p-5 justify-between h-full">
            <div className="description">
              <div className="title flex flex-row items-center gap-3 ">
                <h1 className=" text-white text-lg font-bold mb-1 h-full">
                  {project.details.title}
                </h1>
              </div>
              <p className="text-white text-xs">
                {project.details.description}
              </p>
            </div>
            <div className="footer flex flex-row justify-between items-center">
              <a
                href={project.details.github}
                target="_blank"
                className="text-blue-500 underline text-sm"
              >
                Source Code
              </a>
              <div className="techstack flex flex-row gap-1 items-center h-full p-1 bg-white/10 rounded-lg">
                {project.details.techStack.map((tech, index) => (
                  <Image
                    key={index}
                    src={`https://skillicons.dev/icons?i=${tech.toLowerCase()}`}
                    alt={tech}
                    width={21}
                    height={21}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardProject;
