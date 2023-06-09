import React from 'react'

const Keyboard = () => {
  return (
    <>
        <div className="grid grid-flow-row grid-cols-3 grid-rows-2 gap-1 h-full py-3 ">
            <div className={`w-full bg-stone-600 row-span-2 col-span-3 flex flex-col text-white rounded-xl shadow-lg p-3`}>
                <div>line 1</div>
                <div>line 2</div>
                <div>line 3</div>
            </div>
        </div>
        <div className="grid grid-flow-row grid-cols-3 grid-rows-5 gap-1">
            <button className={`grid-btn`}>Q</button>
            <button className={`grid-btn`}>000</button>
            <button className={`grid-btn`}>BACK</button>
            <button className={`grid-btn`}>7</button>
            <button className={`grid-btn`}>8</button>
            <button className={`grid-btn`}>9</button>
            <button className={`grid-btn`}>4</button>
            <button className={`grid-btn`}>5</button>
            <button className={`grid-btn`}>6</button>
            <button className={`grid-btn`}>1</button>
            <button className={`grid-btn`}>2</button>
            <button className={`grid-btn`}>3</button>
            <button className={`grid-btn col-span-2`}>0</button>
            <button className={`grid-btn`}>00</button>
        </div>
    
    </>
  )
}

export default Keyboard