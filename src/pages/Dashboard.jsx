/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDevice } from '../hooks/useDevice';
import useCashInventory from '../hooks/useCashInventory';
import DisplayBalance from '../components/DisplayBalance';
import MapBox from '../components/MapBox';





//https://www.kindacode.com/snippet/tailwind-css-make-a-child-element-fill-the-remaining-space/


export const DashboardPage = () => {

    const navigate = useNavigate();
    const navigateTo = (url) => {
    navigate(url)
    }

    const {did} = useDevice()
    const {balance} = useCashInventory()

    //const { initialize } = useScanner()

    const startCashier = ()=>{
       // initialize()
        navigateTo("cashier")
    }

    const tabBtnClass = `w-full py-4 px-4 bg-white text-stone-800 font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`

    const swapBtnClass = ` py-4 px-4 bg-white text-stone-800 font-semibold rounded-lg shadow-md `

    const regularBtnClass = `bg-white text-stone-800 font-semibold 
    border-2 border-teal-900 rounded-lg shadow-lg`

    const largeBtnClass = `col-span-2  bg-white bg-opacity-90 text-teal-900 font-semibold border-2 border-teal-900 rounded-lg shadow-lg;`

    

    return(
        <div className="flex items-center justify-between w-full h-full">
            
            <div  className="flex flex-col grow h-full items-center justify-center">
                    
                    <DisplayInfo info={did}/>
                    
                   <DisplayBalance items={balance}/>
                    






                </div>
                
                <div className="flex flex-col items-center justify-center grow">

                        <button
                            className={`${tabBtnClass}`}
                            onClick={startCashier}
                        >StartCashier</button>
                    </div>
            
        </div>
            
         
      
    )
    
    };

    const DisplayInfo = ({info}) =>{

        let data = JSON.stringify(info)=='{}'
        ?{
            id:'',
            company:''
        }
        :info

        return(
            <div  className="flex flex-col items-center justify-center font-thin text-lg">
                    <span>{data?.company}</span>
                    <span>CASSA</span>
                    <span>{data?.id}</span>

            </div>
        )




    }

