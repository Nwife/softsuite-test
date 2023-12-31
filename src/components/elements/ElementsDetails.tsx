
import { Control, FieldValues, FieldErrors } from "react-hook-form";

//components
import CustomInput from "../inputTexts/CustomInput";
import CustomSelect from "../selectInputs/CustomSelect";
import CustomTextarea from "../inputTexts/CustomTextarea";

interface DetailsProps {
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>
}

const ElementsDetails = ({ control, errors }: DetailsProps) => {

  return (
    <div className="element-details">
      <div className="element-details__content-one">
        <CustomInput
          control={control}
          name={"name"}
          id={"name"}
          label={"Name"}
          placeholder={"Input Name"}
          isRequired={true}
          type="text"
          errors={errors}
          isDisabled={false}
          defaultValue={""}
          min={""}
          max={""}
          icon={""}
        />
        <CustomSelect
          control={control}
          name={`element_classification`}
          id={`element_classification`}
          label={"Element Classification"}
          placeholder={`Select Classification`}
          isRequired={true}
          errors={errors}
          isDisabled={false}
          options={[
              { label: "Option 1", value: "Option 1" },
              { label: "Option 2", value: "Option 2" },
          ]}
          defaultValue={""}
        />
        <CustomSelect
          control={control}
          name={`element_category`}
          id={`element_category`}
          label={"Element Category"}
          placeholder={`Select Element Category`}
          isRequired={true}
          errors={errors}
          isDisabled={false}
          options={[
            { label: "Option 1", value: "Option 1" },
            { label: "Option 2", value: "Option 2" },
          ]}
          defaultValue={""}
        />
        <CustomSelect
          control={control}
          name={`payrun`}
          id={`payrun`}
          label={"Payrun"}
          placeholder={`Select Payrun`}
          isRequired={true}
          errors={errors}
          isDisabled={false}
          options={[
            { label: "Option 1", value: "Option 1" },
            { label: "Option 2", value: "Option 2" },
          ]}
          defaultValue={""}
        />
      </div>
      <div className="element-details__content-two flex flex-col">
        <CustomTextarea
          control={control}
          name={"description"}
          id={"description"}
          label={"Description"}
          placeholder={"Input Description"}
          isRequired={true}
          errors={errors}
          isDisabled={false}
          defaultValue={""}
          icon=""
          style={{ height: "88px" }}
        />
        <CustomTextarea
          control={control}
          name={"reporting_name"}
          id={"reporting_name"}
          label={"Reporting Name"}
          placeholder={"Input Reporting Name"}
          isRequired={true}
          errors={errors}
          isDisabled={false}
          defaultValue={""}
          icon=""
          style={{ height: "88px" }}
        />
      </div>
    </div>
  );
};

export default ElementsDetails;
