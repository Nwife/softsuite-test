import { FC } from "react";

//styles
import "./index.scss";

import { Controller } from "react-hook-form";

interface Props {
  control: object;
  name: string;
  id: string;
  label: string;
  isRequired: boolean;
  isDisabled: boolean;
  type: string;
  placeholder: string;
  icon?: string;
  errors: object;
  defaultValue: string;
  min: string;
  max: string;
  extra?: boolean;
  style?: object;
  isMargined?: boolean
}

const CustomInput: FC<Props> = ({
  control,
  name,
  id,
  label,
  isRequired,
  isDisabled = false,
  type,
  placeholder,
  errors,
  defaultValue,
  min, 
  max,
  style,
}): JSX.Element => {

  return (
    <div className="custom-input">
      <label className="" htmlFor={id}>
        {label}
      </label>
      <div className="">
        <Controller
          //  @ts-expect-error multiple typing involved
          control={control}
          defaultValue={defaultValue}
          name={name}
          rules={{
            required: isRequired ? true : false,
          }}
          render={({ field: { onChange, value } }) => {
            return (
              <>
                <div className="">
                  <div className="relative">
                    <input
                      id={id}
                      name={name}
                      autoComplete="off"
                      className=""
                      style={isDisabled ? { ...style, backgroundColor: "#88888826" } : { ...style }}
                      type={type}
                      value={value}
                      onChange={(val) => {
                        onChange(val);
                      }}
                      placeholder={placeholder}
                      disabled={isDisabled}
                      min={type === "number" && !min ? "0" : min}
                      max={max}
                      defaultValue={
                        type === "number" ? parseInt(defaultValue) : type === "date" ? defaultValue : defaultValue
                      }
                    />
                
                  </div>
                </div>
              </>
            );
          }}
        />

        {/* @ts-expect-error not defined */}
        {errors[name] && (
          <div className="mt-2 error-text">
            {/* @ts-expect-error not defined */}
            {errors[name]["message"] ? (
              //@ts-expect-error not defined
              <p>{errors[name]["message"]}</p>
            ) : (
              <p>{label ? label : name} is required.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
