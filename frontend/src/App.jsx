import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./components/login";
import Signin from "./components/signin";
import DoctorDash from "./components/d_dash";
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/doctor_dash" element={<DoctorDash />} />
     
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
