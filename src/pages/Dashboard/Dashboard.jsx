import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaBloggerB, FaPeopleGroup } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { MdAssignmentAdd } from "react-icons/md";
import { VscGitStashApply } from "react-icons/vsc";

import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Components/hook/useAdmin";
import useAuth from "../../Hook/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  return (
    <div className="flex">
      <div className="w-[380px]"></div>
      <div className="w-[300px] fixed h-screen bg-[#4CCE5B]">
        <h1 className="text-2xl  font-bold text-white p-3 inline-flex gap-1">
          {" "}
          <FaPeopleGroup></FaPeopleGroup> Job SeekerX
        </h1>
        <div className="text-center flex justify-center flex-col gap-3 text-white items-center p-5">
          <img
            className="rounded-full border-4 w-[70px] h-[70px]"
            src={user?.photoURL}
          ></img>
          <h1 className="text-white font-bold ">{user?.displayName}</h1>
        </div>

        <div>
          {isAdmin === "admin" ? (
            <ul className="pl-5  font-bold flex flex-col text-white ">
              <NavLink to="/dashboard/admin">
                <li className="inline-flex gap-2 ">
                  <IoHomeSharp></IoHomeSharp>Admin Home
                </li>
              </NavLink>
              <NavLink to="/dashboard/add-job">
                <li className="inline-flex gap-2 ">
                  <MdAssignmentAdd></MdAssignmentAdd>
                  Add Jobs
                </li>
              </NavLink>
              <NavLink to={`/dashboard/applied-job/${user?.email}`}>
                <li className="inline-flex gap-2 ">
                  <VscGitStashApply />
                  Applied Jobs
                </li>
              </NavLink>
            </ul>
          ) : (
            <ul className="pl-5  font-bold flex flex-col text-white">
              <NavLink>
                <li className="inline-flex gap-2 ">
                  <IoHomeSharp></IoHomeSharp>User Home
                </li>
              </NavLink>
              <NavLink to="/dashboard/add-job">
                <li className="inline-flex gap-2 ">
                  <MdAssignmentAdd></MdAssignmentAdd>
                  Add Jobs
                </li>
              </NavLink>
              <NavLink to="/dashboard/jobs/my-jobs/:email">
                <li className="inline-flex gap-2 ">
                  <BsPersonWorkspace />
                  My Jobs
                </li>
              </NavLink>
            </ul>
          )}
          <div className="px-5 py-3">
            <hr></hr>
          </div>
          <ul className="pl-5  font-bold flex flex-col text-white">
            <NavLink to="/">
              <li className="inline-flex gap-2 ">
                <IoHomeSharp></IoHomeSharp>Home
              </li>
            </NavLink>
            <NavLink to="/all-jobs">
              <li className="inline-flex gap-2 ">
                <BsPersonWorkspace />
                All Jobs
              </li>
            </NavLink>
            <NavLink to="/blog">
              <li className="inline-flex gap-2 ">
                <FaBloggerB></FaBloggerB>
                Blog
              </li>
            </NavLink>
          </ul>
        </div>
      </div>

      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
