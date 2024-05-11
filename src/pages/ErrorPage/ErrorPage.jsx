import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import animationData from "../../../Animation - 1714455457019.json";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen sm:p-16  dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-3 text-center  sm:max-w-md">
        <div className="w-[70%]">
          <Lottie animationData={animationData} />
        </div>
        <p className="text-3xl">
          Looks like our services are currently offline
        </p>
        <Link
          to="/"
          className="px-8 py-3 rounded dark:bg-[#4FC153] dark:text-gray-50 font-bold"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
