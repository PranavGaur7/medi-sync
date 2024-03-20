import React, { useState } from 'react'
import DepartmentLi from './DepartmentLi'
import hero from "../assets/hero-bg.jpg"
import styled from "styled-components"
const DepartMent = () => {
    const [departments, SetDepartments] = useState(["Cardio", "Neuro", "Orthopadics", "ENT", "Pediatries", "Sexologist", "Physciatrist", "Dermatology"])
    return (
        <>
            <Container>
                <div className="bg-fixed relative h-screen w-screen bg-cover bg-no-repeat home"></div>
                <div></div>
                {/* {departments.map((department) => {
                    <DepartmentLi department={department} />
                })} */}
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