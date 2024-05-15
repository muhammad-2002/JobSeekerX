import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API,
  withCredentials: true,
});

const UseAxiosSecure = () => {
  // const navigate = useNavigate();
  // const { logOutUser } = useAuth();
  // axiosSecure.interceptors.response.use(
  //   (response) => {
  //     console.log("check kori");
  //     return response;
  //   },
  //   (error) => {
  //     if (error.response?.status == 401 || error.response?.status === 403) {
  //       // console.log("user loged out");
  //       logOutUser();
  //       // navigate("/login");
  //     }
  //     return Promise.reject(error);
  //   }
  // );
  return axiosSecure;
};

export default UseAxiosSecure;
