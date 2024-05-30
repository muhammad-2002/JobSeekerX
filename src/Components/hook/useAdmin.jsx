import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const useAdmin = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useAuth();
  const [admin, setAdmin] = useState("");
  console.log(admin);
  useEffect(() => {
    axiosSecure
      .get(`/users/${user?.email}`)
      .then((res) => setAdmin(res?.data?.role));
  }, [axiosSecure, user]);
  return [admin];
};

export default useAdmin;
