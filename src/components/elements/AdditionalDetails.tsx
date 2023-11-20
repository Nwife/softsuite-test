import { useState } from "react";
import { Control, FieldValues, FieldErrors } from "react-hook-form";

//components
import CustomInput from "../inputTexts/CustomInput";
import CustomRadio from "../inputTexts/CustomRadio";
import CustomSelect from "../selectInputs/CustomSelect";

//helpers
import { getCurrentTimestamp } from "../../helpers";

interface DetailsProps {
    control: Control<FieldValues>;
    errors: FieldErrors<FieldValues>
  }

const AdditionalDetails = ({ control, errors }: DetailsProps) => {
  const [isActive, setIsActive] = useState(false);
  const [prorate, setProrate] = useState(false);
  const [payFrequency, setPayFrequency] = useState(false);
  const [processingType, setProcessingType] = useState(false);
  
  return (
    <div className="additional-details">
        <div className="additional-detail__content-one">
            <CustomInput
              control={control}
              name={"start_date"}
              id={"start_date"}
              label={"Effective Start Date"}
              placeholder={"Select Date"}
              isRequired={true}
              type="date"
              errors={errors}
              isDisabled={false}
              defaultValue={""}
              min={getCurrentTimestamp(0)}
              max={""}
              icon={""}
            />
            <CustomInput
              control={control}
              name={"end_date"}
              id={"end_date"}
              label={"Effective End Date"}
              placeholder={"Select Date"}
              isRequired={true}
              type="date"
              errors={errors}
              isDisabled={false}
              defaultValue={""}
              min={getCurrentTimestamp(1)}
              max={""}
              icon={""}
            />
            <div className="additional-details__radio-section">
              <p>Processing Type</p>
              <div className="additional-details__radio border-grey flex items-center">
                <CustomRadio
                  selected={processingType ? true : false}
                  label={"Open"}
                  onClick={() => setProcessingType(true)}
                />
                <CustomRadio
                  selected={processingType === false ? true : false}
                  label={"Closed"}
                  onClick={() => setProcessingType(false)}
                />
              </div>
            </div>
            <div className="additional-details__radio-section">
              <p>Pay Frequency</p>
              <div className="additional-details__radio border-grey flex items-center">
                <CustomRadio
                  selected={payFrequency ? true : false}
                  label={"Monthly"}
                  onClick={() => setPayFrequency(true)}
                />
                <CustomRadio
                  selected={payFrequency === false ? true : false}
                  label={"Selected Months"}
                  onClick={() => setPayFrequency(false)}
                />
              </div>
            </div>
        </div>
        <div className="additional-detail__content-two">
          <CustomSelect
            control={control}
            name={`month`}
            id={`month`}
            label={"Selected Pay Months"}
            placeholder={`Select`}
            isRequired={true}
            errors={errors}
            isDisabled={false}
            isMulti={payFrequency}
            options={[
              { label: "Option 1", value: "Option 1" },
              { label: "Option 2", value: "Option 2" },
              { label: "Option 3", value: "Option 3" },
              { label: "Option 4", value: "Option 4" },
              { label: "Option 5", value: "Option 5" },
              { label: "Option 6", value: "Option 6" },
              { label: "Option 7", value: "Option 7" },
            ]}
            defaultValue={""}
          />
        </div>
        <div className="additional-detail__content-three">
          <div className="additional-details__radio-section">
            <p>Prorate</p>
            <div className="additional-details__radio border-grey flex items-center">
              <CustomRadio
                selected={prorate ? true : false}
                label={"Yes"}
                onClick={() => setProrate(true)}
              />
              <CustomRadio
                selected={prorate === false ? true : false}
                label={"No"}
                onClick={() => setProrate(false)}
              />
            </div>
          </div>
          <div className="additional-details__radio-section">
            <p>Status</p>
            <div className="slider-section flex items-center border-grey">
              <label className="switch">
                <input type="checkbox" checked={isActive} onChange={() => setIsActive(!isActive)} />
                <span className="slider round"></span>
              </label>
              <p>Active</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AdditionalDetails;