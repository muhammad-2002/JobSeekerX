import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ApplyJobTable from "./../ApplyJobTable/ApplyJobTable";

const AppliedJobs = () => {
  const data = useLoaderData();
  const [filtered, setFiltered] = useState(data);

  const handleChange = (e) => {
    const category = e.target.value;
    if (category === "") {
      // If no category selected, show all data
      setFiltered(data);
    } else {
      // Filter data based on selected category
      const filteredData = data.filter((d) => d.category === category);
      setFiltered(filteredData);
    }
  };

  return (
    <div className="max-w-screen-6xl my-1 mx-auto md:px-2 px-3">
      <div className="flex justify-center flex-col gap-6 text-[#4CCE5B] items-center mt-9">
        <h1 className="text-3xl font-bold">Applied Jobs</h1>
        <select
          onChange={handleChange}
          className="select flex outline-none focus:outline-none border-[#4CCE5B] focus:border-[#4CCE5B] rounded-md border-2 py-3  select-info w-full max-w-[200px]"
        >
          <option selected value="">
            Category
          </option>
          <option value="On-Site Jobs">On-Site job</option>
          <option value="Remote Jobs">Remote job</option>
          <option value="Hybrid Jobs">Hybrid</option>
          <option value="Part-Time Jobs">Part-Time Jobs</option>
        </select>
      </div>

      <h1 className="text-xl text-[#4CCE5B] mt-8 mb-5 font-bold">
        Total Apply jobs: {data.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table professional-table">
          <thead>
            <tr className="">
              <th className="font-bold text-md text-center">Name</th>
              <th className="font-bold text-md text-center">Email</th>
              <th className="font-bold text-md text-center">Category</th>
              <th className="font-bold text-md text-center">Date</th>
              <th className="font-bold text-md text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td className="text-center" colSpan="5">
                  Applied job not found
                </td>
              </tr>
            ) : (
              filtered.map((applyUser) => (
                <ApplyJobTable
                  key={applyUser._id}
                  applyUser={applyUser}
                ></ApplyJobTable>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;
