interface Props {
    icon: string;
    text: string;
    subtext?: string;
    closeActionModal: () => void;
}

//components
import Button from "../butttons/Button";

const ElementactionModal = ({icon, text, subtext, closeActionModal}: Props) => {
  return (
    <div className="flex items-center createelement-modal">
        <div className="createelement-modal__content-action flex flex-col">
            <div><img src={icon} alt="" /></div>
            <p className="main-text">{text}</p>
            {subtext && <p className="subtext">{subtext}</p>}
            <div className="action-buttons flex ">
            <Button 
                title={"Cancel"}
                style={{ padding: "16px", width: "30%", backgroundColor: "white", border: "1px solid #C8C8C8", color: "#C8C8C8" }} 
                onClick={closeActionModal} 
            />
            <Button 
                title={"Yes, Delete"}
                style={{ padding: "16px", width: "70%", backgroundColor: "#E05453", color: "#FFF" }} 
                onClick={() => { }} //dispatch delete
            />
            </div>
        </div>
    </div>
  )
}

export default ElementactionModal;