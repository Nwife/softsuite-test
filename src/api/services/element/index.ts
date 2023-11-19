import { elementUrl } from "../../endpoints/index";

import { get } from "../../../helpers/axios";

const getElements = () => {
  return get(elementUrl);
};

const elementServices = {
    getElements
};

export default elementServices;
