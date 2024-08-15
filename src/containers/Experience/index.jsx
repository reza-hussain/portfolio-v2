import React from "react";

import ArrowUpRight from "../../assets/icons/ArrowUpRight";

import SB from "../../assets/images/sb.png";
import GHM from "../../assets/images/ghm.png";

const experinceData = [
  {
    id: "sb",
    name: "Sketch Brahma Technologies",
    role: "Product Developer",
    description: [
      {
        id: 0,
        content:
          "Served as a project lead, ensuring timely and successful product delivery with a dedicated team",
      },
      {
        id: 1,
        content:
          "Managed projects for key clients, ensuring satisfaction and repeat business opportunities.",
      },
      {
        id: 2,
        content:
          "Developed highly scalable products, converting Figma designs to code, implementing responsive UIs, and deploying applications.",
      },
      {
        id: 3,
        content:
          "Secured a crucial project by showcasing superior code quality and performance.",
      },
    ],
    logo: SB,
    period: "March 2023 - April 2024",
    link: "https://sketchbrahma.com/",
  },
  {
    id: "ghm",
    name: "Gear Head Motors",
    role: "MERN Stack Developer",
    description: [
      {
        id: 0,
        content:
          "Lead the development of dashboard applications, managing end-to-end responsibilities of frontend and backend using React.js and Node.js with Express.",
      },
      {
        id: 1,
        content:
          "Developed real-time chat applications leveraging socket technology, enhancing user engagement and experience.",
      },
      {
        id: 2,
        content:
          "Contributed to revenue growth by delivering two successful projects that met client requirements and exceeded expectations.",
      },
      {
        id: 3,
        content:
          "Actively engaged in continuous learning and skill improvement, focusing on React.js and Node.js to stay updated with the latest technologies and best practices.",
      },
      {
        id: 4,
        content:
          "Collaborated effectively with cross-functional teams to ensure seamless project delivery and achieve business objectives.",
      },
    ],
    logo: GHM,
    period: "Jan 2022 - Jan 2023",
    link: "https://www.ghmev.com/",
  },
];

const Experience = () => {
  return (
    <div id="experience" className="w-full bg-themeBlack-dark container">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-start items-center py-[50px]">
        <h4 className="w-[80%] xl:w-full text-3xl lg:text-6xl text-themeGreen-light font-bold mb-[100px]">
          Experience
        </h4>

        <div className="w-full flex flex-col justify-start items-center gap-40">
          {experinceData?.map((item, idx) => (
            <div
              key={item.id}
              className={`w-full flex justify-between items-stretch ${
                idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-full basis-1/2 flex flex-col gap-4 justify-start items-center">
                <h4 className="w-full text-right text-lg text-[#939191]">
                  {item.period}
                </h4>
                <h3 className="w-full text-right text-themeGreen-dark text-4xl mb-10 font-bold">
                  {item.role}
                </h3>

                <ul className="w-full flex flex-col justify-start items-start gap-5">
                  {item.description.map((data) => (
                    <li key={data.id} className="text-lg text-[#939191]">
                      {data.content}
                    </li>
                  ))}
                </ul>

                <div className="w-full flex justify-between items-center">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <ArrowUpRight width={24} />
                  </a>
                  <h4 className="text-2xl text-themeGreen-dark font-medium">
                    {item.name}
                  </h4>
                </div>
              </div>

              <div className="w-full basis-[40%] rounded-2xl bg-themeGreen-light flex justify-center items-center">
                <img className="w-1/2" src={item.logo} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
