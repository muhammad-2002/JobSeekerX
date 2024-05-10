import React from "react";
import { Link } from "react-router-dom";

const HeaderBanner = ({ heading }) => {
  return (
    <div className="bg-[#4CCE5B] space-y-3 h-72 flex justify-center   w-full flex-col items-center text-4xl font-bold">
      <h1 className="text-white">{heading}</h1>
      <p className="text-sm text-white">
        <Link to="/" className="hover:text-black">
          Home{" "}
        </Link>{" "}
        <span>{">"} </span> {heading}
      </p>
    </div>
  );
};

export default HeaderBanner;
