import React from 'react';
import { atom, useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom';
import Keyboard from '../components/Keyboard';
import useScanner from '../hooks/useScanner';
import useCart from '../hooks/useCart';
import BouncingDotsLoader from '../components/BouncingDotsLoader/BouncingDotsLoader';
import useScannerData from '../hooks/useScannerData';


//https://www.kindacode.com/snippet/tailwind-css-make-a-child-element-fill-the-remaining-space/


export const CashierPage = () => {

    const [swap, setSwap] = React.useState(false)
    const [idle, setIdle] = React.useState(true)

    const navigate = useNavigate()

    const toggleSwap = () => setSwap(state => !state)

    const navigateToLogoutPage = ()=> navigate('/logout')

    const {
        newCart,
        deleteCart,
        currentCart
    } = useCart()


    
    const { isScannerOn} = useScanner()

    const {clearCurrentRead} = useScannerData()
    

    const tabBtnClass = `h-full w-full px-4 bg-white text-stone-800 font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`

    const swapBtnClass = ` h-full px-4 bg-white text-stone-800 font-semibold rounded-lg shadow-md `

    const regularBtnClass = `bg-white text-teal-900 font-semibold 
    border border-teal-900 border-opacity-70 rounded-lg shadow-lg`

    const largeBtnClass = `col-span-2  bg-white bg-opacity-90 text-teal-900 font-semibold border border-teal-900 border-opacity-70 rounded-lg shadow-lg;`
    

    if(!isScannerOn) return <ScannerPrompt />

    const startNewCart = () => {

        console.log('newCart started')
        newCart()
        clearCurrentRead()
        setIdle(false)

    }

    const cancelCurrentCart = () => {

        console.log('current cart cancelled')
        deleteCart()
        clearCurrentRead()
        setIdle(true)

    }


    return(
        
        <> 
             <div className="flex items-center justify-between w-full h-[50px] flex-row-reverse">
                <div className="flex h-full items-end justify-start gap-2 w-5/12 p-1">
                    <button className={`${tabBtnClass}`}>01</button>
                    <button className={`${tabBtnClass}`}>02</button>
                    <button className={`${tabBtnClass}`}>03</button>
                    <button className={`${tabBtnClass}`}>04</button>
                    <button className={`${tabBtnClass}`}>05</button>

                </div>
                
                <button className={`${swapBtnClass}`}
                    onClick={toggleSwap}>{swap?'Mancino':'Destro'}</button>
                

            </div>
            
            <div className={`flex h-full w-full mt-1 ${swap?'':'flex-row-reverse'}`}>
               
                <div className="flex flex-col h-full w-5/12 gap-2 pr-2">
                    <div className="grid grid-flow-row grid-cols-3 grid-rows-2 gap-2 h-2/6">
                    <button className={`bg-white/90 text-stone-800 font-thin rounded-lg shadow-md py-2`}><i className="fas fa-2x fa-gears text-stone-400"/></button>
                    <button className={`bg-white/90 text-stone-800 font-thin rounded-lg shadow-md`}>SCONTO VALORE</button>
                    <button className={`bg-white/90 text-stone-800 font-thin rounded-lg shadow-md`}>SCONTO %</button>
                    <button className={`${!idle
                    ?'bg-green-200 text-teal-600 font-thin rounded-lg border-2 border-teal-600 border-opacity-10 px-2'
                    :'bg-white/70 text-teal-600 font-thin rounded-lg border-2 border-teal-600 border-opacity-10'}`}
                    disabled = {!idle}
                    onClick={startNewCart}>{!idle?'CARRELLO ATTIVO':'NUOVO CLIENTE'}</button>
                    <button className={`bg-white/90 text-stone-800 font-thin rounded-lg shadow-md`}>RIST. SCONTRINI</button>
                    <button className={`${!idle
                    ?'bg-red-800 text-white font-thin rounded-lg border-2 border-red-600 border-opacity-10'
                    :'bg-white/70 text-teal-600 font-thin rounded-lg border-2 border-teal-600 border-opacity-10'}`}
                    onClick={cancelCurrentCart}>CANCELLA CARRELLO</button>
                    </div>
                    <Keyboard idle={idle}/>
                </div>
                <div className="h-full grid grid-flow-row grid-cols-4 grid-rows-7 gap-1 px-3 w-3/12">
                    <button className={`${regularBtnClass}`} onClick={navigateToLogoutPage}><i className="fas fa-arrow-right-from-bracket fa-2x text-stone-500 fa-flip-horizontal"/></button>
                    <button className={`${regularBtnClass}`}><i className="fas fa-2x fa-magnifying-glass text-stone-400"></i></button>
                   
                    <button className={`${regularBtnClass}`}><i className="fas fa-2x fa-chevron-left text-stone-400"></i></button>
                    <button className={`${regularBtnClass}`}><i className="fas fa-2x fa-chevron-right text-stone-400"/></button>

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
                    <button className={`${regularBtnClass}`}><i className="fas fa-2x fa-magnifying-glass text-stone-400"></i></button>
                    <button className={`${regularBtnClass}`}><i className="fas fa-2x fa-person-arrow-down-to-line text-stone-400"></i></button>   
                </div>

                <div className="flex flex-col h-full w-4/12  gap-1">
                    
                    {!idle || currentCart?.active
                    ?<>
                    <div className={`w-full h-1/6 bg-teal-800 row-span-2 col-span-3 flex items-center text-white rounded-xl shadow-lg px-3 gap-3`}>
                        <div>TOTALE</div>
                        <div>120,00</div>
                        </div>
                       
                        <div className="h-4/6 w-full border border-stone-600 rounded-lg bg-white bg-opacity-50"></div>

                        <div className="h-1/6 grid grid-flow-row grid-cols-4 grid-rows-1 gap-1.5">
                            
                            <button className={`${regularBtnClass}`} onClick={navigateToLogoutPage}><i className="fas fa-arrow-right-from-bracket fa-2x text-stone-500 fa-flip-horizontal"/></button>
                            <button className={`${regularBtnClass}`}><i className="fa-regular fa-rectangle-list fa-2x text-stone-500"/></button>
                            <button className={`${largeBtnClass}`}>TOTALE</button>
                        </div>
                    
                    </>
                    :
                    <div className="h-full w-full border border-stone-600 rounded-lg bg-white bg-opacity-50">
                        <BouncingDotsLoader/>
                    </div>
                    }
                        
                         
                
                </div>

            </div>
        </>
      
    )
    
    };

    const ScannerPrompt = ()=>{

        const textPromptClass = `w-1/2 h-3/6 text-3xl font-thin text-teal-800`

        const buttonClass = `w-1/2 h-2/6 text-lg font-bold text-teal-800 border rounded-xl shadow-xl bg-white`

        const { initialize } = useScanner()

        return(
            
            <div className="flex flex-col items-center justify-center w-full h-full">
                
                    <span className={`${textPromptClass}`}> Clicca per attivare il scanner di prodotti</span>
                
                
                <button className={`${buttonClass}`}
                    onClick={initialize}>SCANNER</button>
                

            </div>

        )

   }
     /* <>
      
        */