import React from "react";
import Process from "./Process";

const processData =[
    {
        image: "https://hellopranto.com/wp-content/uploads/2022/07/1-768x768.jpg",
        title:"Empathise",
        description: "Understanding of the people, I'm designing for and the problem I'm trying to solve"
    },
    {
        image: "https://hellopranto.com/wp-content/uploads/2022/07/2-768x768.jpg",
        title:"Ideate",
        description: "It's a creative process where I generate ideas through ideation techniques."
    },
    {
        image: "https://hellopranto.com/wp-content/uploads/2022/07/3.jpg",
        title:"Concept",
        description: "The idea I get from the idea stage, explained via a collection of sketches, images, and a written statement."
    },
    {
        image: "https://hellopranto.com/wp-content/uploads/2022/07/4.jpg",
        title:"Execution",
        description: "This is the final step where I start to execute the final concept and hand over the client.	"
    },
]
const WorkProcess =()=>{
    return(
        <div className="container mx-auto mt-28">
            <h3 className="text-5xl font-bold text-center">Work Process</h3>
            <div className="mt-20">
            <div class="grid grid-cols-3 gap-y-10">
                <Process image={processData[0].image} title={processData[0].title} desc={processData[0].description} />
                <Process image={processData[1].image} title={processData[1].title} desc={processData[1].description} />
                <Process image={processData[2].image} title={processData[2].title} desc={processData[2].description} />
                <Process image={processData[3].image} title={processData[3].title} desc={processData[3].description} />
                </div>
            </div>
        </div>
    )
}


export default WorkProcess;