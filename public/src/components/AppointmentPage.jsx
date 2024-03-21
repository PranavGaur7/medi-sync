import { useEffect, useState } from "react";
import Navbar from "./Navbar"
import axios from "axios";

export default function AppointmentPage() {
    const [appointments, setAppointments] = useState([]);

    // useEffect(() => {
    //     fetchAppointments();
    // }, []);

    // const fetchAppointments = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:4000/doctor/appointments');
    //         setAppointments(response.data);
    //     } catch (error) {
    //         console.error('Error fetching appointments:', error);
    //     }
    // };

    return <>
        <Navbar />
        <div className=" bg-stone-100 p-10">
            {appointments.map(appointment => (
                <div key={appointment._id} className=" w-1/3 text-center mx-auto bg-white mb-4">
                    <div className=" rounded-md border">
                        <p>Patient Name: {appointment.name}</p>
                        <p>Disease: {appointment.disease}</p>
                        <p>Doctor: {appointment.doctor}</p>
                        <p>Time: {appointment.time}</p>
                    </div>
                </div>
            ))}
            <div className="flex justify-center align-middle">
                <div className="w-[20em]">
                    <img src="src/assets/3.png" alt="" />
                </div>
                <div className="text-center p-10">
                    <label>Diseases</label>
                    <br />
                    <input className="bg-white w-[20em] rounded-sm" placeholder="Type Your Diseases"></input>
                    <br />
                    <button className="group relative h-12 w-32 overflow-hidden rounded-lg bg-white text-lg border my-3">
                        <div className="absolute inset-0 w-3 bg-[#70adca] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-[#70adca] group-hover:text-white ">Submit</span>
                    </button>
                </div>
            </div>
        </div>

        <div className=" bg-stone-100 p-10">
            <div className="flex justify-evenly align-middle text-center my-3">
                <button className=" rounded-md border p-3 bg-white">
                    <p>Doctor: Ramesh Signh</p>
                    <p>Available: Weekdays</p>
                    <p>TimeSlot: 9:00 - 12:00</p>
                </button>
                <button className=" rounded-md border p-3 bg-white">
                    <p>Doctor: Ramesh Signh</p>
                    <p>Available: Weekdays</p>
                    <p>TimeSlot: 9:00 - 12:00</p>
                </button>
                <button className=" rounded-md border p-3 bg-white">
                    <p>Patient Name: Mohit Ranjan</p>
                    <p>Available: Mon-Thr</p>
                    <p>Diseases: Typhoid</p>
                </button>
            </div>
        </div>
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