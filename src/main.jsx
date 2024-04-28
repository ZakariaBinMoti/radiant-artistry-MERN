import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AllArtsAndCrafts from "./pages/AllArtsAndCrafts/AllArtsAndCrafts";
import MyArtsAndCrafts from "./pages/MyArtsAndCrafts/MyArtsAndCrafts";
import AddCraftItems from "./pages/AddCraftItem/AddCraftItems";
import AuthProviders from "./providers/AuthProviders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        path: "/all-crafts",
        element: <AllArtsAndCrafts></AllArtsAndCrafts>,
      },
      {
        path: "/my-crafts",
        element: <MyArtsAndCrafts></MyArtsAndCrafts>,
      },
      {
        path: "/add-crafts",
        element: <AddCraftItems></AddCraftItems>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
