import { createBrowserRouter } from "react-router-dom";

import AllJobs from "../Components/All Jobs/AllJobs";
import AppliedJobs from "../Components/AppliedJobs/AppliedJobs";
import JobDetail from "../Components/JobDetails/JobDetails";
import MyJobs from "../Components/My Jobs/MyJobs";
import UpdateJob from "../Components/UpdateJob/UpdateJob";
import MainLayout from "../MainLayout/MainLayout";
import AddaJobs from "../pages/AddJob/AddJob";
import ApplyJobs from "../pages/ApplyJobs/ApplyJobs";
import Blog from "../pages/Blog/Blog";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/jobs/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API}/jobs/${params.id}`),
        element: (
          <PrivateRoute>
            <JobDetail></JobDetail>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/all-jobs",
        loader: () => fetch(`${import.meta.env.VITE_API}/jobs`),
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/jobs/apply-job/:id",
        element: <ApplyJobs></ApplyJobs>,
      },

      {
        path: "/update/:id",
        element: <UpdateJob></UpdateJob>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <UserHome></UserHome>,
      },
      {
        path: "/dashboard/admin",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "/dashboard/jobs/my-jobs/:email",
        element: (
          <PrivateRoute>
            <MyJobs></MyJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/applied-job/:email",
        element: <AppliedJobs></AppliedJobs>,
        loader: ({ params }) =>
          fetch(`${"http://localhost:5000"}/applied-job/${params?.email}`),
      },
      {
        path: "/dashboard/add-job",
        element: (
          <PrivateRoute>
            <AddaJobs></AddaJobs>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
