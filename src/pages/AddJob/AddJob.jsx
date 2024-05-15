import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import job from "../../assets/Duplicate-amico.png";

const AddaJobs = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const handleJobsData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userEmail = user.email;
    const applicants_number = parseInt(form.applicant.value || 0);
    const job_title = form.title.value;
    const job_des = form.dsc.value;
    const company_logo = form.photo.value;
    const banner_img = form.banner.value;
    const posted_by = form.name.value;
    const salary_range = form.salary.value;
    const category = form.category.value;
    const application_deadline = startDate.toDateString();
    const posting_date = new Date().toDateString();

    const formData = {
      applicants_number: parseInt(applicants_number),
      userEmail,
      job_title,
      job_des,
      company_logo,
      banner_img,
      posted_by,
      salary_range,
      category,
      application_deadline,
      posting_date,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API}/jobs`,
        formData
      );
      console.log(data);

      // Show success message
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Wow! Jobs successfully added.",
      });

      // If submission was successful, reset the form or perform any other necessary actions
      form.reset(); // Reset the form fields
    } catch (error) {
      // Show error message
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add the job.",
      });
    }
  };

  return (
    <div className="max-w-7xl mt-7 mx-auto px-3">
      {/* dynamic title  */}
      {/* <Helmet>
        <title>{dynamicTitle}</title>
      </Helmet> */}
      {/* <div className="bg h-[300px]"></div> */}
      <h1 className="text-4xl text-center text-[#4CCE5B] mb-10 font-bold mt-4">
        Add A New Job
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
        <img className="w-[80%]" src={job} alt="" />
        <div className="max-w-3xl  p-6 ">
          <form onSubmit={handleJobsData} className="space-y-2">
            {/* part1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* email  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  value={user?.email}
                  className="py-2 p-2 rounded bg-gray-200 design outline-none"
                  required
                />
              </div>
              {/* user Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  value={user?.displayName}
                  placeholder="Applicant No"
                  className="py-2 p-2 bg-gray-200 rounded design outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Applicant No</span>
                </label>
                <input
                  name="applicant"
                  defaultValue={0}
                  type="number"
                  placeholder="Applicant No"
                  className="py-2 p-2 rounded design outline-none"
                  required
                />
              </div>
              {/* job title */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Title</span>
                </label>
                <input
                  name="title"
                  type="text"
                  placeholder="Job title"
                  className="py-2 p-2 rounded design outline-none"
                  required
                />
              </div>
            </div>

            {/* part2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* user name  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Posted name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Job posted name"
                  className="py-2 p-2 rounded design outline-none"
                  required
                />
              </div>
              {/* salary rangy */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Salary Range</span>
                </label>

                <input
                  type="number"
                  name="salary"
                  min="20000"
                  max="100000"
                  placeholder="salary"
                  className="py-2 p-2 rounded design outline-none"
                  required
                />

                {/* <input type="number" name="salary" placeholder="salary" className="py-2 p-2 rounded design outline-none" required /> */}
              </div>
            </div>

            {/* part3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center">
              {/* photo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company logo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="PhotoURL"
                  className="py-2 p-2 rounded design outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Banner</span>
                </label>
                <input
                  type="text"
                  name="banner"
                  placeholder="PhotoURL"
                  className="py-2 p-2 rounded design outline-none"
                  required
                />
              </div>

              {/* application date  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Application Deadline</span>
                </label>
                <DatePicker
                  className=" py-2 p-2 rounded design outline-none"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>

            {/* category  */}
            <div className="form-control">
              <label>Select job category:</label>
              <select
                className="design rounded py-2"
                name="category"
                id="mySelect"
              >
                <option value="Remote Jobs">Remote Jobs</option>
                <option value="On-Site Jobs">On-Site Jobs</option>
                <option value="Part-Time Jobs">Part-Time Jobs</option>
                <option value="Hybrid Jobs">Hybrid Jobs</option>
              </select>
            </div>
            {/* Des */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Description</span>
              </label>
              <textarea
                className="design rounded outline-none"
                name="dsc"
                id=""
                cols="5"
                rows="5"
              ></textarea>
            </div>
            {/* submitt  */}
            <div className="form-control mt-6">
              <button className="bg-[#4CCE5B] py-2 px-4 outline-none rounded text-white">
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddaJobs;
