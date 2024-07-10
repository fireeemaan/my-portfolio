"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { JetBrains_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { Poppins } from "next/font/google";
import Blob from "@/components/blob";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function Home() {
  return (
    <div
      className={`${spacegrotesk.className} text-white/90 flex justify-center items-center h-screen`}
    >
      <Blob />
      <div className="w-[45rem] z-[1]">
        <h1 className="text-[3.8rem] text-left">
          Hi
          <motion.div
            animate={{
              rotate: [0, 4, -2, 0],
            }}
            style={{ display: "inline-block", transformOrigin: "100% 100%" }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          >
            👋
          </motion.div>
          ,
        </h1>
        <h1 className="text-[3.8rem] text-left mb-2">
          I&lsquo;m{" "}
          <span className="font-bold text-white">Firman Ardiansyah</span>
        </h1>
        <p
          className={`${poppins.className} text-[1.1rem] text-left max-w-[46rem] text-white/60`}
        >
          A <span className="text-cyan-400">web development enthusiast</span>{" "}
          with a passion for creating dynamic and user-friendly websites. I
          enjoy working with HTML, CSS, and JavaScript, and I love learning new
          technologies to build innovative web applications.
        </p>
      </div>
    </div>
  );
}
