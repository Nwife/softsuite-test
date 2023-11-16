import { Routes, Route } from "react-router-dom";

//components
import Dashbaord from "../pages/dashboard/Dashbaord";

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashbaord />} />
    </Routes>
  )
}

export default Router;