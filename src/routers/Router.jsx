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
        path: "/add-job",
        element: (
          <PrivateRoute>
            <AddaJobs></AddaJobs>
          </PrivateRoute>
        ),
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
        path: "/applied-job",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch(`${import.meta.env.VITE_API}/applied-job`),
      },
      {
        path: "/jobs/my-jobs/:email",
        element: (
          <PrivateRoute>
            <MyJobs></MyJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateJob></UpdateJob>,
      },
    ],
  },
]);

export default router;
