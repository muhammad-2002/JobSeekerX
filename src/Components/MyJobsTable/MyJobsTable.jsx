import { MdOutlineDelete, MdSystemUpdateAlt } from "react-icons/md";
import { Link } from "react-router-dom";
const MyJobsTable = ({ job, handleDelete }) => {
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
  } = job || {};

  return (
    <tbody>
      <tr>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle border w-12 h-12">
              <img src={company_logo} alt="" />
            </div>
          </div>
        </td>
        <td>{posted_by}</td>
        <td>{job_title}</td>
        <td>{posting_date}</td>
        <td>{application_deadline}</td>
        <td>$1000-{salary_range}</td>
        <td className="text-center flex gap-3">
          <Link
            to={`/update/${_id}`}
            className="py-1 flex justify-center items-center text-2xl  px-2 rounded-sm transition-all hover:bg-white hover:text-black bg-[#4CCE5B] text-white"
          >
            <MdSystemUpdateAlt></MdSystemUpdateAlt>
          </Link>
          <Link
            onClick={() => handleDelete(_id)}
            className="py-1 px-2 rounded-sm text-2xl flex justify-center items-center transition-all hover:bg-white hover:text-black bg-[#fc0000] text-white"
          >
            <MdOutlineDelete></MdOutlineDelete>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default MyJobsTable;
