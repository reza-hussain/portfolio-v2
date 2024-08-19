import React, { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import ProjectPreview from "../../components/ProjectPreview";

import useScreenWidth from "../../hooks/useScreenWidth";
import { projects } from "../../constants/projects";

import "@splidejs/react-splide/css";

const Projects = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [openProject, setOpenProject] = useState(undefined);

  const screenWidth = useScreenWidth();

  const isWeb = screenWidth > 1024;

  const splideOptions = {
    perPage: 1,
    drag: true,
    pagination: false,
    type: "loop",
    gap: 20,
    arrows: false,
    autoplay: true,
    interval: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
    <div id="projects" className="w-full bg-themeGreen-light">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-start items-center py-[50px]">
        <h4 className="w-[80%] xl:w-full text-3xl lg:text-6xl text-themeBlack-light font-bold  mb-14 md:mb-[100px]">
          Projects
        </h4>
        <div className="w-[80%] xl:w-full relative flex flex-col-reverse xl:flex-row justify-between items-stretch gap-6">
          <div className="w-full basis-[40%] flex xl:flex-col justify-start items-center gap-6 xl:gap-6">
            {isWeb ? (
              projects.map((item, idx) => (
                <>
                  <ProjectItem
                    project={item}
                    key={idx}
                    isActive={activeItem === idx}
                    setActiveItem={() => setActiveItem(idx)}
                    next={() =>
                      setActiveItem(
                        activeItem >= projects?.length - 1 ? 0 : activeItem + 1
                      )
                    }
                    toggleProject={() => setOpenProject(idx)}
                  />
                  <ProjectPreview
                    isOpen={openProject === idx}
                    onClose={() => setOpenProject(undefined)}
                    project={projects[openProject]}
                  />
                </>
              ))
            ) : (
              <>
                <Splide
                  className="max-w-full rounded-3xl overflow-hidden p-3 md:p-5"
                  options={splideOptions}
                  onMove={(_, active) => setActiveItem(active)}
                >
                  {projects.map((item, idx) => (
                    <>
                      <SplideSlide>
                        <ProjectItem
                          project={item}
                          key={idx}
                          isActive={activeItem === idx}
                          setActiveItem={() => setActiveItem(idx)}
                          next={() =>
                            setActiveItem(activeItem >= 3 ? 0 : activeItem + 1)
                          }
                          toggleProject={() => setOpenProject(idx)}
                        />
                      </SplideSlide>
                    </>
                  ))}
                </Splide>
                <ProjectPreview
                  project={projects[openProject]}
                  isOpen={openProject >= 0}
                  onClose={() => setOpenProject(undefined)}
                />
              </>
            )}
          </div>

          {isWeb && (
            <div className="w-full basis-[45%] bg-themeGreen-dark rounded-2xl overflow-hidden">
              <img
                src={projects[activeItem]?.img}
                className="h-[600px] w-full object-cover"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

const ProjectItem = ({
  project,
  isActive,
  setActiveItem,
  next,
  toggleProject,
}) => {
  const parentRef = useRef();
  const headerRef = useRef();

  const [height, setHeight] = useState(0);

  const screenWidth = useScreenWidth();

  const isWeb = screenWidth > 1024;

  useEffect(() => {
    const parent = parentRef.current;
    const header = headerRef.current;

    isActive
      ? setHeight(parent.scrollHeight + 10)
      : setHeight(header.clientHeight);

    const timeout = setTimeout(() => {
      next();
    }, 4000);

    if (!isActive) {
      clearTimeout(timeout);
    }

    return () => {
      clearTimeout(timeout);
    };

    // eslint-disable-next-line
  }, [isActive]);

  return (
    <>
      {!isWeb && (
        <div className="w-full basis-[45%] bg-themeGreen-dark rounded-2xl overflow-hidden mb-5">
          <img
            src={project?.img}
            className="h-[300px] w-full object-cover"
            alt=""
          />
        </div>
      )}
      <div
        ref={parentRef}
        className={`w-full relative cursor-pointer flex flex-col justify-start items-start gap-10 transition-all duration-300 ease-linear lg:overflow-x-visible  xl:overflow-hidden`}
        style={isWeb ? { height: height } : { height: "auto" }}
        onClick={setActiveItem}
      >
        <h3
          ref={headerRef}
          style={{ height: isWeb ? headerRef?.current?.clientHeight : "auto" }}
          className={` text-xl xl:text-3xl font-bold transition-all duration-300 ease-in-out  ${
            isActive ? "text-themeBlack-dark" : "text-[#585656]"
          }`}
        >
          {project.name}
        </h3>
        <p
          className={`transition-all duration-300 ease-in-out flex-grow  ${
            isActive ? "opacity-100 h-auto" : "h-auto xl:opacity-0 xl:h-0"
          }`}
        >
          {project.slug}
        </p>

        <div className="w-full flex flex-col justify-end items-start gap-4">
          <button
            className={` right-0 bottom-0 buttonBorder ${
              isActive ? "xl:visible" : "xl:hidden"
            }`}
            onClick={toggleProject}
          >
            Read More
          </button>

          <span
            className={` mt-auto transition-all duration-300 ease-in-out  ${
              isActive ? "progressLine" : ""
            }`}
          ></span>
        </div>
      </div>
    </>
  );
};
