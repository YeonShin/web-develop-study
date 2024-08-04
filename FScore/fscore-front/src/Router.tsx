import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Mainpage from "./screen/Mainpage";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Mainpage />
      }
    ]
  }
]);

export default Router;