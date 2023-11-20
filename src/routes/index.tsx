import { Routes, Route, Navigate } from "react-router-dom";

//components
import Elements from "../pages/elements/Elements"

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="elements" replace />} />
        <Route path="/elements" element={<Elements />} />
    </Routes>
  )
}

export default Router;