import React from 'react';
import { atom, useAtom } from 'jotai'

import Keyboard from '../components/Keyboard';

//https://www.kindacode.com/snippet/tailwind-css-make-a-child-element-fill-the-remaining-space/


export const CashierPage = () => {

    const [swap, setSwap] = React.useState(false)

    const toggleSwap = () => setSwap(state => !state)

    const tabBtnClass = `w-full py-4 px-4 bg-white text-stone-800 font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`

    const swapBtnClass = ` py-4 px-4 bg-white text-stone-800 font-semibold rounded-lg shadow-md `

    const regularBtnClass = `bg-white text-stone-800 font-semibold 
    border-2 border-teal-900 rounded-lg shadow-lg`

    const largeBtnClass = `col-span-2  bg-white bg-opacity-90 text-teal-900 font-semibold border-2 border-teal-900 rounded-lg shadow-lg;`

    return(
        
        <>
             <div className="flex items-center justify-between w-full flex-row-reverse">
                <div className="flex items-end justify-start gap-2 w-[29rem]">
                    <button className={`${tabBtnClass}`}>01</button>
                    <button className={`${tabBtnClass}`}>02</button>
                    <button className={`${tabBtnClass}`}>03</button>
                    <button className={`${tabBtnClass}`}>04</button>
                    <button className={`${tabBtnClass}`}>05</button>

                </div>
                
                <button className={`${swapBtnClass}`}
                    onClick={toggleSwap}>{swap?'Mancino':'Destro'}</button>
                

            </div>
            
            <div className={`flex grow w-full mt-1 ${swap?'':'flex-row-reverse'}`}>
               
                <div className="flex flex-col h-full w-[40rem] p-1">
                    <div className="grid grid-flow-row grid-cols-3 grid-rows-2 gap-1">
                    <button className={`grid-btn`}>FUNZ</button>
                    <button className={`grid-btn`}>SCONTO VALORE</button>
                    <button className={`grid-btn`}>SCONTO %</button>
                    <button className={`grid-btn`}>APERTURA CASSA</button>
                    <button className={`grid-btn`}>RIST. SCONTRINI</button>
                    <button className={`grid-btn`}>PARC/ RICUP. SCONTRINI</button>
                    </div>
                    <Keyboard/>
                </div>
                <div className="grow grid grid-flow-row grid-cols-4 grid-rows-7 gap-1.5 px-3 w-[20rem]">
                    <button className={`${regularBtnClass}`}>CONTR. PREZZO ART</button>
                    <button className={`${regularBtnClass}`}>RESO <br/> ART</button>
                    <button className={`${regularBtnClass}`}>STORNO ART PRECEDENTE</button>
                    <button className={`${regularBtnClass}`}>STORNO ULT ARTICOLO</button>

                    <button className={`${largeBtnClass}`}>SHOP BIO PICCOLA</button>
                    <button className={`${largeBtnClass}`}>SHOP BIO GRANDE</button>

                    <button className={`${largeBtnClass}`}>G. VARI</button>
                    <button className={`${largeBtnClass}`}>MUI. SA. FO.</button>

                    <button className={`${largeBtnClass}`}>BANC. SA. FO.</button>
                    <button className={`${largeBtnClass}`}>PANET</button>

                    <button className={`${largeBtnClass}`}>SURGEL</button>
                    <button className={`${largeBtnClass}`}>NO FOOD</button>

                    <button className={`${largeBtnClass}`}>PESCE</button>
                    <button className={`${largeBtnClass}`}>CARNE</button>

                    <button className={`${largeBtnClass}`}>FRUTTA</button>
                    <button className={`${regularBtnClass}`}>SACCH. BIO</button>
                    <button className={`${regularBtnClass}`}>P. CASSA</button>   
                </div>

                <div className="flex flex-col h-full w-[30rem] py-1 gap-1">
                    
                        <div className="grid grid-flow-row grid-cols-3 grid-rows-2 h-[6.5rem] ">
                            <div className={`w-full bg-teal-800 row-span-2 col-span-3 flex items-center text-white rounded-xl shadow-lg px-3 gap-3`}>
                                <div>TOTALE</div>
                                <div>120,00</div>
                            </div>
                        </div>

                        <div className="grow w-full border border-stone-600 rounded-lg bg-white bg-opacity-50"></div>

                        <div className="h-[6rem] grid grid-flow-row grid-cols-4 grid-rows-1 gap-1.5">
                            
                            <button className={`${regularBtnClass}`}>CLEAR PROD</button>
                            <button className={`${regularBtnClass}`}>QUALCOSA</button>
                            <button className={`${largeBtnClass}`}>TOTALE</button>
                        </div> 
                
                </div>

            </div>
        </>
      
    )
    
    };


     /* <>
      
        */