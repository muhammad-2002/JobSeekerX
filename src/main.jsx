import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Provider from "./Provider/Provider";
import "./index.css";
import router from "./routers/Router";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <ToastContainer></ToastContainer>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
