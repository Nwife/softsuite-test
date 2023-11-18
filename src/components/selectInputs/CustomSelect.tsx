import { FC } from "react";
import { Controller } from "react-hook-form";
import Select, { components, IndicatorSeparatorProps } from "react-select";

//style
import "./index.scss";

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <svg
          width="14"
          height="8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.833 1.082 6.999 6.915 1.166 1.082"
            stroke="#4B5563"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </components.DropdownIndicator>
    )
  );
};

const IndicatorSeparator = ({ innerProps }: IndicatorSeparatorProps) => {
  return null;
};

interface Props {
  control: object;
  name: string;
  id: string;
  label: string;
  isRequired: boolean;
  isDisabled: boolean;
  placeholder: string;
  errors: object;
  defaultValue: any;
  options: any;
  searchable?: boolean;
  customOnChange?: (e: any) => void;
}

const CustomSelect: FC<Props> = ({
  options,
  control,
  name,
  id,
  label,
  isRequired,
  isDisabled,
  placeholder,
  errors,
  defaultValue,
  customOnChange,
  searchable = false,
}): JSX.Element => {
    
  return (
    <div className="custom-select">
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
            <Select
              defaultValue={defaultValue ? defaultValue : null}
              value={value}
              onChange={(val: any, p) => {
                onChange(val);
                if (customOnChange) customOnChange(val);
              }}
              // styles={colorStyles}
              isSearchable={searchable}
              components={{ DropdownIndicator, IndicatorSeparator }}
              placeholder={placeholder}
              name={name}
              isDisabled={isDisabled}
              options={options}
              className="default-select-container"
              classNamePrefix="default-select"
              //   classNamePrefix="form-input px-4 py-1.5 custom-input w-full black-text"
            />
          )}
        />
      </div>
      {/* @ts-expect-error not defined */}
      {errors[name] && (
        <div className="mt-2 error-text">
          <p>{label ? label : name} is required.</p>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
