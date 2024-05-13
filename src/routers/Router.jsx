import { createBrowserRouter } from "react-router-dom";

import AllJobs from "../Components/All Jobs/AllJobs";
import JobDetail from "../Components/JobDetails/JobDetails";
import MainLayout from "../MainLayout/MainLayout";
import AddaJobs from "../pages/AddJob/AddJob";
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
        element: <AddaJobs></AddaJobs>,
      },
      {
        path: "/all-jobs",
        loader: () => fetch(`${import.meta.env.VITE_API}/jobs`),
        element: <AllJobs></AllJobs>,
      },
    ],
  },
]);

export default router;
