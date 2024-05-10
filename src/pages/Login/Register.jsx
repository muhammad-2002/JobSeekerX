import { Link } from "react-router-dom";
import register from "../../assets/Register.png";
const Register = () => {
  return (
    <div>
      <div className="bg-[#4CCE5B] space-y-3 h-72 flex justify-center flex-col items-center text-4xl font-bold">
        <h1 className="text-white">Register</h1>
        <p className="text-sm text-white">
          <Link to="/" className="hover:text-black">
            Home{" "}
          </Link>{" "}
          <span>{">"} </span> Register
        </p>
      </div>
      <div className=" max-w-7xl mx-auto h-screen">
        <img src={""} alt="" />
        <h1 className="text-4xl font-extrabold text-center mt-5 my-8 text-black">
          Register in your Account
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 justify-center items-center">
          <div className=" rounded-lg py-5">
            <h1 className="text-2xl font-bold text-[#4CCE5B] mt-4 text-center">
              Please Register & Access Find Jobs{" "}
            </h1>
            <form className="card-body px-4 ">
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className=" w-full py-2 px-4  border-b-2 border-[#4CCE5B] rounded outline-none "
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className=" w-full py-2 px-4  border-b-2 border-[#4CCE5B] rounded outline-none my-4"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className=" w-full py-2 px-4  border-b-2 border-[#4CCE5B] rounded outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photoURL"
                  className=" w-full py-2 px-4  border-b-2 border-[#4CCE5B] rounded outline-none"
                  required
                />
              </div>

              <div className="text-red-500 font-bold text-center my-2">
                {
                  <div className="text-red-500 font-bold text-center my-2"></div>
                }
              </div>

              <div>
                {
                  <div className="text-[#4CCE5B] font-bold text-center my-2"></div>
                }
              </div>

              <div className="flex justify-center">
                <button className="py-2 px-20 hover:bg-[#4CCE5B] border-[#4CCE5B] border-2 outline-none transition rounded-full  hover:text-white">
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center">
            <img src={register} className=" w-[90%] flex justify-center " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
