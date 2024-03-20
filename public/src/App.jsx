import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import DepartMent from "./components/DepartMent"
import AppointmentPage from "./components/AppointmentPage"

 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/department" element={<DepartMent/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/appointment" element={<AppointmentPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
