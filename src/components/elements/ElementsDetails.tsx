import React from "react";

//libraries
import { useForm } from "react-hook-form";

//components
import CustomInput from "../inputTexts/CustomInput";
import CustomSelect from "../selectInputs/CustomSelect";
import CustomTextarea from "../inputTexts/CustomTextarea";

const ElementsDetails = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

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
              { label: "20 FT", value: "20FT" },
              { label: "40 FT", value: "40FT" },
              { label: "40 HC FT", value: "40HC FT" },
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
              { label: "20 FT", value: "20FT" },
              { label: "40 FT", value: "40FT" },
              { label: "40 HC FT", value: "40HC FT" },
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
              { label: "20 FT", value: "20FT" },
              { label: "40 FT", value: "40FT" },
              { label: "40 HC FT", value: "40HC FT" },
          ]}
          defaultValue={""}
        />
      </div>
      <div className="element-details__content-two">
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
