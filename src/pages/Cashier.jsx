import React from 'react';
import { atom, useAtom } from 'jotai'

import Keyboard from '../components/Keyboard';

//https://www.kindacode.com/snippet/tailwind-css-make-a-child-element-fill-the-remaining-space/


export const CashierPage = () => {

    const [swap, setSwap] = React.useState(false)

    const toggleSwap = () => setSwap(state => !state)

    
    return(



        <div className="flex flex-col w-full h-full bg-white bg-opacity-20 ">
             content
        </div>
       
    )
    
    };


     /* <>
      <div className="flex flex-col w-full h-full bg-white bg-opacity-20 ">
             <div className="flex items-end justify-between w-full flex-row-reverse">
                <div className="flex items-end justify-start gap-2 w-1/3">
                    <button className={`grid-btn`}>01</button>
                    <button className={`grid-btn`}>02</button>
                    <button className={`grid-btn`}>03</button>
                    <button className={`grid-btn`}>04</button>
                    <button className={`grid-btn`}>05</button>

                </div>
                <div className="flex items-end justify-end w-auto">
                <button className={`grid-btn`}
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
                <div className="flex flex-col h-full w-5/12 py-1 px-3 gap-2">
                    <div className="flex items-center justify-center gap-1">
                        <button className={`grid-btn`}>CONTR. PREZZO ART</button>
                        <button className={`grid-btn`}>RESO ART</button>
                        <button className={`grid-btn`}>STORNO ART PRECEDENTE</button>
                        <button className={`grid-btn`}>STORNO ULT ARTICOLO</button>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                        <button className={`btn-large`}>SHOP BIO PICCOLA</button>
                        <button className={`btn-large`}>SHOP BIO GRANDE</button>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                        <button className={`btn-large`}>G. VARI</button>
                        <button className={`btn-large`}>MUI. SA. FO.</button>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                        <button className={`btn-large`}>BANC. SA. FO.</button>
                        <button className={`btn-large`}>PANET</button>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                        <button className={`btn-large`}>SURGEL</button>
                        <button className={`btn-large`}>NO FOOD</button>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                        <button className={`btn-large`}>PESCE</button>
                        <button className={`btn-large`}>CARNE</button>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                        <button className={`btn-large`}>01</button>
                        <button className={`btn-large`}>02</button>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                        <button className={`btn-large w-1/2`}>FRUTTA</button>
                        <div className="flex gap-1 w-1/2">
                            <button className={`btn-large`}>SACCH. BIO ORTO</button>
                            <button className={`btn-large`}>PRELIEVO CASSA</button>
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
        </div>
        */