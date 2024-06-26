import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {



  return (
    <>
      <div className='font-josefin' style={{ backgroundImage: "url('')" }}>
        <Navbar />

        <div className=''>{/*Info Section*/}
          <div className='flex justify-center align-middle bg-stone-50 p-32'>
            <div className='p-20 w-1/2'>
              <p>We are here for You</p>
              <p className=' text-8xl'>MediSync</p>
              <p className=''>By prioritizing convenience, accessibility, and accuracy, our platform aims to transform healthcare delivery, ensuring timely intervention and improving overall patient outcomes.</p>
              <button className="group relative h-12 w-64 overflow-hidden rounded-lg bg-white text-lg border mt-10">
                <div className="absolute inset-0 w-3 bg-[#70adca] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-[#70adca] group-hover:text-white"><Link to={'/appointment'}>Make An Appointment</Link></span>
              </button>
            </div>
            <div>
              <img src="src/assets/1.png" alt="" className='w-[40em] h-[25em]' />
            </div>
          </div>

          <div className='flex justify-center align-middle bg-stone-50 p-32'>
            <div>
              <img src="src/assets/2.png" alt="" className='w-[30em] h-[20em]' />
            </div>
            <div className='p-20 w-1/2'>
              <p className=' text-8xl'>About Us</p>
              <p className=''>Through cutting-edge AI technology and web development tools, our platform offers a comprehensive solution for diagnosing and treating illnesses. Patients can input their symptoms into the portal, where our AI model predicts potential diseases in real-time. This information enables us to connect patients with suitable healthcare professionals and reserve hospital beds for necessary procedures swiftly and efficiently.</p>
              <button className="group relative h-12 w-36 overflow-hidden rounded-lg bg-white text-lg border mt-10">
                <div className="absolute inset-0 w-3 bg-[#70adca] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-[#70adca] group-hover:text-white"><Link to={'/signup'}>Signup Now</Link></span>
              </button>
            </div>

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
      </div>
    </>
  )
}

export default Home