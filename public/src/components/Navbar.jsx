import { Link } from "react-router-dom"

export default function Navbar(){
    return <>
    <div className=' flex justify-evenly align-middle h-20 '>{/*navbar */}
          <div className='my-auto'>
            <img src="" alt="LOGO" />
          </div>
          <div className='my-auto'>
            <ul className='flex'>
              <li className='mx-2'><button>Home</button></li>
              <li className='mx-2'><button>About</button></li>
              <li className='mx-2'><button>Doctors</button></li>
              <li className='mx-2'><button>Contact</button></li>
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