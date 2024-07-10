import React from "react";
import { motion } from "framer-motion";

interface Animation {
  rotate?: number[];
  scale?: number[];
  x?: number[];
  y?: number[];
}

const Blob = () => {
  const generateAnimation = () => {
    const rotateArr = Array.from({ length: 8 }, () =>
      Math.floor(Math.random() * 360)
    );
    const scaleArr = Array.from({ length: 8 }, () => Math.random() * 0.25 + 1);
    const xArr = Array.from({ length: 8 }, () =>
      Math.floor(Math.random() * 18)
    );
    const yArr = Array.from({ length: 8 }, () =>
      Math.floor(Math.random() * 18)
    );
    const animation: Animation = {
      rotate: rotateArr,
      scale: scaleArr,
      x: xArr,
      y: yArr,
    };
    return animation;
  };

  return (
    <div className="absolute right-28 top-40 2xl:right-96 2xl:top-60">
      <div className="absolute right-0 z-0">
        {/* opacity-50 blur-3xl */}
        <motion.div
          className="size-72 2xl:size-96 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full opacity-15 blur-2xl"
          animate={generateAnimation()}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
        />
      </div>
      <div className="absolute right-24 z-0">
        {/* opacity-50 blur-3xl */}
        <motion.div
          className="size-72 bg-gradient-to-b from-pink-600 to-blue-600 rounded-full opacity-25 blur-2xl"
          animate={generateAnimation()}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
        />
      </div>
    </div>
  );
};

export default Blob;
