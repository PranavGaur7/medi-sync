import { Link } from "react-router-dom"
import logo from "../assets/MediSyncLogo.png"
export default function Navbar(){
    return <>
    <div className=' flex justify-evenly align-middle h-20 '>{/*navbar */}
          <div className='my-auto'>
            <img className="h-20" src={logo} alt="LOGO" />

          </div>
          <div className='my-auto'>
            <ul className='flex'>
              <li className='mx-2'><button><Link to={'/'}>Home</Link></button></li>
              <li className='mx-2'><button><Link>About</Link></button></li>
              <li className='mx-2'><button><Link to={'/department'}>Doctors</Link></button></li>
              <li className='mx-2'><button><Link>Contact</Link></button></li>
              <li className='mx-2'><button><Link to={'/login'}>Login</Link></button></li>
              <li className='mx-2'><button><Link to={'/signup'}>Signup</Link></button></li>
            </ul>
          </div>
          <div className='my-auto'>
            <button className="group relative h-12 w-32 overflow-hidden rounded-lg bg-white text-lg border">
              <div className="absolute inset-0 w-3 bg-[#70adca] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-[#70adca] group-hover:text-white">Emergency</span>
            </button>
          </div>
        </div>
    </>
}