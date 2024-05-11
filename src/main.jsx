import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import Provider from "./Provider/Provider";
import "./index.css";
import router from "./routers/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
