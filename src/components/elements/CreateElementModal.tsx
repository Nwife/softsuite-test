
import { useState } from "react";

//components
import ElementsDetails from "./ElementsDetails";
import AdditionalDetails from "./AdditionalDetails";


const CreateElementModal = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex items-center createelement-modal">
      <div className="createelement-modal__content flex flex-col">
        <h2>Create Element</h2>
        {/* Progress bar */}
        <div className="createelement-modal__content-step">
          { step === 1 && <ElementsDetails /> }
          { step === 2 && <AdditionalDetails /> }
        </div>
        
        {/* buttons  */}
        <div></div>
      </div>
    </div>
  )
}

export default CreateElementModal;