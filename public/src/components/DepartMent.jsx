import React, { useState } from 'react'
import DepartmentLi from './DepartmentLi'
import hero from "../assets/hero-bg.jpg"
import styled from "styled-components"
const DepartMent = () => {
    const [departments, SetDepartments] = useState(["Cardio", "Neuro", "Orthopadics", "ENT", "Pediatries", "Sexologist", "Physciatrist", "Dermatology"])
    return (
        <>
            <Container>
                <div className="font-josefin  bg-fixed -z-20 h-2/3 w-screen bg-cover bg-no-repeat home">

                    <div className="relative top-36 left-24 mb-14">
                        <h1 className="text-4xl font-bold text-[#2c4964]">WELCOME TO MEDYSYNC</h1>
                        <h2 className="text-xl text-[#2c4964]">We are team of talented doctors making peoples lifestyle healthy</h2>
                    </div>
                    <div className="flex items-center justify-center flex-wrap mt-56 mb-20">
                        {departments.map((department, index) => (
                            <DepartmentLi key={index} department={department} />
                        ))}
                    </div>
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    .home{
        background-image:url(${hero});
        /* background-color: rebeccapurple; */
    }
`

export default DepartMent