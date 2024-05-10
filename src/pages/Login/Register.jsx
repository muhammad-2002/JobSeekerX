import { useForm } from "react-hook-form";
import HeaderBanner from "../../Components/headerBanner/HeaderBanner";
import registerPhoto from "../../assets/Register.png";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <div className="pb-10">
      <div className="h-[343px]">
        <div className=" w-full ">
          <HeaderBanner heading="Register"></HeaderBanner>
        </div>
      </div>
      <div className=" px-10 bg-white z-50 mx-auto  h-screen">
        <img src={""} alt="" />
        <h1 className="text-4xl font-extrabold text-center mt-5 my-8 text-black">
          Register in your Account
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 justify-center items-center">
          <div className=" rounded-lg py-5">
            <h1 className="text-2xl font-bold text-[#4CCE5B] mt-4 text-center">
              Please Register & Access Find Jobs{" "}
            </h1>
            <form
              onSubmit={handleSubmit(handleRegister)}
              className="card-body px-4 "
            >
              <div className="form-control">
                <input
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className=" w-full py-2 px-4  border-b-2 border-[#4CCE5B] rounded outline-none "
                />
                {errors.name && (
                  <p className="text-sm text-red-700">
                    This field is required.
                  </p>
                )}
              </div>
              <div className="form-control">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className=" w-full py-2 px-4  border-b-2 border-[#4CCE5B] rounded outline-none my-4"
                />
                {errors.email && (
                  <p className="text-sm text-red-700">
                    This field is required.
                  </p>
                )}
              </div>
              <div className="form-control">
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Password"
                  className=" w-full py-2 px-4  border-b-2 border-[#4CCE5B] rounded outline-none my-4"
                />
                {errors.password && (
                  <p className="text-sm text-red-700">
                    This field is required.
                  </p>
                )}
              </div>
              <div className="form-control">
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="photoURL"
                  className=" w-full py-2 px-4  border-b-2 border-[#4CCE5B] rounded outline-none"
                />
                {errors.photoURL && (
                  <p className="text-sm text-red-700">
                    This field is required.
                  </p>
                )}
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
            <img
              src={registerPhoto}
              className=" w-[90%] flex justify-center "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
