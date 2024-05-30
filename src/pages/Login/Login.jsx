// import { useContext, useState } from "react";
// import { Helmet } from "react-helmet";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import swal from "sweetalert";
// import { AuthContext } from "../../Providers/AuthProvider";
import pass from "../../assets/Pass.png";
// import img1 from "../../assets/login.svg";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocailLogin from "../../Components/SocailLogin/SocailLogin";
import HeaderBanner from "../../Components/headerBanner/HeaderBanner";
import useAuth from "../../Hook/useAuth";

const Login = () => {
  // const dynamicTitle = "Login";
  // const { logIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  // // console.log(location);
  const navigate = useNavigate();
  const { logInEmailAndPassword } = useAuth();
  const [passError, setPassError] = useState(null);
  // const [loginError, setLoginError] = useState();
  // const [loginSuccess, setLoginSuccess] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleSubmitLogin = (data) => {
    const email = data.email;
    const password = data.password;

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      return setPassError(
        "Please use Uppercase & Lowercase letter and length must be  6 character"
      );
    }
    logInEmailAndPassword(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You are Successfully Login",
          showConfirmButton: false,
          timer: 2000,
        });

        // Swal.fire({
        //   title: "You are Not Log in",
        //   text: " please press ok and go to login page..",
        //   icon: "error",
        // });
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Oops! Something weight wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const { createForGoogle } = useAuth();
  const handleGoogle = async () => {
    try {
      const data = await createForGoogle();
      if (data) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You are Successfully Login",
          showConfirmButton: false,
          timer: 2000,
        });
      }

      navigate(location?.state ? location.state : "/");
      return;
    } catch (err) {
      console.log(err);
    }
  };
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
            <form
              onSubmit={handleSubmit(handleSubmitLogin)}
              className="card-body px-4 "
            >
              <div className="form-control">
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className=" w-full py-2 px-4  border-b-2 border-[#4CCE5B] rounded outline-none "
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className=" w-full py-2 px-4  border-b-2 border-[#4CCE5B] rounded outline-none my-4"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Password"
                  className=" w-full py-2 px-4  border-b-2 border-[#4CCE5B] rounded outline-none"
                  required
                />
                <p className="text-sm text-red-700">
                  {" "}
                  {passError && passError}
                </p>
                {errors.email && (
                  <span className="text-sm text-red-700">
                    This field is required
                  </span>
                )}
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
            <SocailLogin
              button={"login"}
              title={"Don't have Account "}
            ></SocailLogin>
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
