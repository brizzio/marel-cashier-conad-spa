/* eslint-disable react/prop-types */
import React from "react";

export const AppLayout = ({
    children
}) => {


    const windowSize = React.useRef([window.innerWidth, window.innerHeight]);
    
    console.log('Width:', windowSize.current[0])
    console.log('Height:', windowSize.current[1])
    
    const headerHeight = React.useRef(window.innerHeight * 0.05);
    const contentHeight = React.useRef(window.innerHeight * 0.9);


    return(
    <div  className="flex w-screen h-screen bg-gray-500 items-start justify-center">
       <div className="relative flex flex-col w-10/12 h-full p-3 bg-gray-100 "
       style={{backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/006/469/228/small/abstract-white-background-with-halftone-texture-free-vector.jpg)'}}>
        <div className={`w-full h-[${headerHeight.current}px] py-[1rem] bg-white bg-opacity-70 border border-stone-600 rounded-xl flex flex-row items-center justify-start px-3`}>
            <img 
                className="w-[4rem]"
                src='/marel-logo.png' />
        </div>
        <div className={`grow w-full mt-2  rounded drop-shadow-lg debug`}>
            {children}
        </div>
        <div className={`w-full  h-[${headerHeight.current}px] py-[1rem] mt-2 bg-white bg-opacity-70 rounded-xl flex flex-row items-center justify-end px-3`}>
            <img 
            className="h-[0.75rem]"
            src='/bizerba-logo.png' />
        </div>
       </div>

    </div>
    )
    
    };