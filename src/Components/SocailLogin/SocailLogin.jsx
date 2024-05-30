import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import usePublicAxiosSecure from "../hook/usePublicAxiosSecure";

const SocailLogin = ({ title, button }) => {
  const axiosPublicSecure = usePublicAxiosSecure();
  const { createForGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogle = async () => {
    try {
      const data = await createForGoogle();
      if (data) {
        const userObj = {
          email: data.user.email,
          name: data.user.displayName,
        };
        console.log(userObj);
        const res = await axiosPublicSecure.post("/users", userObj);

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
      <h2 className="text-center text-lg font-semibold">
        {title} ? Please{" "}
        {button === "login" ? (
          <>
            <Link to="/register" className="text-[#4CCE5B] underline">
              Register
            </Link>{" "}
          </>
        ) : (
          <>
            <Link to="/login" className="text-[#4CCE5B] underline">
              Login
            </Link>{" "}
          </>
        )}
      </h2>
      <h4 className="text-md text-center">OR</h4>
      <div className="flex justify-center ">
        <div
          onClick={handleGoogle}
          className="cursor-pointer flex items-center my-2 gap-3 justify-center w-[250px] border p-2 rounded-full"
        >
          <FcGoogle className="text-xl"></FcGoogle>
          <h2 className=" text-md font-bold ">Continue with Google</h2>
        </div>
      </div>
    </div>
  );
};

export default SocailLogin;
