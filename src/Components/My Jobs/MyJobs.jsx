import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Swal from "sweetalert2";
import MyJobsTable from "../MyJobsTable/MyJobsTable";
import UseAxiosSecure from "../hook/UseAxiosSecure";
import useAuth from "./../../Hook/useAuth";

const MyJobs = () => {
  const axiosSecure = UseAxiosSecure();
  const [search, setSearch] = useState("");
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const {
    data: data = [],
    isLoading,
    refetch,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["my-jobs", user?.email],
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API}/jobs/${id}`
      );

      console.log(data);
    },
    onSuccess: () => {
      // refetch();
      queryClient.invalidateQueries({ queryKey: ["my-jobs"] });
    },
  });
  const getData = async () => {
    const { data } = await axios.get(`/my-jobs/${user?.email}`);
    console.log(data);
    console.log(isLoading);
    return data;
  };

  const handleDelete = async (id) => {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    // If user confirms deletion
    if (result.isConfirmed) {
      // Proceed with deletion
      await mutateAsync(id);

      // Show success message
      Swal.fire("Deleted!", "Your data has been deleted.", "success");
    }
  };

  if (error) {
    console.log(error);
  }

  if (isLoading)
    return (
      <div className=" flex justify-center items-center h-screen w-full bg-[#4CCE5B]">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white"></div>
        </div>
      </div>
    );
  return (
    <div className="min-h-[calc(100vh-437px)]">
      <div className="w-full mx-auto md:px-2 ">
        {/* dynamic title  */}

        <div className="md:flex md:justify-between  md:items-center justify-center items-center mt-10 mb-2">
          <h1 className="text-2xl  font-bold ">
            My Posted jobs: {data?.length}
          </h1>
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
          <table className="table w-full justify-center  professional-table">
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
                ?.map((job) => (
                  <MyJobsTable
                    handleDelete={handleDelete}
                    key={job._id}
                    job={job}
                  ></MyJobsTable>
                ))
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyJobs;
