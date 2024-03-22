import { useEffect, useState } from "react";
import Navbar from "./Navbar"
import axios from "axios";


export default function AppointmentPage({branch,setBranch,user}) {
    
    const [appointment, setAppointment] = useState(false);
    const [doctorDetails, setDoctorDetails] = useState({
        name: "",
        department: "",
    });

    const getUserDetails = async () => {
        try {
            const response = await axios.get("http://localhost:4000/doctor/doctorList");
            console.log(response);
            const res = response.data;
            const cardn = res.filter(res => res.department === "Cardio");
            const dep = cardn.map(cardn => cardn.name);
            console.log(dep);
            
            console.log(res);
            setDoctorDetails(response.data);
            console.log(doctorDetails[0].name);
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    }
    
    useEffect(()=>{
        getUserDetails();
        if(branch){
            console.log(branch);
            console.log(user);
        }
    },[branch])
    return <>
        <Navbar />
        <div className=" bg-stone-100 p-10">
            <div className=" w-1/3 text-center mx-auto  mb-4 ">
                <div className=" rounded-xl border bg-white px-7 py-6">
                    <p className="text-2xl font-semibold text-[#70adca]">Patient Name: Mohit Ranjan</p>
                    <p className="text-xl font-medium text-[#70adca] mt-2">Age: 19</p>

                </div>
            </div>
            <div className="flex justify-center align-middle">
                <div className="w-[20em]">
                    <img src="src/assets/3.png" alt="" />
                </div>
                <div className="text-center p-10">
                    <label className="text-3xl text-[#70adca] font-semibold mb-3">Diseases</label>
                    <br />
                    <input className="bg-white w-[20em] rounded-sm px-3 py-2 outline-none focus:outline focus:outline-[#70adca]" placeholder="Type Your Diseases"></input>
                    <br />
                    <button className="group mt-5 relative h-12 w-32 overflow-hidden rounded-lg bg-white text-lg border my-3">
                        <div className="absolute inset-0 w-3 bg-[#70adca] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-[#70adca] group-hover:text-white " onClick={()=>{setAppointment(true)}}>Submit</span>
                    </button>
                </div>
            </div>
        </div>

        {appointment && <div className=" bg-stone-100 p-10">
            <p className="text-center text-3xl font-extrabold mb-5">Available Appointments</p>
            <div className="flex justify-evenly align-middle text-center my-3">
                <button className=" rounded-md border p-3 bg-white">
                    <p>Doctor: {doctorDetails[0].name}</p>
                    <p>Available: Weekdays</p>
                    <p>TimeSlot: 9:00 - 12:00</p>
                </button>
                <button className=" rounded-md border p-3 bg-white">
                    <p>Doctor: {doctorDetails[1].name}</p>
                    <p>Available: Weekdays</p>
                    <p>TimeSlot: 13:00 - 15:00</p>
                </button>
                <button className=" rounded-md border p-3 bg-white">
                    <p>Patient Name: {doctorDetails[2].name}</p>
                    <p>Available: Mon-Wed-Fri</p>
                    <p>TimeSlot: 10:00 - 12:00</p>
                </button>
            </div>
        </div>}
        <div className='flex justify-evenly align-middle bg-stone-200 p-10'>{/*footer */}
            <div className='mx-2 text-center'>
                <p className=" font-bold">Contact Us</p>
                <ul>
                    <li>+91 8319382832 - Reception</li>
                    <li>+91 8319382832 - Hospital Manager</li>
                </ul>
            </div>
            <div className='mx-2 text-center'>
                <p className=" font-bold">Branches</p>
                <ul>
                    <li>Cardiology</li>
                    <li>Neurology</li>
                    <li>Dermatology</li>
                    <li>Physciatrist</li>
                    <li>Many More</li>
                </ul>
            </div>
            <div className='mx-2 text-center'>
                <p className=" font-bold">Explore</p>
                <ul>
                    <li>WHO Guidelines</li>
                    <li>Healthcare Tips</li>
                </ul>
            </div>
        </div>
        <div className='flex justify-evenly align-middle bg-slate-900 p-3 text-stone-400'>
            Copyright ©2024 All rights reserved | This  website is made with love by Team BackSpace :)
        </div>
    </>
}