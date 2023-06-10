import React from 'react';
import { atom, useAtom } from 'jotai'

import Keyboard from '../components/Keyboard';

//https://www.kindacode.com/snippet/tailwind-css-make-a-child-element-fill-the-remaining-space/


export const CashierPage = () => {

    const [swap, setSwap] = React.useState(false)

    const toggleSwap = () => setSwap(state => !state)

    const tabBtnClass = `w-full py-4 px-4 bg-white text-stone-800 font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`

    const regularBtnClass = `w-full py-4 px-4 bg-white text-stone-800 font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`

    const largeBtnClass = `w-full py-[1.9rem] px-4 bg-white bg-opacity-90 text-teal-900 font-semibold border-2 border-teal-900 rounded-lg shadow-lg;`

    return(
        
        <>
             <div className="flex items-end justify-between w-full flex-row-reverse">
                <div className="flex items-end justify-start gap-2 w-1/3">
                    <button className={`${tabBtnClass}`}>01</button>
                    <button className={`${tabBtnClass}`}>02</button>
                    <button className={`${tabBtnClass}`}>03</button>
                    <button className={`${tabBtnClass}`}>04</button>
                    <button className={`${tabBtnClass}`}>05</button>

                </div>
                <div className="flex items-end justify-end w-auto">
                <button className={`${tabBtnClass}`}
                    onClick={toggleSwap}>{swap?'Mancino':'Destro'}</button>
                </div>

            </div>
            
            <div className={`flex grow w-full mt-1 ${swap?'':'flex-row-reverse'}`}>
               
                <div className="flex flex-col h-full w-1/3 p-1">
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
                <div className="flex flex-col grow w-5/12 py-1 px-3 gap-1.5">
                    <div className="flex items-center justify-center gap-1">
                        <button className={`${regularBtnClass}`}>CONTR. PREZZO ART</button>
                        <button className={`${regularBtnClass}`}>RESO <br/> ART</button>
                        <button className={`${regularBtnClass}`}>STORNO ART PRECEDENTE</button>
                        <button className={`${regularBtnClass}`}>STORNO ULT ARTICOLO</button>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                        <button className={`${largeBtnClass}`}>SHOP BIO PICCOLA</button>
                        <button className={`${largeBtnClass}`}>SHOP BIO GRANDE</button>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                        <button className={`${largeBtnClass}`}>G. VARI</button>
                        <button className={`${largeBtnClass}`}>MUI. SA. FO.</button>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                        <button className={`${largeBtnClass}`}>BANC. SA. FO.</button>
                        <button className={`${largeBtnClass}`}>PANET</button>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                        <button className={`${largeBtnClass}`}>SURGEL</button>
                        <button className={`${largeBtnClass}`}>NO FOOD</button>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                        <button className={`${largeBtnClass}`}>PESCE</button>
                        <button className={`${largeBtnClass}`}>CARNE</button>
                    </div>
                   
                    <div className="flex items-start justify-center gap-2">
                        <button className={`py-[1.9rem] px-4 w-1/2 bg-white bg-opacity-90 font-semibold border-2 border-teal-900 rounded-lg shadow-lg`}>FRUTTA</button>
                        <div className="flex gap-1 w-1/2">
                            <button className={`py-[1.9rem] text-center w-1/2 bg-white bg-opacity-90 text-teal-800 rounded-lg shadow-lg`}>SACCH. BIO</button>
                            <button className={`py-[1.9rem] text-center w-1/2 bg-white bg-opacity-90 text-teal-800 rounded-lg shadow-lg`}>P. CASSA</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full w-1/3 py-1">
                    <div className="flex flex-col w-full h-full px-1">
                    <div className="grid grid-flow-row grid-cols-3 grid-rows-2 gap-1 h-[5rem] ">
                        <div className={`w-full bg-teal-800 row-span-2 col-span-3 flex items-center text-white rounded-xl shadow-lg px-3 gap-3`}>
                            <div>TOTALE</div>
                            <div>120,00</div>
                        </div>
                    </div>
                        <div className="grow w-full mt-2 border border-stone-600 rounded-lg bg-white bg-opacity-50"></div>
                        <div className="flex items-start justify-center gap-1 pt-1">
                            <div className="flex gap-1 w-7/12">
                                <button className={`btn-large`}>CLEAR PROD</button>
                                <button className={`btn-large`}>QUALCOSA</button>
                            </div>
                            <button className={`btn-large w-5/12`}>TOTALE</button>
                        </div> 
                    </div>
                </div>

            </div>
        </>
      
    )
    
    };


     /* <>
      
        */