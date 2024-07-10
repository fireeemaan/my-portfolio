"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  children: ReactNode;
  active?: boolean;
  setActive?: Function;
  to: string;
}

const NavButton = ({ children, active, setActive, to }: Props) => {
  const handleClick = () => {
    if (setActive) {
      setActive(children);
    }

    Link;
  };

  return (
    <Link href={to}>
      <motion.div
        className="p-3 text-md cursor-pointer text-white/50"
        whileHover="hovered"
        animate={active ? "hovered" : "initial"}
        onClick={handleClick}
      >
        <motion.div
          style={{ display: "inline-block" }}
          variants={{
            hovered: {
              x: -2,
              color: "#22d3ee",
            },
            initial: {
              x: 0,
            },
          }}
        >
          &lt;
        </motion.div>
        <motion.h1
          style={{ display: "inline-block" }}
          variants={{
            hovered: {
              color: "#ffff",
            },
          }}
        >
          {children}
        </motion.h1>{" "}
        {""}
        <motion.div
          style={{ display: "inline-block" }}
          variants={{
            hovered: {
              x: 2,
              color: "#22d3ee",
            },
            initial: {
              x: 0,
            },
          }}
        >
          &#47;&gt;
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default NavButton;
