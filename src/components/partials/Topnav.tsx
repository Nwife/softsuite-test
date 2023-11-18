//icons
import home from "../../assets/icons/home.svg";
import notification from "../../assets/icons/notification.svg";
import caretDown from "../../assets/icons/caret-down.svg";

//images
import profile from "../../assets/images/profile.png";

//components
import Inputsearch from "../inputTexts/InputSearch";

const Topnav = () => {
  return (
    <div className="top-bar flex ">
        <div className="flex top-bar__home">
            <div><img src={home} alt="home" /></div>
            <div className="top-bar__home-name">
                <p>Change Organization</p>
                <p>PaperSoft Limited</p>
            </div>
            <div className="sidebar__item-1-caret"><img src={caretDown} alt="" /></div>
        </div>

        <Inputsearch placeholder="Searh for anything..." style={{ padding: "14px 15px 14px 15px" }} />

        <div className="top-bar__profile flex items-center">
            <div className="notification"><img src={notification} alt="" /></div>
            <div className="avatar flex items-center">
                <img src={profile} alt="" />
                <div>
                    <p>Henry Okoro</p>
                    <p>Payroll Manager</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topnav;