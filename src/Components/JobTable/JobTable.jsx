import { Link } from "react-router-dom";

const JobTable = ({ job }) => {
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
  // console.log(job);

  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={company_logo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>{posted_by}</td>
        <td>{job_title}</td>
        <td>{posting_date}</td>
        <td>{application_deadline}</td>
        <td>$1000-{salary_range}</td>
        <td className="text-center">
          <Link
            to={`/jobs/${_id}`}
            className="py-1 px-4 rounded-lg transition-all hover:bg-white hover:text-black bg-[#4CCE5B] text-white"
          >
            Details
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default JobTable;
