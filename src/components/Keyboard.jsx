import React from 'react'

const Keyboard = () => {

const btnClass = `w-full py-2 px-4 bg-white text-stone-800 text-3xl font-semibold rounded-lg shadow-md `

  return (
    
        <div className="flex flex-col gap-1 h-full pt-2 ">
            <div className={`w-full h-[9rem] bg-stone-600 row-span-2 col-span-3 flex flex-col text-white rounded-xl shadow-lg p-3`}>
                <div>line 1</div>
                <div>line 2</div>
                <div>line 3</div>
            </div>
        
        <div className="grow grid grid-flow-row grid-cols-3 grid-rows-5 gap-1.5">
            <button className={btnClass}>Q</button>
            <button className={btnClass}>000</button>
            <button className={btnClass}>BACK</button>
            <button className={btnClass}>7</button>
            <button className={btnClass}>8</button>
            <button className={btnClass}>9</button>
            <button className={btnClass}>4</button>
            <button className={btnClass}>5</button>
            <button className={btnClass}>6</button>
            <button className={btnClass}>1</button>
            <button className={btnClass}>2</button>
            <button className={btnClass}>3</button>
            <button className={`${ btnClass} col-span-2`}>0</button>
            <button className={btnClass}>00</button>
        </div>
    
        </div>
  )
}

export default Keyboard

{/* <div className="flex items-center justify-center gap-1">
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
                    </div> */}