import React from "react";


const Process = ( props ) =>{
    return (
        <div
            class="rounded-lg bg-white shadow-lg text-center">
            <a href="#!">
            <img
                class="rounded-t-lg"
                src={props.image}
                alt="" />
            </a>
            <div class="p-6">
            <h5
                class="mb-2 text-3xl leading-tight text-neutral-800 font-bold">
                {props.title}
            </h5>
            <p class="mb-3 text-base text-neutral-600 text-xl">
                {props.desc}
            </p>
            {
                props.hell? <div className="flex gap-7 justify-center"><button
                type="button"
                class="inline-block rounded bg-blue-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light">
                Show Code
            </button><button
                type="button"
                class="inline-block rounded bg-blue-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light">
                Live Site
            </button></div> : ''
            }
            </div>
        </div>
    )
}

export default Process;