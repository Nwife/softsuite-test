import { FC } from "react";

import "./index.scss";
import { Controller } from "react-hook-form";

interface Props {
  control: object;
  name: string;
  id: string;
  label: string;
  isRequired: boolean;
  isDisabled: boolean;
  placeholder: string;
  icon: string;
  errors: object;
  defaultValue: string;
  style?: object;
}

const CustomTextarea: FC<Props> = ({
  control,
  name,
  id,
  label,
  isRequired,
  isDisabled = false,
  placeholder,
  errors,
  defaultValue,
  style,
}): JSX.Element => {
  return (
    <div className="custom-textarea">
      <label htmlFor={id}>
        {label}
      </label>
      <div className="">
        <Controller
          //  @ts-expect-error undefined
          control={control}
          defaultValue={defaultValue}
          name={name}
          rules={{
            required: isRequired ? true : false,
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <div className="">
                <textarea
                  autoComplete="off"
                  className=""
                  value={value}
                  onChange={(val) => {
                    onChange(val);
                  }}
                  rows={4}
                  placeholder={placeholder}
                  disabled={isDisabled}
                  defaultValue={defaultValue}
                  style={style}
                />
              </div>
            </>
          )}
        />

        {errors[name] && (
          <div className="mt-2 error-text">

            {errors[name]["message"] ? (

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

export default CustomTextarea;
