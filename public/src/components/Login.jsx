import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import bg from "../assets/signBg2.png"
import styled from "styled-components";
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const Login = ({ user,setUser }) => {
    const navigate = useNavigate();
    // useEffect(() => {
    //     if (user) {
    //         navigate('/')
    //     }
    // })
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    const toastContent = {
        position: 'bottom-right',
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidation()) {
            const { password, email } = data;
            try {

                const user = await axios.post("http://localhost:4000/medisync/login", {
                  email, password
                }, {
                  withCredentials: true
                })
                if (user.status === 200) {
                    setUser(user)
                    toast.success("Logged in", toastContent)
                    navigate('/');
                }

            }
            catch (err) {
                if (err.response && err.response.status === 404) {
                    toast.error("email not found", toastContent);
                } else if (err.response && err.response.status === 401) {
                    toast.error("Invalid password", toastContent);
                } else {
                    console.log(err);
                }
            }
        }
    }

    const handleValidation = () => {
        const { password, email } = data;
        if (password.length < 4) {

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
                <div className="sign font-josefin">
                    <div className="content">
                        <h1>Healing Lives Together</h1>
                        <h2>Please Login</h2>
                        <form onSubmit={handleSubmit}>
                            <label className="col-lg-6 d-block m-auto ">
                                <span className="d-block my-2 fs-5 fw-semibold ">Email</span>
                                <input type="text" placeholder='John Doe' className="w-100" name="email" value={data.email} onChange={handleChange} />
                            </label>
                            <label className="col-lg-6 d-block m-auto  ">
                                <span className="d-block my-2 fs-5 fw-semibold ">Password</span>
                                <input type="password" placeholder='6+ characters' className="w-100" name="password" value={data.password} onChange={handleChange} />
                            </label>
                            <button className="group relative h-12  overflow-hidden rounded-lg bg-white text-lg shadow">
                                <div className="absolute inset-0 w-3 bg-[#70adca] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                <span className="relative text-[#70adca] group-hover:text-white">Login</span>
                            </button>
                            <span className="ac">Don't Have an Account? <Link className="text-blue-600" to={"/signup"}>Register</Link></span>
                        </form>
                    </div>
                </div>
            </FormContainer>
        </>
    )
}

const FormContainer = styled.div`
.sign{
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
  width: 50%;
  margin: 0 auto;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  
}

h1{
  margin: 40px 0 10px ;
  font-size: 3rem;
  font-weight: 800;
}

h2{
  font-size: 2.7rem;
  font-weight:bolder;
  color: #70adca;
  margin-bottom: 10px;
}

p{
  margin: 0 100px;
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 20px;
}

form{
  width: 70%;
  margin: 0 40px;
}


label span{
  font-weight: 600;
}
label input{
  width: 80%;
  padding: 8px 12px;
  margin-bottom: 30px;
  background: #f0f4fc;
  border-radius: 8px;
  border: none;
  outline: none;
  
}
label input:focus{
  outline: 2px solid #70adca;
}

form button{
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


@media screen and (max-width:1066px) {
  h1{
      font-size: 2.5rem;
  }
  
  h2{
      font-size: 2rem;
  }
  
  
  label input{
      width: 100%;
  }
  form button{
      margin: 10px auto;
      padding: 4px 80px;
      font-size: 1rem;
      
  }
}
@media screen and (max-width:813px) {
  h1{
      font-size: 1.5rem;
  }
  .content{
      width: 80%;
  }
  h2{
      font-size: 1.2rem;
  }
  
  
  label input{
      width: 100%;
  }
  form button{
      margin: 10px auto;
      padding: 4px 70px;
      font-size: 1rem;
      
  }
}
@media screen and (max-width:502px) {
  h1{
      font-size: 1rem;
  }
  
  h2{
      font-size: 1rem;
  }
  
  p{
      display: none;
  }
  label input{
      width: 100%;
  }
  form button{
      margin: 10px auto;
      padding: 2px 40px;
      font-size: 1rem;
      
  }
  .ac{
      margin: 5px auto 15px;
      font-size: 1rem;
  }
  .content{
      width: 80%;
      
  }
} 
`;


export default Login