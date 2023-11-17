//components
import { ReactNode } from "react";
import Sidebar from "../partials/Sidebar";
import Topnav from "../partials/Topnav";

//styles
import "./index.scss";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <div>
        <Topnav />
        {children}
      </div>
    </div>
  );
};

export default Layout;
