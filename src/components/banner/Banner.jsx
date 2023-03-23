import React from "react";


const Banner = () =>{
    return(
        <div style={{height: '85vh'}} className="bg-gray-800 flex items-center">
            <div className="flex justify-between items-center container mx-auto">
                <div>
                    <h2 className="text-8xl font-bold text-white">Hello!</h2>
                    <h2 className="text-8xl font-bold text-white pt-5 pb-8">I am TAISIF.</h2>
                    <p className="text-2xl text-gray-300">A Developer who enjoys creating <br /> innovative, user-centric design for you.</p>
                    <div className="mt-5">
                        <button className="p-4 text-white hover:text-black font-semibold px-14 rounded text-xl bg-blue-700 hover:bg-gray-200">Resume</button>
                        <button className="p-4 font-semibold border-white border-2 text-white hover:bg-gray-400 ml-3 rounded px-14 text-xl">Portfolio</button>
                    </div>
                </div>
                <div className="p-5 bg-gray-300 rounded-lg mr-52">
                    <img className="w-96" src="public/image_brand.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}


export default Banner;