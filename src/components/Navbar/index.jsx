import React from "react";
import { HashLink } from "react-router-hash-link";

import Close from "../../assets/icons/Close";
import Github from "../../assets/icons/Github";
import Gmail from "../../assets/icons/Gmail";
import Instagram from "../../assets/icons/Instagram";
import LinkedIn from "../../assets/icons/LinkedIn";

import useScreenWidth from "../../hooks/useScreenWidth";

const Navbar = ({ navOpen, setNavOpen }) => {
  const screenWidth = useScreenWidth();

  const isMobile = screenWidth < 768;
  const links = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "About",
      link: "#about",
    },
  ];

  return (
    <div
      className={`w-full md:w-[45vw] p-10 md:pr-24 z-[200] fixed flex flex-col justify-center items-center gap-10 left-0 top-0 bg-themeGreen-dark h-screen transition-all duration-500 ease-in-out ${
        navOpen ? "translate-x-0" : "-translate-x-[800px]"
      }`}
    >
      <span className="absolute top-6 left-6 md:left-8 md:top-10 cursor-pointer">
        <Close
          onClick={() => setNavOpen(!navOpen)}
          width={isMobile ? 16 : 32}
          height={isMobile ? 16 : 32}
          fill="#1c1d1d"
        />
      </span>
      {links.map((link) => (
        <HashLink
          onClick={() => setNavOpen(false)}
          to={link.link}
          smooth
          key={link.link}
          className={`w-full cursor-pointer text-right text-4xl md:text-5xl font-bold text-themeBlack-dark hover:text-themeGreen-light transition-all duration-300 ease-in-out `}
        >
          {link.name}
        </HashLink>
      ))}

      <div className="w-[50%] flex justify-center items-center gap-10 absolute bottom-16 mx-auto ">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/reza-hussain"
        >
          <Github
            fill="#1c1d1d"
            className="cursor-pointer"
            width={isMobile ? 16 : 24}
          />
        </a>
        <a target="_blank" rel="noreferrer" href="mailto:alirezaa08@gmail.com">
          <Gmail
            fill="#1c1d1d"
            className="cursor-pointer"
            width={isMobile ? 16 : 24}
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/rezdynamics"
        >
          <Instagram
            fill="#1c1d1d"
            className="cursor-pointer"
            width={isMobile ? 16 : 24}
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/arezahussain"
        >
          <LinkedIn
            fill="#1c1d1d"
            className="cursor-pointer"
            width={isMobile ? 16 : 24}
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
