//icons
import switchIcon from "../../assets/icons/switch.svg";
import employee from "../../assets/icons/employee.svg";
import salary from "../../assets/icons/salary.svg";
import account from "../../assets/icons/account.svg";
import logout from "../../assets/icons/logout.svg";
import payroll from "../../assets/icons/payroll.svg";
import dashIcon from "../../assets/icons/dashboard.svg";
import caretDown from "../../assets/icons/caret-down.svg";

//images
import logos from "../../assets/images/logo.png";

interface SidebarItemProp {
    icon: string;
    text: string
}

const SidebarItem = ({ icon, text }: SidebarItemProp ) => (
    <div className="sidebar__item-2 flex items-center">
        <div><img src={icon} alt="" /></div>
        <p>{text}</p>
    </div>
)

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div><img src={logos} alt="logo" /></div>
      <div>
        <div className="sidebar__item-1 flex items-center">
            <div><img src={switchIcon} alt="" /></div>
            <div className="sidebar__item-1-content">
                <p>Switch Module</p>
                <p>Payroll Management</p>
            </div>
            <div className="sidebar__item-1-caret"><img src={caretDown} alt="" /></div>
        </div>
        <div className="sidebar__section-1">
            <div className="sidebar__item-2 flex flex-col">
                <SidebarItem text="Dashboard" icon={dashIcon} />
                <div className="flex items-center sidebar__item-2">
                    <div><img src={payroll} alt="" /></div>
                    <p>Payroll Activities</p>
                    <div><img src={caretDown} alt="" /></div>
                </div>
                <SidebarItem text="Salary Structure" icon={salary} />
                <div className="flex items-center sidebar__item-2">
                    <div><img src={payroll} alt="" /></div>
                    <p>Element Setup</p>
                    <div><img src={caretDown} alt="" /></div>
                </div>
                <SidebarItem text="Employees" icon={employee} />
            </div>
        </div>
        <div className="sidebar__section-2">
            <div className="sidebar__item-2 flex flex-col">
                <div className="flex items-center sidebar__item-2">
                    <div><img src={payroll} alt="" /></div>
                    <p>Payroll Settings</p>
                    <div><img src={caretDown} alt="" /></div>
                </div>
                <SidebarItem text="My Account" icon={account} />
                <SidebarItem text="Logout" icon={logout} />
            </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
