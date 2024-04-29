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
import PrivateRoute from "./routes/PrivateRoute";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CraftDetails from "./pages/Shared/CraftDetails/CraftDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/crafts')
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
        element: <PrivateRoute><MyArtsAndCrafts></MyArtsAndCrafts></PrivateRoute>,
      },
      {
        path: "/add-crafts",
        element: <PrivateRoute><AddCraftItems></AddCraftItems></PrivateRoute>,
      },
      {
        path: "/crafts/:id",
        element: <PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/crafts/${params.id}`)
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
