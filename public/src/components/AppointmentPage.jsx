import Navbar from "./Navbar"

export default function AppointmentPage() {

    return <>
        <Navbar />
        <div className=" bg-stone-100 p-10">
            <div className=" w-1/3 text-center mx-auto bg-white mb-4 ">
                <div className=" rounded-md border">
                    <p>Patient Name: Mohit Ranjan</p>
                    <p>Age: 19</p>
                    <p>Diseases: Typhoid</p>

                </div>
            </div>
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
            <div className="flex justify-evenly align-middle text-center ">
                <div className=" rounded-md border p-3 bg-white">
                    <p>Doctor: Ramesh Signh</p>
                    <p>Availabe: Weekdays</p>
                    <p>TimeSlot: 9:00 - 12:00</p>
                </div>
                <div className=" rounded-md border p-3 bg-white">
                    <p>Doctor: Ramesh Signh</p>
                    <p>Age: 19</p>
                    <p>Diseases: Typhoid</p>
                </div>
                <div className=" rounded-md border p-3 bg-white">
                    <p>Patient Name: Mohit Ranjan</p>
                    <p>Age: 19</p>
                    <p>Diseases: Typhoid</p>
                </div>
            </div>
            
        </div>
    </>
}