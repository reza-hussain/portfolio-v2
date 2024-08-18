import React, { Fragment } from "react";

// assets
import Profile from "../../assets/images/profile.png";
import StarPolygon from "../../assets/icons/StarPolygon";
import TwoCircleArrow from "../../assets/icons/TwoCircleArrow";
import Hamburger from "../../assets/icons/Hamburger";

const paragraph =
  "Place your trust in me to provide a efficient, user-friendly and robust development experience";

const Landing = ({ setNavOpen }) => {
  const elements = paragraph.split(" ").map((word, idx) => {
    if (idx === 3)
      return (
        <Fragment key={idx}>
          <span>
            <StarPolygon />
          </span>
          <span>{word}</span>
        </Fragment>
      );

    if (idx === 12)
      return (
        <Fragment key={idx}>
          <span>
            <TwoCircleArrow />
          </span>
          <span>{word}</span>
        </Fragment>
      );

    return <span key={idx}>{word}</span>;
  });

  return (
    <div
      id="home"
      className="w-[80%] xl:w-full mx-auto flex flex-col-reverse xl:flex-row pt-[30px] xl:py-[50px] justify-center items-center bg-themeBlack-dark max-h-screen h-screen text-themeWhite"
    >
      {/* LEFT SECTION */}

      <span
        onClick={() => setNavOpen(true)}
        className="fixed top-0 left-4 md:left-6 md:top-8 cursor-pointer z-50"
      >
        <Hamburger className=" w-[24px] lg:w-[50px]" />
      </span>

      <div className="w-full xl:basis-[50%] flex flex-col justify-center md:justify-start items-start md:pl-20 md:mb-0 mb-14">
        <h4 className="w-full xl:w-auto text-themeGreen-light text-[18px] lg:text-[36px]">
          Reza Hussain
        </h4>
        <div className="w-full lg:flex flex-wrap md:gap-2 xl:block lg:w-auto text-themeWhite text-[32px] md:text-[40px] lg:text-[72px] font-bold leading-[50px] lg:leading-[90px]">
          <p>Freelance</p>

          <p> Product</p>

          <p>Developer</p>
        </div>
        <div className="w-full lg:w-[68%] mt-6 flex flex-wrap justify-start items-center gap-3 lg:text-[24px] font-light">
          {elements}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="relative w-full md:p-8 flex justify-center items-center md:basis-[50%] h-full">
        <img src={Profile} alt="" className="lg:w-[80%] z-10" />
      </div>
    </div>
  );
};

export default Landing;
