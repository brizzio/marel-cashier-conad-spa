import React from 'react'

const Keyboard = () => {

const btnClass = `w-full py-2 px-4 bg-white text-stone-800 font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`

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