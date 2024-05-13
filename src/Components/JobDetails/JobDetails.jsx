import { Link, useLoaderData } from "react-router-dom";

// import logo from "../assets/e3.png"

const JobDetail = () => {
  const dynamicTitle = "Job Details";
  const data = useLoaderData();
  console.log(data);
  const {
    _id,
    salary_range,
    category,
    posted_by,
    posting_date,
    application_deadline,
    applicants_number,
    job_title,
    company_logo,
    banner_img,
    job_des,
  } = data || {};

  return (
    <div className="w-full mx-auto ">
      <div className="w-full  h-[300px] text-white  relative ">
        <div className="bg-black absolute opacity-50 inset-0"></div>
        <img
          className="w-full h-full inset-0 object-cover "
          src={banner_img}
        ></img>
        <div className="absolute inset-0 flex justify-center items-center flex-col space-y-3 ">
          <h1 className="text-5xl font-bold ">We Are Hiring !</h1>
          <h2 className="text-2xl">{job_title}</h2>
        </div>
      </div>

      {/* main part  */}
      <div className="grid md:grid-cols-5 grid-cols-1 px-3 my-6 gap-4">
        <div className="md:col-span-3 p-4">
          <div className="md:flex justify-between items-center py-4">
            <div className="flex justify-center items-center gap-4 ">
              <img className="w-[100px]" src={company_logo} alt="" />
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold">{job_title}</h1>
                <h1 className="text-[15px] font-semibold"> {posting_date}</h1>
                <h1>Posted by {posted_by}</h1>
              </div>
            </div>
            <div className="text-end space-y-2">
              <Link
                to={`/v1/applied/${_id}`}
                className="bg-[#4CCE5B] py-2 px-14 rounded font-semibold text-white"
              >
                Apply Now
              </Link>
              <h1 className="text-black font-bold">
                {" "}
                <span className="text-red-400 py-1 px-3 rounded-md">
                  Deadline Date:
                </span>{" "}
                {application_deadline}{" "}
              </h1>
              <h1 className="text-[15px] font-semibold">
                {salary_range}/month{" "}
              </h1>
            </div>
          </div>

          {/* job des */}
          <hr />
          <h1 className="text-2xl font-semibold mt-5">Job Description</h1>
          <p className="text-justify">{job_des || "no description"}</p>
        </div>
        <div className="md:col-span-2 mt-8 rounded border bg-[#F5F5F5] p-10 space-y-2">
          <h1 className="text-2xl font-semibold mt-5">Job Information</h1>
          <hr />
          <h1 className="text-md font-medium text-gray-500">
            Applicant No: 0000{applicants_number}{" "}
          </h1>
          <hr />
          <h1 className="text-md font-medium text-gray-500">
            Date Posted: {posting_date}{" "}
          </h1>
          <hr />
          <h1 className="text-md font-medium text-gray-500">
            Category: {category}{" "}
          </h1>
          <hr />
          <h1 className="text-md font-medium text-gray-500">
            Offered Salary:{salary_range}{" "}
          </h1>
          <hr />
          <h1 className="text-md font-medium text-gray-500">
            Expiration Date: {application_deadline}{" "}
          </h1>
          <hr />
          <h1 className="text-md font-medium text-gray-500">
            Experience: 1 Year{" "}
          </h1>
          <hr />
          <h1 className="text-md font-medium text-gray-500">
            Qualification: Certificate{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
