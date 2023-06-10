/* eslint-disable react/prop-types */
import React from "react";

//https://stackoverflow.com/questions/58222004/how-to-get-parent-width-height-in-react-using-hooks

export const AppLayout = ({
    children
}) => {


    const windowSize = React.useRef([window.innerWidth, window.innerHeight]);

    const appRef = React.useRef()

    const [height, setHeight] = React.useState(null);
    const [width, setWidth] = React.useState(null);
    
    const div = React.useCallback(node => {
        if (node !== null) {
          setHeight(Math.trunc(node.getBoundingClientRect().height));
          setWidth(Math.trunc(node.getBoundingClientRect().width));
        }
      }, []);
    
    const headerHeight = Math.floor(window.innerHeight * 0.05);
    

    function pixelsToRem(pixels) {    
        return pixels / parseFloat(getComputedStyle(document.body).fontSize);
    }
    
    //console.log('Width:', windowSize.current[0], pixelsToRem(headerHeight))
    //console.log('Height:', windowSize.current[1])

    return(
    <div  className="flex w-screen h-screen bg-gray-500 items-start justify-center">
       <div ref={div} className="relative flex flex-col w-10/12 h-full p-3 bg-gray-100 "
       style={{backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/006/469/228/small/abstract-white-background-with-halftone-texture-free-vector.jpg)'}}>
        <div className={`w-full h-[${pixelsToRem(headerHeight)}rem] py-[1rem] bg-white bg-opacity-70 border border-stone-600 rounded-xl flex flex-row items-center justify-between px-3 gap-2`}>
            <img 
                className="w-[4rem]"
                src='/marel-logo.png' />
            <div className={`flex gap-3`}>
                <span>
                    Screen: {windowSize.current[0]} X {windowSize.current[1]} 
                </span>
                <span>
                    Application: {width} X {height} 
                </span>
                <span>
                    Font:{getComputedStyle(document.body).fontSize}
                </span>
            </div>
        </div>
        <div className={`flex flex-col grow w-full mt-2  rounded drop-shadow-lg bg-white bg-opacity-20`}>
        
            {children}

        </div>
        <div className={`w-full  h-[${pixelsToRem(headerHeight)}rem]  py-[1rem] mt-2 bg-white bg-opacity-70 rounded-xl flex flex-row items-center justify-end px-3`}>
            <img 
            className="h-[0.75rem]"
            src='/bizerba-logo.png' />
        </div>
       </div>

    </div>
    )
    
    };