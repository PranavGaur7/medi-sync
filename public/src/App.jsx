import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"

 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
