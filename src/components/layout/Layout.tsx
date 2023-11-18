//components
import { ReactNode } from "react";

//components
import Sidebar from "../partials/Sidebar";
import Topnav from "../partials/Topnav";
import BottomBanner from "../partials/BottomBanner";
import Breadcrumb from "../Breadcrumb";

//styles
import "./index.scss";


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
        <div className="layout flex">
            <Sidebar />
            <div className="layout-content">
                <Topnav />
                <div className="layout-content__display">
                  <Breadcrumb />
                  {children}
                </div>
            </div>
        </div>
        <BottomBanner />
    </>
  );
};

export default Layout;
