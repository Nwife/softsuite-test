
import { useState } from "react";
//libraries
import { useForm } from "react-hook-form";

//components
import ElementsDetails from "./ElementsDetails";
import AdditionalDetails from "./AdditionalDetails";
import Button from "../butttons/Button";


const CreateElementModal = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [step, setStep] = useState(1);

  const onDetailsSubmit = (data: any) => {
    console.log(">>>", data)
  }


  return (
    <div className="flex items-center createelement-modal">
      <form onSubmit={handleSubmit(onDetailsSubmit)} className="createelement-modal__content flex flex-col">
        <h2>Create Element</h2>
        {/* Progress bar */}
        <div className="createelement-modal__content-progress">{step}</div>
        <div className="createelement-modal__content-step">
          { step === 1 && 
            <ElementsDetails 
              control={control}
              errors={errors}
            /> 
          }
          { step === 2 && <AdditionalDetails /> }
        </div>
        
        {/* buttons  */}
        <div className="createelement-modal__buttons flex">
          <Button title='Cancel' iconRight={true} type="button" style={{ padding: "16px", width: "100%", backgroundColor: "#FFF", border: "2px solid #4BAA79", color: "#4BAA79" }} onClick={() => {}} />
          <Button title='Next' iconRight={true} style={{ padding: "16px", width: "100%" }} onClick={() => {}} />
        </div>
      </form>
    </div>
  )
}

export default CreateElementModal;