import React from "react";
import Process from "./Process";


const WorkProcess =(props)=>{
    // console.log(props);
    return(
        <div className="container mx-auto mt-28">
            <h3 className="text-5xl font-bold text-center">{props.name}</h3>
            <div className="mt-20">
            <div class="grid grid-cols-4 gap-10">
                <Process image={props.processData[0].image} title={props.processData[0].title} desc={props.processData[0].description} hell="night" />
                <Process image={props.processData[1].image} title={props.processData[1].title} desc={props.processData[1].description} />
                <Process image={props.processData[2].image} title={props.processData[2].title} desc={props.processData[2].description} />
                <Process image={props.processData[3].image} title={props.processData[3].title} desc={props.processData[3].description} />
                </div>
            </div>
        </div>
    )
}


export default WorkProcess;