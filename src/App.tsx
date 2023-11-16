import { BrowserRouter } from "react-router-dom";

//routes
import Router from "./routes";

//styles
import './App.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
