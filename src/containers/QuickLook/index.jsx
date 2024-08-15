import React from "react";
import Bento from "../../assets/icons/Bento";

const QuickLook = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center bg-themeBlack-dark container">
      <h4 className="w-[80%] xl:w-full text-3xl lg:text-6xl text-themeGreen-light font-bold mb-[50px] md:mb-[100px]">
        A Quick Look
      </h4>
      <Bento className=" w-[90%] md:w-[80%] xl:w-full h-fit" />
    </div>
  );
};

export default QuickLook;
