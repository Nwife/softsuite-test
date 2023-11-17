//components
import { ReactNode } from "react";

//components
import Sidebar from "../partials/Sidebar";
import Topnav from "../partials/Topnav";
import BottomBanner from "../partials/BottomBanner";

//styles
import "./index.scss";


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
        <div className="layout flex">
            <Sidebar />
            <div className="layout-content">
                <Topnav />
                {children}
            </div>
        </div>
        <BottomBanner />
    </>
  );
};

export default Layout;
