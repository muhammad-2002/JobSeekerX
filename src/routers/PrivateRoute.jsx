import { Navigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#4CCE5B] space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white"></div>
      </div>
    );
  }

  if (user) {
    return children;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default PrivateRoute;
