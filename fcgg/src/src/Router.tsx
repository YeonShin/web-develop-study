import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "../components/Root";
import Home from "../screen/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />
      }
    ],
  },
]);