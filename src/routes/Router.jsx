import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import Login from "../pages/Account/Login";
import Banner from "../pages/Banner/Banner";
import Cards from "../pages/Cards/Cards";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CardDetails from "../pages/Cards/CardDetails";
import Marked from "../pages/Marked/Marked";
import Register from "../pages/Account/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: "/banner",
        element: <Banner></Banner>
      },
      {
        path: "/cards",
        element: <Cards></Cards>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader: () => fetch('/commercial.json')
      },
      {
        path: '/marked',
        element: <PrivateRoute><Marked></Marked></PrivateRoute>,
        loader: () => fetch('/commercial.json')
      }
    ],
  },
]);

export default router;
