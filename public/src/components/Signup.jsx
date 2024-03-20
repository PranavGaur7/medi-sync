import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import bg from "../assets/signBg2.png"
import styled from "styled-components";
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
// import { registerRoutes } from './utils/ApiRoutes';

const Signup = ({ setIsloggedIn, isLoggedIn }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  })
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (handleValidation()) {
        const { password, confirmPassword, username, email } = data;
        // const user = await axios.post(registerRoutes,{
        //   username,email,password
        // },{
        //   withCredentials: true
        // })
        // if(user.data.code === 11000 && user.data.keyValue.hasOwnProperty('username')){
        //   toast.error("username should be unique", toastContent)
        // }
        // else if(user.data.code === 11000 && user.data.keyValue.hasOwnProperty('email')){
        //   toast.error("email should be unique", toastContent)
        // }
        // else{
        //   setIsloggedIn(true);
        //   toast.success("Signed in", toastContent)
        //   navigate('/avatar');
        // }
      }
    }
    catch (err) {
      console.log(err);
    }
  }
  const toastContent = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'light'
  }
  const handleValidation = () => {
    const { password, confirmPassword, username, email } = data;
    if (email === "") {

      toast.error("Email is required", toastContent)
      return false;
    }
    else if (password !== confirmPassword) {
      toast.error("Password and ConfirmPassword should be same", toastContent)
      return false;
    }
    else if (username.length < 4) {
      toast.error("Username should be atleast 4 characters", toastContent)
      return false;
    }
    else if (password.length < 4) {

      toast.error("Password should be atleast 6 characters", toastContent)
      return false;
    }
    return true;
  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  return (
    <>
      <FormContainer>
        <div className="font-josefin sign">
          <div className="content">
            <h1>Healing Lives Together</h1>
            <h2>Register</h2>
            <p>Welcome to MediSync! Experience compassionate care and cutting-edge technology tailored to your needs. Sign up now to access our services and stay connected with your healthcare team.
            </p>
            <form onSubmit={handleSubmit}>
              <label className="col-md-6 col-12 ">
                <span className="d-block my-md-2 fs-5 fw-semibold ">Username</span>
                <input type="text" placeholder='Mohit Ranjan' name="username" value={data.username} onChange={handleChange} />
              </label>
              <label className="col-md-6 col-12 ">
                <span className="d-block my-md-2 fs-5 fw-semibold ">Email</span>
                <input type="email" placeholder='MohitRanjan@example.com' name="email" value={data.email} onChange={handleChange} />
              </label>
              <label className="col-md-6 col-12 ">
                <span className="d-block my-md-2 fs-5 fw-semibold ">Password</span>
                <input type="password" placeholder='6+ characters' name="password" value={data.password} onChange={handleChange} />
              </label>
              <label className="col-md-6 col-12 ">
                <span className="d-block my-md-2 fs-5 fw-semibold ">Confirm Password</span>
                <input type="password" placeholder='6+ characters' name="confirmPassword" value={data.confirmPassword} onChange={handleChange} />
              </label>
              <button className="group relative h-12  overflow-hidden rounded-lg bg-white text-lg shadow">
                <div className="absolute inset-0 w-3 bg-[#70adca] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-[#70adca] group-hover:text-white">Sign Up</span>
              </button>
              <span className="ac">Already Have an Account? <Link className="text-blue-600" to={"/login"}>Login</Link></span>
            </form>
          </div>
        </div>
      </FormContainer>
      <ToastContainer />
    </>
  )
}
const FormContainer = styled.div`.sign{
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sign::before {
  content: "";
  background: url('${bg}') no-repeat center center/cover;
  filter: none;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -2;
  top: 0;
  left: 0;
  
}

.sign::after{
  content: "";
  background: linear-gradient(40deg, transparent 0%, transparent 50%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 100%);
  opacity: 0.9;
  filter:none;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  top: 0;
  left: 0;
}

.content{
  width: 70%;
  margin: 0 auto;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  
}

.content h1{
  margin: 40px 0 10px ;
  font-size: 3rem;
  font-weight: 800;
}

.content h2{
  font-size: 2.7rem;
  font-weight:bolder;
  color: #70adca;
  margin-bottom: 10px;
}

.content p{
  margin: 0 100px;
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.content form{
  width: 70%;
  margin: 0 40px;
  /* padding-left: 30px; */
}


.content label span{
  font-weight: 600;
}
.content label input{
  width: 80%;
  padding: 8px 12px;
  margin-bottom: 30px;
  background: #f0f4fc;
  border-radius: 8px;
  border: none;
  outline: none;
  
}
.content label input:focus{
  outline: 2px solid #70adca;
}

.content  button{
  /* width: 250px; */
  display: block;
  margin: 20px auto;
  border: none;
  outline: none;
  background-color: #70adca;
  color: white;
  padding: 6px 100px;
  font-size: 1.3rem;
  font-weight: bolder;
  border-radius: 8px;
  text-align: center;
  
}
.ac{
  text-align: center;
  display: block;
  margin: 10px auto 30px;
  font-size: 1.1rem;
}

.ac a{
  text-decoration: none;
}


@media screen and (max-width:768px) {
  .content h1{
      font-size: 2rem;
  }
  
  .content h2{
      font-size: 1.7rem;
  }
  
  .content p{
      display: none;
  }
  .content label input{
      width: 100%;
  }
  .content  button{
      margin: 10px auto;
      padding: 2px 80px;
      font-size: 1rem;
      
  }
}
@media screen and (max-width:502px) {
  .content h1{
      font-size: 1rem;
  }
  
  .content h2{
      font-size: 1rem;
  }
  
  .content p{
      display: none;
  }
  .content label input{
      width: 100%;
  }
  .content  button{
      margin: 10px auto;
      padding: 2px 60px;
      font-size: 1rem;
      
  }
  .ac{
      margin: 5px auto 15px;
      font-size: 1rem;
  }
  .content{
      width: 80%;
      
  }
}`
export default Signup