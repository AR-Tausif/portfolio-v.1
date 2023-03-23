import React from "react";

const Navbar =()=>{
    return(
        <nav className="bg-gray-700">
            <div className="flex justify-between items-center text-white py-3 container mx-auto">
            <div>
            <h2 className="text-3xl font-bold">Tausif Ahmed</h2>
            </div>
            <div>
                <ul className="flex gap-10 font-semibold">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Service</li>
                    <li>SignUp</li>
                </ul>
            </div>
            <div className="font-bold">
                <button className="p-4 hover:border-b-4 mr-7 border-white hover:py-0">LOG IN</button>
                <button className="p-4 bg-white rounded text-black">SIGN UP</button>
            </div>
            </div>
        </nav>
    )
}


export default Navbar;