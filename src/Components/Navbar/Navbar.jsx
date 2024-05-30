import { useEffect, useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { VscThreeBars } from "react-icons/vsc";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAuth from "../../Hook/useAuth";
import useAdmin from "../hook/useAdmin";
const Navbar = () => {
  const [sideOpen, setSideOpen] = useState(true);
  const [userOpen, setUserOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logOutUser } = useAuth();
  const [admin] = useAdmin();
  // const [openUser, setOpen] = useState(false);

  const savedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(savedTheme);

  const handleTheme = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  useEffect(() => {
    // Store the current theme preference in localStorage
    localStorage.setItem("theme", theme);
    // Set the theme on the document element to apply styles
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const handleLogOut = async () => {
    setUserOpen(false);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "You are Successfully Log Out",
      showConfirmButton: false,
      timer: 2000,
    });
    logOutUser();
  };
  return (
    <div className="md:max-w-[1920px] w-full mx-auto fixed rale-way z-50">
      <header className="bg-white shadow-lg  flex w-full  px-5 md:px-[50px] lg:px-[80px] xl:px-[120px] 2xl:px-[150px] md:py-6 py-3 ">
        {/* start */}
        <Link to="/" className=" flex flex-shrink-0 items-center  gap-4">
          <p className="text-3xl text-[#4CCE5B]">
            <FaPeopleGroup />
          </p>

          <h1 className="font-bold text-xl md:text-3xl ">
            JobSeeker<span className="text-[#4CCE5B]">X</span>
          </h1>
        </Link>
        {/* middle */}
        <nav className="header-links md:contents font-medium text-base   hidden ">
          <ul className="flex gap-8 items-center justify-end  ml-4 xl:ml-8 mr-auto w-full  dark:text-black">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#4CCE5B] text-bold border-b-4 border-[#4CCE5B]"
                    : "hover:text-[#4CCE5B]"
                }
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-jobs"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#4CCE5B] text-bold border-b-4 border-[#4CCE5B]"
                    : "hover:text-[#4CCE5B]"
                }
              >
                <span>All Jobs</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#4CCE5B] border-b-4 border-[#4CCE5B]"
                    : "hover:text-[#4CCE5B]"
                }
              >
                <span>Blog</span>
              </NavLink>
            </li>

            {user && !admin && (
              <li>
                <NavLink
                  to={`/dashboard`}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#4CCE5B] border-b-4 border-[#4CCE5B]"
                      : "hover:text-[#4CCE5B]"
                  }
                >
                  <span>Dashboard</span>
                </NavLink>
              </li>
            )}

            {user && admin && (
              <li>
                <NavLink
                  to={`/dashboard/admin`}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#4CCE5B] border-b-4 border-[#4CCE5B]"
                      : "hover:text-[#4CCE5B]"
                  }
                >
                  <span>Dashboard</span>
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        {/* End */}
        <div className="relative  flex items-center  gap-3 justify-end w-full md:w-[100px] lg:w-[400px] md:pl-5 pl-0 ">
          {/* theme */}
          <div className=" w-[50px] ">
            <label className="cursor-pointer grid place-items-center">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={handleTheme}
                className="toggle theme-controller bg-[#4CCE5B] hover:bg-[bg-[#4CCE5B] row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1  stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
          <div>
            {user ? (
              <button
                onMouseEnter={() => setUserOpen(!userOpen)}
                className="border-2 border-[#4CCE5B]  rounded-full w-[40px]"
              >
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-[#4CCE5B] md:inline-flex hidden justify-center items-center gap-2 hover:bg-[#4CCE5B]  duration-200 text-white font-bold px-2 xl:px-6 py-1 rounded"
              >
                Login
              </button>
            )}
          </div>

          {/* {user && (
            <button
              onMouseEnter={() => setUserOpen(!userOpen)}
              className="border-2 border-[#4CCE5B]  rounded-full w-[40px]"
            >
              <img
                src={user?.photoURL}
                alt=""
                className="w-full h-full rounded-full"
              />
            </button>
          )} */}

          {/* <Link
            to="/login"
            className={`bg-[#4CCE5B] ${
              user ? "hidden" : "block"
            } inline-flex items-center md:block justify-center gap-2 hover:bg-[#4CCE5B]  duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded`}
          >
            <p className="text-xl"></p>
            Login
          </Link> */}

          {/* user Menu */}
          <div
            className={`absolute ${
              userOpen ? " " : "hidden"
            } text-center   flex flex-col justify-center  items-center gap-4  shadow-lg bg-white dark:bg-[#123841] px-6 min-w-[200px] py-4 -top-80 md:top-16 -left-34 dark:text-white z-50`}
          >
            <p className="text-lg font-semibold">{user?.displayName}</p>

            <button
              onClick={handleLogOut}
              className="bg-[#4CCE5B]  hover:bg-[#123841] duration-200 text-white font-bold px-4 xl:px-6 py-1 inline-flex items-center gap-3 rounded cursor-pointer "
            >
              logout
            </button>
          </div>
        </div>

        {/* Drawer */}
        <button
          onClick={() => setSideOpen(!sideOpen)}
          className="text-4xl text-[#4CCE5B] flex items-center md:hidden ml-3"
        >
          <div>{sideOpen ? <VscThreeBars /> : <RxCross2 />}</div>
        </button>
      </header>

      <div
        className={`absolute ${
          !sideOpen ? "block" : "hidden"
        } md:hidden  bg-white shadow-lg  w-56 min-h-screen overflow-y-auto md:top-0 -left-6 ease-in-out pb-7 duration-300 dark:bg-[#D0FED5] dark:text-white z-50`}
      >
        <div className="p-4">
          <ul className="mt-6 flex flex-col gap-4 ml-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#4CCE5B] text-bold border-b-4 border-[#4CCE5B]"
                    : "hover:text-[#4CCE5B] text-black"
                }
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-jobs"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#4CCE5B] text-bold border-b-4 border-[#4CCE5B]"
                    : "hover:text-[#4CCE5B] text-black"
                }
              >
                <span>All Jobs</span>
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/add-job"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#4CCE5B] border-b-4 border-[#4CCE5B]"
                      : "hover:text-[#4CCE5B] text-black"
                  }
                >
                  <span>Add Job</span>
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  to={`/dashboard/applied-job/${user?.email}`}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#4CCE5B] border-b-4 border-[#4CCE5B]"
                      : "hover:text-[#4CCE5B] text-black"
                  }
                >
                  <span>Applied job</span>
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#4CCE5B] border-b-4 border-[#4CCE5B]"
                    : "hover:text-[#4CCE5B] text-black"
                }
              >
                <span>Blog</span>
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to={`/jobs/my-jobs/${user?.email}`}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#4CCE5B] border-b-4 border-[#4CCE5B]"
                      : "hover:text-[#4CCE5B] text-black"
                  }
                >
                  <span>My Jobs</span>
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        <div className="ml-8 mt-8">
          <div className={`flex flex-col gap-2 top-16 pr-2`}>
            <button className="border-2 mx-auto border-[#4CCE5B] rounded-full w-[40px]">
              {user ? (
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              ) : (
                <h1>no user</h1>
              )}
            </button>
            <p className="text-lg font-semibold text-center">
              {user?.displayName}
            </p>
            {user ? (
              <button
                onClick={() => {
                  handleLogOut();
                  setSideOpen(!sideOpen);
                }}
                className="bg-[#4CCE5B] hover:bg-[#123841] duration-200 text-white font-bold px-4  py-1 rounded inline-flex items-center gap-2 justify-center "
              >
                logout
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                  setSideOpen(!sideOpen);
                }}
                className="bg-[#4CCE5B] hover:bg-[#123841] duration-200 text-white font-bold px-4  py-1 rounded inline-flex items-center gap-2 justify-center "
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
