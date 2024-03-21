import React, { useState } from 'react'
import DepartmentLi from './DepartmentLi'
import hero from "../assets/hero-bg.jpg"
import styled from "styled-components"
const DepartMent = () => {
    const [departments, SetDepartments] = useState(["Cardio", "Neuro", "Orthopadics", "ENT", "Pediatries", "Sexologist", "gynecologist", "Dermatology"])
    const [icons, SetIcons] = useState([<i class='bx bx-donate-heart' ></i>, <i class='bx bx-brain' ></i>, <i class='bx bx-bone' ></i>, <i class='bx bx-low-vision' ></i>, <i class='bx bxs-baby-carriage' ></i>, <i class='bx bx-male-sign' ></i>, <i class='bx bx-female-sign'></i>, <i class='bx bxl-medium-old' ></i>])
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
                            <DepartmentLi key={index} icons={icons} department={department} index={index} />
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