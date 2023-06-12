import React from 'react';
import { useNavigate } from 'react-router-dom';






//https://www.kindacode.com/snippet/tailwind-css-make-a-child-element-fill-the-remaining-space/


export const LandingPage = () => {

    const navigate = useNavigate();
    const navigateTo = (url) => {
    navigate(url)
    }

    //const { initialize } = useScanner()

    const startCashier = ()=>{
       // initialize()
        navigateTo("/cashier")
    }

    const tabBtnClass = `w-full py-4 px-4 bg-white text-stone-800 font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`

    const swapBtnClass = ` py-4 px-4 bg-white text-stone-800 font-semibold rounded-lg shadow-md `

    const regularBtnClass = `bg-white text-stone-800 font-semibold 
    border-2 border-teal-900 rounded-lg shadow-lg`

    const largeBtnClass = `col-span-2  bg-white bg-opacity-90 text-teal-900 font-semibold border-2 border-teal-900 rounded-lg shadow-lg;`

    return(
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex items-center justify-center w-4/12">
                <button 
                    className={`${tabBtnClass}`}
                    onClick={startCashier}
                >Apri un Cassa</button>
                <button 
                    className={`${tabBtnClass}`}
                    onClick={startCashier}
                >Entra come Amministratore</button>
            </div>
        </div>
            
         
      
    )
    
    };

