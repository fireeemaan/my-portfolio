"use client";

import React from "react";
import { JetBrains_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import { Project } from "@/types/project-types";
import { projects } from "@/data/project-data";
import CardProject from "@/components/card-project";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const Projects = () => {
  return (
    <div>
      <div className="grid 2xl:grid-cols-3 grid-flow-row md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full h-full px-[10vw] py-32 lg:p-36 gap-5">
        <div className="title flex flex-col items-center 2xl:col-span-3 md:col-span-1 lg:col-span-2 sm:col-span-1">
          <div className="flex flex-row w-full items-center gap-3">
            <h1
              className={`${jetbrains.className} flex justify-start items-center text-white text-4xl font-bold`}
            >
              Projects
            </h1>
            <motion.div
              animate={{
                width: ["0%", "35%"],
              }}
              className="h-[1px] bg-white/50"
            ></motion.div>
          </div>
          <h2 className="text-white/80 w-full">
            List of Projects I&apos;ve created
          </h2>
        </div>
        <CardProject projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
