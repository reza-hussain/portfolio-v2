import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

import FistBump from "../../assets/images/fistbump.png";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [user, setUser] = useState(uuid());
  const [disabled, setDisabled] = useState(false);

  const likeRef = useRef();

  const getLikes = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_MONGO_URI}/likes`
    );
    return response?.data?.likes;
  };

  // This function basically reads from the localstorage and checks
  // whether the user has already liked. If he has, then it sets the state

  const hasUserLiked = JSON.parse(localStorage.getItem("like"));

  const addLike = async () => {
    if (hasUserLiked) {
      // If the user has already liked, then the like gets removed

      const response = await axios.delete(
        `${process.env.REACT_APP_MONGO_URI}/likes`,
        { userId: user }
      );
      return response?.data;
    } else {
      // If user has not liked then add like
      const response = await axios.post(
        `${process.env.REACT_APP_MONGO_URI}/likes`,
        { userId: user }
      );

      return response?.data;
    }
  };

  const handleClick = async () => {
    setIsLiked(true);
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 7000);
    setDisabled(true);

    const response = disabled ? await addLike() : null;

    if (response) {
      setDisabled(false);
    }
  };

  useEffect(() => {
    hasUserLiked ? setIsLiked(true) : setIsLiked(false);

    getLikes();
  }, []);

  return (
    <>
      {showAnimation && (
        <span>
          <img
            src={FistBump}
            alt=""
            className="w-[50px] h-[50px] object-cover scale-75 floatingButton absolute right-16 bottom-10 transition-all duration-300 ease-in-out"
          />
        </span>
      )}

      <div
        ref={likeRef}
        onClick={handleClick}
        className={`fixed right-10 bottom-10 w-[75px] h-[75px] xl:w-[100px] xl:h-[100px] bg-themeBlack-light group hover:bg-themeGreen-dark flex 
    justify-center items-center rounded-full overflow-hidden cursor-pointer z-[200] transition-all duration-300 ease-in-out
    `}
      >
        <img
          src={FistBump}
          alt="fistbump.png"
          className="w-full h-full object-cover scale-75 group-hover:scale-100 transition-all duration-300 ease-in-out"
        />
      </div>
    </>
  );
};

export default LikeButton;
