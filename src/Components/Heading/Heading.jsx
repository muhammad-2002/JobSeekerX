import React from "react";

const Heading = ({ heading, description }) => {
  return (
    <div className="my-7 space-y-5 w-[75%] mx-auto text-center">
      <h1 className="text-4xl font-bold">{heading}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Heading;
