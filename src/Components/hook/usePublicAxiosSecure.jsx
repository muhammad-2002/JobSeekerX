import axios from "axios";

const axiosPublicSecure = axios.create({
  baseURL: import.meta.env.VITE_API,
});

const usePublicAxiosSecure = () => {
  return axiosPublicSecure;
};

export default usePublicAxiosSecure;
