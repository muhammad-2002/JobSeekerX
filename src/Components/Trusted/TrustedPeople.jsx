import React from "react";

const TrustedPeople = () => {
  return (
    <div>
      <section className="">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center   justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 relative ">
            <div className=" flex gap-8 relative ">
              <img
                src="https://templates.hibootstrap.com/gable/default/assets/img/home-1/1.jpg"
                alt=""
                className="object-contain w-[50%] "
              />
              <img
                src="https://templates.hibootstrap.com/gable/default/assets/img/home-1/2.jpg"
                alt=""
                className="w-[40%] h-72"
              />
            </div>
            <div className="absolute border-8 bottom-6 right-10 border-[#CCE6CF] flex justify-center items-center bg-[#3CAF4A] px-7 py-5 w-[350px] h-[80px]">
              <h1 className="text-4xl text-white font-bold">100 % Trusted</h1>
            </div>
          </div>
          <div className="flex flex-col justify-center  items-start -mt-14  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-semibold leading-none sm:text-5xl">
              Trusted & Popular Job Portal
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Welcome to our trusted and popular job portal, where your career
              aspirations meet endless opportunities. Whether you're a seasoned
              professional or just starting your journey, discover tailored job
              listings, connect with reputable employers, and take the next step
              towards your dream career
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-[#3CAF4A] dark:text-gray-50"
              >
                Post A Job
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustedPeople;
