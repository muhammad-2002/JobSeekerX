import { BsCalendar2Event, BsCoin, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";

const JobCard = ({ j }) => {
  const { user } = useAuth();
  const handleUser = () => {
    if (!user) {
      Swal.fire({
        title: "You are Not Log in",
        text: " please press ok and go to login page..",
        icon: "error",
      });
    }
  };

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
  } = j || {};

  // Define colors
  const categoryColors = {
    "On-Site Jobs": "#FF7E29",
    "Remote Jobs": "#7E7EFF",
    "Hybrid Jobs": "#29FF7E",
    "Part-Time Jobs": "#FF297E",
  };

  return (
    <div>
      <div>
        {/* card */}
        <div
          className="border p-4 rounded hover:shadow-md jobs transition-all"
          style={{ borderColor: categoryColors[category] }}
        >
          <div className="flex justify-between">
            <div className="flex gap-3">
              <img className="w-[60px]" src={company_logo} alt="" />
              <div>
                <h1 className="font-bold text-xl uppercase ">{job_title}</h1>
                <h1 className="text-gray-400">{posted_by}</h1>
                <h1 className="text-gray-400">{application_deadline}</h1>
                <h1 className="text-sm text-gray-500">
                  Applicant No: 0000{applicants_number}
                </h1>
              </div>
            </div>
            {/* icone */}
            <div>
              <div>
                <BsHeartFill
                  className="text-4xl p-2 rounded-full border text-red-500"
                  style={{ color: categoryColors[category] }}
                />
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div className="flex justify-between items-center">
            <div>
              <div className="flex gap-2">
                <BsCoin style={{ color: categoryColors[category] }} />
                <h1 className="text-sm text-gray-500">
                  $1000-${salary_range}/<span className="text-sm">month</span>{" "}
                </h1>
              </div>
              <div className="flex gap-2">
                <BsCalendar2Event style={{ color: categoryColors[category] }} />
                <h1 className="text-sm text-gray-500">
                  Deadline:{application_deadline}
                </h1>
              </div>
            </div>
            <Link
              onClick={handleUser}
              to={`/jobs/${_id}`}
              className="py-1 px-4 rounded hover:text-white hover:bg-[#4CCE5B] border transition-all text-black bg-white"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
