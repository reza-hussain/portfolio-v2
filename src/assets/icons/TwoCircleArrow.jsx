import React from "react";

const TwoCircleArrow = ({ ...rest }) => {
  return (
    <svg
      width="42"
      height="28"
      viewBox="0 0 42 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="13.8016" cy="14.1666" r="13.8016" fill="#C0E4E0" />
      <circle cx="27.9761" cy="14.1666" r="13.8016" fill="#55BD8B" />
      <path
        d="M24.3869 18.4135L33.7151 9.08532M33.7151 9.08532L33.7151 16.0814M33.7151 9.08532L26.719 9.08532"
        stroke="#C0E4E0"
        strokeWidth="1.52215"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TwoCircleArrow;
