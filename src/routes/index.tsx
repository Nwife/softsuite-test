import { Routes, Route } from "react-router-dom";

//components
import Dashboard from "../pages/dashboard/Dashboard";
import Elements from "../pages/elements/Elements"

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/element setup/element" element={<Elements />} />
    </Routes>
  )
}

export default Router;