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

  } = props;
  return (
    <div>
      <button
        className={`btn ${(loading || disabled) && "opacity-50" }`}
        type="submit"
        style={{ ...style }}
        onClick={onClick}
        disabled={loading || disabled}
      >
        <div
          className={`flex items-center justify-center px-4`}
        >
          {loading && <Spinner />}
          {icon ? (
            <img
              src={icon}
              alt="icon"
              style={ 
                iconRight 
                ? { "marginRight": "8px", "order": "1", "marginLeft": "8px" } 
                : { "marginRight" : "8px"} }
            />
          ) : (
            <></>
          )}
          {title}
        </div>
      </button>
    </div>
  );
};

export default Button;
