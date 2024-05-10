// import { useContext, useState } from "react";
// import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import swal from "sweetalert";
// import { AuthContext } from "../../Providers/AuthProvider";
import pass from "../../assets/Pass.png";
// import img1 from "../../assets/login.svg";

import { Link } from "react-router-dom";
import HeaderBanner from "../../Components/headerBanner/HeaderBanner";

const Login = () => {
  // const dynamicTitle = "Login";
  // const { logIn, googleSignIn } = useContext(AuthContext);
  // const location = useLocation();
  // // console.log(location);
  // const navigate = useNavigate();
  // const [loginError, setLoginError] = useState();
  // const [loginSuccess, setLoginSuccess] = useState();

  // const handelSignIn = (e) => {
  //   setLoginError("");
  //   setLoginSuccess("");
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   // console.log(name, email, password);
  //   logIn(email, password)
  //     .then((result) => {
  //       console.log(result);
  //       // alert('Login Successfully')
  //       swal("Success!", "Login Successfully", "success");
  //       navigate(location?.state ? location.state : "/");
  //       return;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       if (error.message) {
  //         setLoginError("Password doesn't match");
  //         return;
  //       }
  //     });
  // };

  // const handelGoogleSignIn = () => {
  //   console.log("click google");
  //   googleSignIn()
  //     .then((result) => {
  //       console.log(result);
  //       swal("Success!", "Login Successfully", "success");
  //       navigate(location?.state ? location.state : "/");
  //       return;
  //     })
  //     .fatch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <HeaderBanner heading="Log in"></HeaderBanner>
      <div className=" max-w-7xl mx-auto">
        <img src={""} alt="" />
        <h1 className="text-4xl font-extrabold text-center mt-5 my-8 text-black">
          Log in your Account
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 justify-center items-center">
          <div className=" rounded-lg py-5">
            <h1 className="text-2xl font-bold text-[#4CCE5B] mt-4 text-center">
              Please Login & Access Find Jobs{" "}
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
              <h1 className="text-sm p-2">Forget Password</h1>

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
                  Login
                </button>
              </div>
            </form>
            <h2 className="text-center text-lg font-semibold">
              Not a member ? Please{" "}
              <Link to="/register" className="text-[#4CCE5B] underline">
                Register
              </Link>{" "}
            </h2>
            <h4 className="text-md text-center">OR</h4>
            <div className="flex justify-center ">
              <div className="cursor-pointer flex items-center my-2 gap-3 justify-center w-[250px] border p-2 rounded-full">
                <FcGoogle className="text-xl"></FcGoogle>
                <h2 className=" text-md font-bold ">Continue with Google</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={pass} className=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
