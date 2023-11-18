//styles
import "./index.scss";

//icons
import noelement from "../../assets/icons/noelement.svg";
import caution from "../../assets/icons/caution.svg";

const NoElements = () => {
  return (
    <div className="noelement flex flex-col items-center">
        <div><img src={noelement} alt="noelement" /></div>
        <div className="flex items-center">
            <span className="mr-4"><img src={caution} alt="caution" /></span>
            <p>There are no elements to display</p>
        </div>
    </div>
  )
}

export default NoElements;