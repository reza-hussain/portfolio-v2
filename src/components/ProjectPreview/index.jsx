import React, { useEffect, useRef } from "react";

import ArrowUpRight from "../../assets/icons/ArrowUpRight";
const ProjectPreview = ({ isOpen, onClose }) => {
  const ref = useRef(null);
  const blurRef = useRef(null);

  useEffect(() => {
    let element = ref?.current;
    let blur = blurRef.current;
    if (isOpen) {
      document.body.style.overflow = "hidden";
      blur.style.display = "block";
      element.style.display = "flex";
    } else {
      document.body.style.overflow = "auto";
      blur.style.opacity = "0%";
      element.style.transform = "translateY(170vh)";
    }

    setTimeout(() => {
      if (isOpen) {
        element.style.transform = "translateY(0vh)";
        blur.style.opacity = "100%";
      } else {
        element.style.display = "none";
        blur.style.display = "none";
      }
    }, 300);
  }, [isOpen]);

  return (
    <>
      <div
        onClick={onClose}
        ref={blurRef}
        className={`w-screen h-screen fixed opacity-0 left-0 top-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-lg
             transition-all duration-300 ease-in-out z-50`}
      ></div>
      <div
        ref={ref}
        className={`w-[90vw] z-50 fixed left-0 right-0 bottom-0 mx-auto h-[90vh] bg-themeBlack-dark flex
            justify-center items-center translate-y-[170vh] p-8 rounded-t-3xl transition-all duration-300 ease-in-out `}
      >
        <div className="w-full flex flex-col justify-start items-start h-full">
          <div className="w-full flex justify-between items-center">
            <ArrowUpRight
              onClick={onClose}
              className="-rotate-[135deg] cursor-pointer"
              width={30}
              fill="#55bd8b"
            />
            <h3 className="w-full text-right md:text-xl text-themeGreen-dark">
              Dashboard App
            </h3>
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-center overflow-auto text-[#939191] gap-8">
            <img
              className="w-full md:max-w-[50%] mx-auto rounded-2xl"
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p>
              Zod is a TypeScript-first schema declaration and validation
              library. It allows you to define the shape of your data using a
              schema and validate that data against that schema. It is designed
              to be easy to use, type-safe, and performant—making it a great
              tool for ensuring that the data in your application is valid and
              consistent. Imagine writing less boilerplate code and letting this
              library handle the heavy lifting of data validation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPreview;
