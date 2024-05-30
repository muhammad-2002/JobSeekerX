import React from "react";
import useAuth from "../../../Hook/useAuth";

const UserHome = () => {
  const { loading } = useAuth();
  if (loading) {
    return <p>loading</p>;
  }
  return <div className="flex justify-center items-center h-screen "></div>;
};

export default UserHome;
