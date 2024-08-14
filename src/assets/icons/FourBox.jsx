import React from "react";

const FourBox = ({ ...rest }) => {
  return (
    <svg
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M119.566 59.7216V0H59.844V59.7216H119.566ZM59.7216 119.565V59.8438H1.30526e-06L0 119.565H59.7216ZM179.409 59.8438V119.565H119.688V59.8438H179.409ZM119.565 179.409V119.688H59.8439V179.409H119.565Z"
        fill="#1C1D1D"
      />
    </svg>
  );
};

export default FourBox;
