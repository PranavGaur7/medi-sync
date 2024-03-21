import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import DepartMent from "./components/DepartMent"
import AppointmentPage from "./components/AppointmentPage"
import { useEffect, useState } from "react"

 
function App() {
  const [user,setUser]  = useState({});
  const [branch,setBranch] = useState({});
  useEffect(()=>{
    if(user){
      console.log(user);
    }
  },[user])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup user={user} setUser={setUser}/>} />
          <Route path="/department" element={<DepartMent branch={branch} setBranch={setBranch} />} />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/" element={<Home/>} />
          <Route path="/appointment" element={<AppointmentPage user={user} branch={branch} />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
