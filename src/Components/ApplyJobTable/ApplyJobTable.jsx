import React from "react";

const ApplyJobTable = ({ applyUser }) => {
  const { name, email, resume, category, currentDate } = applyUser || {};

  const downloadResume = () => {
    if (resume) {
      // Create a temporary anchor element
      const link = document.createElement("a");
      link.href = resume;
      link.target = "_blank";
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <tr className=" text-center border-2">
      <td className="border-[2px] border-[#D0FED5] border-collapse">{name}</td>
      <td className="border-[2px] border-[#D0FED5] border-collapse">{email}</td>
      <td className="border-[2px] border-[#D0FED5] border-collapse">
        {category}
      </td>
      <td className="border-[2px] border-[#D0FED5] border-collapse">
        {currentDate}
      </td>
      <td className="text-center">
        {resume ? (
          <button
            onClick={downloadResume}
            className="py-1 px-4 rounded-md transition-all hover:bg-white hover:text-black bg-[#4CCE5B] text-white"
          >
            Download Resume
          </button>
        ) : (
          <span>No Resume</span>
        )}
      </td>
    </tr>
  );
};

export default ApplyJobTable;
