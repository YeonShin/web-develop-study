import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from "./src/Router";
import "./index.css";

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
