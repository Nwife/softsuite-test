//icons
import home from "../../assets/icons/home.svg";
import search from "../../assets/icons/search.svg";
import notification from "../../assets/icons/notification.svg";
import caretDown from "../../assets/icons/caret-down.svg";

//images
import profile from "../../assets/images/profile.png";

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

        <div className="flex items-center top-bar__input">
            <input
                type="text"
                placeholder="Searh for anything..."
            />
            <button className="bg-green rounded-[5px] py-3.5 px-5"><img src={search} alt="" /></button>
        </div>

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