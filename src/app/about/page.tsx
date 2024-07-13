"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { JetBrains_Mono } from "next/font/google";
import { motion } from "framer-motion";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen p-52">
      <div className="grid grid-flow-row md:grid-cols-3 items-center gap-14 bg-red-50/5xx">
        <div className="description flex flex-col gap-4 col-span-2">
          <div className="w-full flex flex-row items-center gap-3">
            <h1
              className={`${jetbrains.className} text-white text-3xl font-bold`}
            >
              About Me
            </h1>
            <motion.div
              animate={{
                width: ["0%", "50%"],
              }}
              className="h-[1px] bg-white/50"
            ></motion.div>
          </div>
          <p className="text-white">
            I am currently a fourth-semester student majoring in Information
            Systems at the University of Jember. As a web development
            enthusiast, I am passionate about creating innovative and
            user-friendly digital solutions. To further enhance my skills, I am
            currently delving into NextJS, a powerful React framework for
            building modern web applications. My goal is to combine my academic
            knowledge with practical experience to become a proficient web
            developer and contribute to the ever-evolving field of information
            technology.
          </p>
        </div>

        <div className="flex w-full h-full items-center justify-end hover:bg-white/5">
          <motion.div
            whileHover={{
              scale: 1.012,
            }}
          >
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={250}
              height={250}
              className="rounded-sm grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
