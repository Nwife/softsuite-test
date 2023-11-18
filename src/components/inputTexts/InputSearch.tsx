import { FC } from "react";

//icons
import search from "../../assets/icons/search.svg";

//styles
import "./index.scss";

interface Props {
  style?: object;
  placeholder?: string;
}

const InputSearch: FC<Props> = (props): JSX.Element => {
  const {
    style = {},
    placeholder
  } = props;

  return (
    <div className="flex items-center top-bar__input">
      <input
          type="text"
          placeholder={placeholder}
      />
      <button style={{ ...style }}><img src={search} alt="" /></button>
    </div>
  )
}

export default InputSearch;