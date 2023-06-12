import React from 'react';
import { useNavigate } from 'react-router-dom';
import useIsMobile from '../hooks/useIsMobile';
import { useIp } from '../hooks/useIp';
import useFlag from '../hooks/useFlag'




//https://www.kindacode.com/snippet/tailwind-css-make-a-child-element-fill-the-remaining-space/


export const LandingPage = () => {

    const navigate = useNavigate();


    const isMobile = React.useRef(useIsMobile())
    const {data, isLoading, error} = useIp()
    const {getFlagFace} = useFlag()
    
    const navigateTo = (url) => {
    navigate(url)
    }

    //const { initialize } = useScanner()

    const startCashier = ()=>{
       // initialize()
        navigateTo("/cashier")
    }

    const flag = (cIso)=>getFlagFace(cIso)

    console.log('isMobile', isMobile.current)

    const tabBtnClass = `w-full py-[4rem]  text-stone-800 font-thin rounded-lg shadow-xl text-3xl bg-teal-800 bg-opacity-20 border-white/30 border-t-2 border-l-2 border-b-4 border-r-4 `

    const info = `text-stone-800 font-thin rounded-lg shadow-xl text-3xl bg-teal-800 bg-opacity-20 border-white/30 border-t-2 border-l-2 border-b-4 border-r-4 `

    const swapBtnClass = ` py-4 px-4 bg-white text-stone-800 font-semibold rounded-lg shadow-md `

    const regularBtnClass = `bg-white text-stone-800 font-semibold 
    border-2 border-teal-900 rounded-lg shadow-lg`

    const largeBtnClass = `col-span-2  bg-white bg-opacity-90 text-teal-900 font-semibold border-2 border-teal-900 rounded-lg shadow-lg;`

    return(

    <div  className="flex w-screen h-screen bg-gray-500 items-start justify-center">
       <div className="relative flex flex-col w-10/12 h-full p-3 bg-gray-100 "
       style={{backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/006/469/228/small/abstract-white-background-with-halftone-texture-free-vector.jpg)',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat', 
       backgroundSize: 'cover' 
       
       }}>
       

       <div className="flex items-center justify-center w-full h-full">
                <div className={`flex absolute top-2 w-4/12 h-[4rem] ${info} items-center justify-center px-4`}>
                {isLoading?<h1>loading...</h1>:
                 <div className="flex flex-row items-center">
                 <img 
                className="p-2 h-[5rem]"
                src={data?flag(data.countryIso):''} />
                 
                 <span className="p-2 text-3xl h-full">{data?.ip}</span>
                 <span>{data?.timeZone}</span>
                 </div>
                 }
                 </div>


            <div className="flex flex-col items-center justify-center w-4/12 gap-8">
               
                
                <button 
                    className={`${tabBtnClass}`}
                    onClick={startCashier}
                >Apri un Cassa</button>
                <button 
                    className={`${tabBtnClass}`}
                    onClick={startCashier}
                >Entra come Amministratore</button>
            </div>

            <img 
                className="absolute left-0 top-0 p-2 h-[4rem]"
                src='/marel-logo.png' />


            <img 
                className="absolute right-0 bottom-0 p-2 h-[3rem]"
                src='/bizerba-logo.png' />
        </div>

    </div>
    </div>
       
            
         
      
    )
    
    };

