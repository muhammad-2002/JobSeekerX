import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API,
});

const UseAxiosSecure = () => {
  // const navigate = useNavigate();
  // const { logOutUser } = useAuth();
  // axiosSecure.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   (error) => {
  //     if (error.response?.status == 401 || error.response?.status === 403) {
  //       logOutUser();
  //       navigate("/login");
  //     }
  //     return Promise.reject(error);
  //   }
  // );
  return axiosSecure;
};

export default UseAxiosSecure;
