import { BsFacebook, BsPinterest, BsTwitter } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-[#4CCE5B]  text-white pt-5">
      <footer className="footer px-2 py-4 max-w-7xl m-auto font-normal  flex justify-between md:flex-row flex-col items-start gap-5 text-base-content">
        <nav className="font-medium text-gray-600 space-y-4">
          <div className="flex gap-2 text-white items-center">
            <FaPhoneVolume className="text-2xl" />
            <div>
              <h1>
                Need help? 24/7 <br />
                001-1234-8888
              </h1>
            </div>
          </div>
          <p className="text-white">
            Job Searching Just Got Easy. <br /> Use Jobtex to run a hiring site
            and <br /> earn money in the process! 118 E 128th St, <br /> East
            Chicago, IN 46312, US
          </p>
          <div className="md:flex text-white gap-4 justify-center items-center ">
            <BsFacebook className="text-2xl"></BsFacebook>
            <BsPinterest className="text-2xl"></BsPinterest>
            <BsTwitter className="text-2xl"></BsTwitter>
          </div>

          <div>
            <input
              className="border-[#FFFFFF] border-2 px-4 py-1 outline-none"
              placeholder="Enter your Email"
              type="text"
            />
            <button className="border-[#D0FED5] border-2 px-4 py-1 outline-none hover:bg-[#242323] hover:border-[#242323] transition-all delay-75  bg-[#D0FED5] text-black hover:text-white">
              Send
            </button>
          </div>
        </nav>
        <nav className="flex  items-center gap-2  flex-col">
          <header className="text-2xl font-bold  underline #FFFFFF text-[#FFFFFF]">
            Quick Links
          </header>
          <a className="link link-hover text-white">Job Packages</a>
          <a className="link link-hover text-white">Post New Job</a>
          <a className="link link-hover text-white">Jobs Listing</a>
          <a className="link link-hover text-white">Candidates</a>
          <a className="link link-hover text-white">Employers</a>
          <a className="link link-hover text-white">Terms of Use</a>
        </nav>
        <nav className="flex items-center gap-2 flex-col">
          <header className="underline text-2xl font-bold text-[#FFFFFF]">
            For Candidates
          </header>
          <a className="link link-hover text-white">User Dashboard</a>
          <a className="link link-hover text-white">CV Packages</a>
          <a className="link link-hover text-white">Candidate Grid</a>
          <a className="link link-hover text-white">Candidate Lists</a>
          <a className="link link-hover text-white">Messages</a>
          <a className="link link-hover text-white">Jobs Featured</a>
        </nav>
        <nav className="flex  items-center gap-2 flex-col">
          <header className=" underline font-bold text-2xl text-[#FFFFFF]">
            For Employers
          </header>
          <a className="link link-hover text-white">Post New Job</a>
          <a className="link link-hover text-white">Jobs Listing</a>
          <a className="link link-hover text-white">Employers List</a>
          <a className="link link-hover text-white">Job Packages</a>
          <a className="link link-hover text-white">About Us</a>
          <a className="link link-hover text-white">Terms of use</a>
        </nav>
      </footer>
      <footer className=" px-10 py-4 border-t bg-[#D0FED5] text-[#393838] border-base-300">
        <div className="max-w-screen-xl	 mx-auto md:px-2">
          <div className="md:flex justify-between">
            <aside className="">
              <p>@2024 JobSeekerX. All Rights Reserved.</p>
            </aside>

            <nav className="">
              <div className="grid grid-flow-col gap-4">
                <a href="">Terms Of Services </a>|<a href="">Privacy Policy</a>|
                <a href=""> Cookie Policy</a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
