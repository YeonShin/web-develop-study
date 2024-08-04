import { RecoilRoot } from "recoil";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={Router} />
    </RecoilRoot>
  );
}

export default App;
