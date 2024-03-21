import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
const DepartmentLi = ({ icons, department, index,branch,setBranch }) => {
  const navigate = useNavigate();
  const handleClick=(e)=>{
    e.preventDefault();
    setBranch(department);
    navigate('/appointment')
  }
  return (
    <div className="flex flex-col items-center w-72 rounded-2xl bg-white h-80 mx-5 my-4  shadow">
      <h1 className="mt-12 text-6xl text-[#70adca]">{icons[index]}</h1>
      <h2 className="text-2xl font-semibold mt-2 text-[#70adca]">{department}</h2>
      <button className="group mt-11 relative h-12  overflow-hidden rounded-lg bg-white text-lg shadow px-5">
        <div className="absolute inset-0 w-3 bg-[#70adca] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-[#70adca] group-hover:text-white" onClick={handleClick}>  Consult</span>
      </button>
    </div>
  )
}
const container = styled.div`
  
`
export default DepartmentLi