import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import JobTable from "./../JobTable/JobTable";

const AllJobs = () => {
  const [search, setSearch] = useState("");
  // console.log(search);
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="w-full mx-auto md:px-2 ">
      {/* dynamic title  */}

      <div className="md:flex md:justify-between  md:items-center justify-center items-center mt-10 mb-2">
        <h1 className="text-2xl  font-bold ">All Posted jobs: {data.length}</h1>
        <div className="flex items-center justify-center py-2">
          <button className=" rounded-l-md px-4 py-1 br outline-none bg-[#4CCE5B] transition-all delay-75  text-white flex justify-center items-center">
            <BsSearch className="text-white "></BsSearch>
          </button>
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="br rounded-r-md  px-2 lg:pr-96 md:pr-60 pr-0 outline-none"
            placeholder="Job search here"
            type="text"
          />
          {/* <div className="border-gray-500 border-2 flex items-center justify-center p-2 rounded-full">

                    </div> */}
        </div>
      </div>
      {/* tabular form  */}
      <div className="overflow-x-auto min-h-[calc(100vh-437px)]">
        <table className="table w-full  professional-table">
          {/* head */}
          <thead>
            <tr>
              <th className="font-bold text-md">Company Logo</th>
              <th className="font-bold text-md">Job Posted Name</th>
              <th className="font-bold text-md">Job Title</th>
              <th className="font-bold text-md">Job Posted Date</th>
              <th className="font-bold text-md">Applicant Deadline</th>
              <th className="font-bold text-md">Salary Range</th>
              <th className="font-bold text-md">Action</th>
            </tr>
          </thead>
          {data.length === 0 ? (
            <div>
              <h1 className="text-center text-2xl">No job found </h1>
            </div>
          ) : (
            data
              ?.filter((item) => {
                return search.toLocaleLowerCase() === ""
                  ? item
                  : item.job_title
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase());
              })
              ?.map((job) => <JobTable key={job._id} job={job}></JobTable>)
          )}
        </table>
      </div>
    </div>
  );
};

export default AllJobs;
