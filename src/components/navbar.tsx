"use client";

import React, { useState, useEffect } from "react";
import NavButton from "./navbutton";
import { JetBrains_Mono } from "next/font/google";
import { usePathname } from "next/navigation";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setActive("Home");
    } else if (pathname === "/about") {
      setActive("AboutMe");
    } else if (pathname === "/projects") {
      setActive("Projects");
    }
  }, [pathname]);

  const buttonClasses = "p-3 text-md cursor-pointer text-white/50";

  return (
    <div
      className={`${jetbrains.className} nav-container w-full flex flex-row justify-between p-5 items-center absolute`}
    >
      <h1 className="text-2xl text-white">fireeemaan.</h1>
      <div className="nav-button flex flex-row">
        <NavButton setActive={setActive} active={active === "Home"} to="/">
          Home
        </NavButton>
        <NavButton
          setActive={setActive}
          active={active === "AboutMe"}
          to="/about"
        >
          AboutMe
        </NavButton>
        <NavButton
          setActive={setActive}
          active={active === "Projects"}
          to="/projects"
        >
          Projects
        </NavButton>
      </div>
    </div>
  );
};

export default Navbar;
