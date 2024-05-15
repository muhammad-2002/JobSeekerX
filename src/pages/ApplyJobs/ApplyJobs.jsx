import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";

const ApplyJobs = () => {
  const { user } = useAuth();
  // console.log(user.email, user.displayName);

  const handelApplyJobs = async (e) => {
    e.preventDefault();
    // form.reset();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const resume = form.resume.value;
    const currentDate = new Date().toDateString();

    const formAppliedData = { name, email, resume, currentDate };
    console.log(formAppliedData);

    // if (new Date() > new Date(applicationDate)) {
    //     alert('Date is over. You cannot apply for this job.');
    // } else {
    //     alert('Success');
    //     // Add your logic to submit the form or fetch data here
    // }
    const { data } = await axios.post(`${import.meta.env.VITE_API}/apply-job`, {
      formAppliedData,
    });
    try {
      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Wow! Applied successfully .",
        });
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while adding the jobs.",
      });
    }

    form.reset();
  };

  return (
    <div className="max-w-xl  mx-auto px-3">
      <div className="w-full  rounded design my-12   ">
        <form onSubmit={handelApplyJobs} className="">
          {/* part1 */}
          {/* job applicent  no  */}
          <h1 className="text-xl bg-[#4CCE5B] text-white p-4 text-center font-semibold">
            Applied Jobs
          </h1>
          <div className="form-control p-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="name"
              placeholder="Name"
              defaultValue={user.displayName}
              className="py-2 p-2 rounded design outline-none"
              required
            />
          </div>
          {/* job title */}
          <div className="form-control p-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              defaultValue={user.email}
              className="py-2 p-2 rounded design outline-none"
              required
            />
          </div>
          {/* part2 */}

          {/* user name  */}
          <div className="form-control p-4">
            <label className="label">
              <span className="label-text">Resume link</span>
            </label>
            <input
              name="resume"
              type="text"
              placeholder="Resume URL"
              className="py-2 p-2 rounded design outline-none"
              required
            />
          </div>
          <div className="form-control  p-4">
            <button className="bg-[#4CCE5B] py-2 outline-none rounded text-white uppercase">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobs;
