import { FC } from "react";
import "./index.scss";

interface Props {
  selected?: boolean;
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties | undefined;
}

const CustomRadio: FC<Props> = ({
  selected,
  label,
  onClick,
  style,
}): JSX.Element => {
  return (
    <div className="custom-radio" onClick={onClick} style={style}>
      <div className="flex items-center">
        {selected ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none">
          <circle cx="8" cy="8.5" r="7.5" stroke="#4BAA79"/>
          <circle cx="8" cy="8.5" r="5" fill="#4BAA79"/>
        </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none">
            <circle cx="8" cy="8.5" r="7.5" stroke="#8F9195"/>
          </svg>
        )}
        <p>{label}</p>
      </div>
    </div>
  );
};

export default CustomRadio;
