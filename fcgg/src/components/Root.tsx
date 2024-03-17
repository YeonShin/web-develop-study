import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <nav className="text-3xl font-bold underline">
        FC.GG
      </nav>
      <Outlet />
    </>
  );
}

export default Root;