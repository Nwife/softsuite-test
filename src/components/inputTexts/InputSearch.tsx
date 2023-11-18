import { FC } from "react";

//icons
import search from "../../assets/icons/search.svg";

//styles
import "./index.scss";

interface Props {
  style?: object;
  inputStyle?: object;
  placeholder?: string;
}

const InputSearch: FC<Props> = (props): JSX.Element => {
  const {
    style = {},
    placeholder,
    inputStyle
  } = props;

  return (
    <div className="flex items-center top-bar__input" style={{ ...inputStyle }}>
      <input
          type="text"
          placeholder={placeholder}
          style={{ ...inputStyle }}
      />
      <button style={{ ...style }}><img src={search} alt="" /></button>
    </div>
  )
}

export default InputSearch;