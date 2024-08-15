import React from "react";
import Me from "../../assets/images/me.png";

import Github from "../../assets/icons/Github";
import Gmail from "../../assets/icons/Gmail";
import Instagram from "../../assets/icons/Instagram";
import LinkedIn from "../../assets/icons/LinkedIn";

const About = () => {
  return (
    <div id="about" className="w-full bg-themeBlack-dark container flex-col">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-start items-center py-[50px]">
        <h4 className="w-[80%] xl:w-full text-3xl lg:text-6xl text-themeGreen-light font-bold mb-[100px]">
          Let's talk about me
        </h4>

        <div className="w-full flex justify-between items-stretch text-[#939191]">
          <p className="basis-[28%] text-xl">
            Back in 2020, after seeing Apple’s iMac page, I decided to learn
            front-end development. That’s when I discovered how big the pool was
            and before I knew it, I was swimming my way through developing
            products and websites for various firms. Fast-forward to today, I’ve
            had the privilege to work with a start-up, and a product development
            agency
          </p>
          <p className="basis-[28%] text-xl">
            After freelancing part-time for about a year, I decided to give it
            my 100% and I quit my job. My main focus these days is connecting
            with start-ups and helping them build their products and services. I
            enjoy building things from scratch. It’s my dopamine trigger. Cold
            reach out has been hard but I’m trying my level best to get out
            there and make an impact.
          </p>

          <div className="basis-[28%] text-xl flex flex-col justify-between items-center">
            When I’m not at the computer, I’m usually exploring the city,
            reading, hanging out with my cousins and a cat, or hitting the gym.
            <img src={Me} alt="" className="w-[25%] m-auto" />
          </div>
        </div>
      </div>

      <div className="w-[50%] flex justify-center items-center gap-10 mx-auto">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/reza-hussain"
        >
          <Github width={36} />
        </a>
        <a target="_blank" rel="noreferrer" href="mailto:alirezaa08@gmail.com">
          <Gmail width={36} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/rezdynamics"
        >
          <Instagram width={36} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/arezahussain"
        >
          <LinkedIn width={36} />
        </a>
      </div>
    </div>
  );
};

export default About;
