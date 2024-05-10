import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="max-w-[1920px] mx-auto rale-way">
      <header className="bg-white shadow-lg  flex w-full  px-5 md:px-[50px] lg:px-[80px] xl:px-[120px] 2xl:px-[150px] md:py-6 py-3 ">
        {/* start */}
        <Link
          to="/"
          className="md:border-r flex flex-shrink-0 items-center  gap-4"
        >
          <p className="text-3xl text-[#4CCE5B]">
            <FaPeopleGroup />
          </p>

          <h1 className="font-bold text-3xl ">
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
                to="/add-coffee"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[]#4CCE5B border-b-4 border-[#291410]"
                    : "hover:text-[]#4CCE5B"
                }
              >
                <span>Add Product</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/My Cart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#4CCE5B] border-b-4 border-[#4CCE5B]"
                    : "hover:text-[#4CCE5B]"
                }
              >
                <span>My Cart</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* end */}
        <div className="relative md:border-l flex items-center  justify-end w-full md:w-auto pl-5 ">
          <div className=" w-[50px]">
            <button className=" p-1 mr-3 flex items-center">
              <img className="md:w-full   w-10 object-cover" src={""} alt="" />
            </button>
          </div>

          <button className="border-2 border-[#4CCE5B] hidden rounded-full w-[40px]">
            <img src={""} alt="" className="w-full h-full rounded-full" />
          </button>

          <Link
            to="/login"
            className="bg-[#4CCE5B] inline-flex items-center justify-center gap-2 hover:bg-[#4CCE5B]  duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
          >
            <p className="text-xl">
              <IoMdLogIn />
            </p>
            Login
          </Link>

          {/* user Menu */}
          <div
            className={`absolute text-center hidden
            } flex flex-col justify-center items-center gap-4  shadow-lg bg-white dark:bg-[#120505] px-8 py-4 top-16 dark:text-white z-50`}
          >
            <p className="text-lg font-semibold">{}</p>

            <button className="bg-[#4CCE5B] hover:bg-[#ab3154] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded cursor-pointer">
              logout
            </button>
          </div>
        </div>
        {/* Drawer */}
        <button className="text-4xl text-[#4CCE5B] flex items-center md:hidden ml-3">
          <i className={``}>X</i>
        </button>
      </header>

      {/* Side Menu */}
      {/* transition-transform transform -translate-x-full */}
      <div
        className={`absolute  md:hidden  bg-white shadow-lg  w-56 min-h-screen overflow-y-auto top-0 left-0 ease-in-out duration-300 dark:bg-white dark:text-white z-50`}
      >
        <div className="p-4">
          <a href="" className=" flex-shrink-0 flex items-center ">
            <img
              className="w-[200px]  h-[70px] object-cover"
              // src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png"
              src={"logo"}
              alt=""
            />
          </a>
          <ul className="mt-6 flex flex-col gap-4 ml-5">
            <li>
              <NavLink
                onClick={() => setSideOpen(!sideOpen)}
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#4CCE5B] border-b-4 border-[#4CCE5B]"
                    : "hover:text-[#4CCE5B]"
                }
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setSideOpen(!sideOpen)}
                to="/product/add"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#4CCE5B] border-b-4 border-[#4CCE5B]"
                    : "hover:text-[#4CCE5B]"
                }
              >
                <span>Add Product</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setSideOpen(!sideOpen)}
                to="/myCart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#4CCE5B] border-b-4 border-[#4CCE5B]"
                    : "hover:text-[#4CCE5B]"
                }
              >
                <span>My Cart</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="ml-8 mt-8">
          <div className={`flex flex-col gap-2 top-16 pr-5`}>
            <button className="border-2 mx-auto border-[#4CCE5B] rounded-full w-[40px]">
              <img src={""} alt="" className="w-full h-full rounded-full" />
            </button>
            <p className="text-lg font-semibold text-center"></p>
            <button className="bg-[#4CCE5B] hover:bg-[#ab3154] duration-200 text-white font-bold px-4  py-1 rounded ">
              logout
            </button>
          </div>

          <button className="bg-[#4CCE5B] hover:bg-[#ab3154] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
