"use client";

import React from "react";
import { JetBrains_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import { Project } from "@/types/project-types";
import CardProject from "@/components/card-project";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const projects: Project[] = [
  {
    id: 1,
    details: {
      title: "Fishing Game",
      description:
        "Fishing Game is a simple game where you can catch fish and earn points. The game is built using Python.",
      image: "/images/fishing-game.png",
      github: "https://github.com/fireeemaan/",
    },
  },
  {
    id: 2,
    details: {
      title: "Fasilkom Prestasi",
      description:
        "Fasilkom Prestasi is a web application that provides information about achievements in the Faculty of Computer Science, University of Jember. The app is built using C#.",
      image: "/images/fasilkom-prestasi.png",
      github: "https://github.com/fireeemaan/",
    },
  },
  {
    id: 3,
    details: {
      title: "Uniplan",
      description:
        "Uniplan is a web application that helps UKM/Ormawa plan their academic schedules. The app is built using React.js.",
      image: "/images/uniplan.png",
      github: "https://github.com/fireeemaan/",
    },
  },
  {
    id: 4,
    details: {
      title: "Portfolio Website",
      description:
        "Portfolio Website is a website that showcases my projects and skills. The website is built using Next.js.",
      image: "/images/portfolio.png",
      github: "https://github.com/fireeemaan/",
    },
  },
];

const Projects = () => {
  return (
    <div>
      <div className="grid 2xl:grid-cols-3 grid-flow-row md:grid-cols-2 items-center justify-center w-full h-full p-52 gap-5">
        <div className="title flex flex-col items-center 2xl:col-span-3 md:col-span-2">
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
            List of Projects I&lsquo;ve created
          </h2>
        </div>
        <CardProject projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
