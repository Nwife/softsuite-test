import { FC } from "react";

import "./index.scss";

interface Props {
  title: string;
  style?: object;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  icon?: string;
  iconRight?: boolean;
  type?: "submit" | "button" | "reset" | undefined;
}

const Spinner = () => <div className="spinner"></div>;

const Button: FC<Props> = (props): JSX.Element => {
  const {
    title,
    style = {},
    onClick,
    loading = false,
    disabled = false,
    icon,
    iconRight = false,
    type = "submit" 

  } = props;
  return (

      <button
        className={`btn ${(loading || disabled) && "opacity-50" }`}
        type={type}
        style={{ ...style }}
        onClick={onClick}
        disabled={loading || disabled}
      >
        <div
          className={` ${icon ? "flex items-center justify-center" : "flex-1 text-center"}`}
        >
          {loading && <Spinner />}
          {icon && (
            <img
              src={icon}
              alt="icon"
              style={ 
                iconRight 
                ? { "marginRight": "8px", "order": "1", "marginLeft": "8px" } 
                : { "marginRight" : "8px"} }
            />
          )}
          {title}
        </div>
      </button>

  );
};

export default Button;
