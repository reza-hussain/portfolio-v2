import React from "react";

// assets
import Profile from "../../assets/images/profile.png";
import StarPolygon from "../../assets/icons/StarPolygon";
import TwoCircleArrow from "../../assets/icons/TwoCircleArrow";
import Hamburger from "../../assets/icons/Hamburger";

const paragraph =
  "Place your trust in me to provide a seamless and hassle-free development experience";

const Landing = () => {
  const elements = paragraph.split(" ").map((word, idx) => {
    if (idx === 3)
      return (
        <>
          <span>
            <StarPolygon />
          </span>
          <span>{word}</span>
        </>
      );

    if (idx === 11)
      return (
        <>
          <span>
            <TwoCircleArrow />
          </span>
          <span>{word}</span>
        </>
      );

    return <span>{word}</span>;
  });

  return (
    <div className="w-full flex py-[50px] justify-center items-center bg-themeBlack-dark max-h-screen h-screen text-themeWhite">
      {/* LEFT SECTION */}

      <span className="absolute left-6 top-4 cursor-pointer">
        <Hamburger className="w-[50px]" />
      </span>

      <div className="w-full basis-[50%] flex flex-col justify-start items-start pl-28">
        <h4 className="text-themeGreen-light text-[36px]">Reza Hussain</h4>
        <h3 className="text-themeWhite text-[72px] font-bold leading-[90px]">
          Freelance
          <br />
          Product
          <br />
          Developer
        </h3>
        <div className="w-[62%]  mt-6 flex flex-wrap justify-start items-center gap-3 text-[24px] font-light">
          {elements}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="relative w-full p-8 flex justify-center items-center basis-[50%] h-full">
        <img src={Profile} alt="" className="w-[80%] z-10" />
      </div>
    </div>
  );
};

export default Landing;
