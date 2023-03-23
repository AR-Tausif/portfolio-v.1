import React from "react";
import Banner from "./banner/Banner";
import Navbar from "./navbar/Navbar";
import WorkProcess from "./work_process/WorkProcess";

const processeData =[
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
];
const portfolioData =[
    {
        image: "https://media.discordapp.net/attachments/1008571080300052482/1088504284687126632/Christoph_joe_biden_taking_his_pills_cyberpunk_6fd7be88-f2a1-4dc3-bd92-6d25d3eda46e.png?width=609&height=609",
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
const Components =()=>{
    return(
        <div>
            <Navbar />
            <Banner />
            <WorkProcess name="Work Process" processData={processeData}/>
            <WorkProcess name="Portfolio" processData={portfolioData} check="true"/>
        </div>
    )
}




export default Components;