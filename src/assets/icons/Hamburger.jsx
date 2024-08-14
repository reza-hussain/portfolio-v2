import React from "react";

const Hamburger = ({ ...rest }) => {
  return (
    <svg
      width="94"
      height="94"
      viewBox="0 0 94 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M19.5834 27.4167H74.4167"
        stroke="#55BD8B"
        strokeWidth="7.83333"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M19.5834 47H74.4167"
        stroke="#55BD8B"
        strokeWidth="7.83333"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M19.5834 66.5833H47"
        stroke="#55BD8B"
        strokeWidth="7.83333"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Hamburger;
