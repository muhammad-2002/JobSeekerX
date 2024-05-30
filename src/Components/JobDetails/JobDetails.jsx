import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";

// import logo from "../assets/e3.png"

const JobDetail = () => {
  const { user } = useAuth();
  const par = useParams();
  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API}/jobs/${par.id}`,
      { withCredentials: true }
    );

    return data;
  };
  const [showModal, setShowModal] = useState(false);
  const { data: data = [], refetch } = useQuery({
    queryFn: () => getData(),
    queryKey: ["job-details"],
  });

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
    userEmail,
  } = data || {};

  const mlliSecond = new Date(application_deadline).getTime();

  const handelApplyJobs = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = user.displayName;
    const email = user.email;
    const resume = form.cv.value;
    const currentDate = new Date().toDateString();

    const formAppliedData = { name, email, category, resume, currentDate };

    const { data } = await axios.post(
      `${import.meta.env.VITE_API}/apply-job`,
      formAppliedData
    );
    try {
      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Wow! Applied successfully .",
        });
        setShowModal(false);

        await axios
          .patch(`${import.meta.env.VITE_API}/apply-job`, {
            _id,
            applicants_number,
          })
          .then((response) => {
            console.log(response.data.modifiedCount);
            if (response.data.modifiedCount > 0) {
              refetch();
            }
          });

        //UI Reload
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while adding the jobs.",
      });
    }

    setShowModal(false);
  };
  const handleModal = () => {
    if (userEmail === user.email) {
      return toast.warn("You don't apply This Job..", {
        position: "top-right",
        theme: "dark",
      });
    }
    setShowModal(!showModal);
  };

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
              <button
                onClick={handleModal}
                className="bg-[#4CCE5B] py-2 px-14 rounded font-semibold text-white"
              >
                Apply Now
              </button>
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
            Applicant No:
            <span className="bg-yellow-500 font-bold p-1 rounded-full text-black">
              {applicants_number}
            </span>{" "}
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
      {showModal && (
        <div className="fixed inset-0 flex items-center mt-8 justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg p-8 z-10 relative">
            <h2 className="text-xl font-semibold mb-4">
              Apply for {job_title}
            </h2>
            <form onSubmit={handelApplyJobs}>
              <div className="relative bg-white bg-opacity-50 rounded-lg p-4 mb-4">
                {/* Dark background below the form tag */}
                <input
                  type="text"
                  value={user.displayName}
                  placeholder="Your Name"
                  className="w-full border rounded-lg px-4 py-2"
                />
                <input
                  type="email"
                  value={user.email}
                  placeholder="Your Email"
                  className="w-full border rounded-lg px-4 py-2 mt-2"
                />
                <input
                  type="text"
                  name="cv"
                  placeholder="Your resume link"
                  className="w-full border rounded-lg px-4 mt-2 py-2"
                />
              </div>
              <input
                type="submit"
                className="px-6 py-2 rounded-md bg-[#4CCE5B] text-white font-bold"
                value="Submit"
              ></input>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetail;
