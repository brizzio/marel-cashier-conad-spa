/* eslint-disable react/prop-types */


const DisplayCoin = ({
    count = 1,
    face = 50,
    value=10
}) => {

    const subtotal = () => Number(value) * Number(count)

    return (<div key={crypto.randomUUID} className="flex flex-row items-center justify-start gap-1 max-h-[40px] ">
    
    <div className="w-12 h-12 flex justify-center items-center border border-black rounded-full">
      <p className="text-xl font-bold">{face}</p>
    </div>
    <div  className="flex h-fit w-[5rem] border border-2 border-stone-800 border-opacity-40 rounded-xl bg-white items-center justify-center debug">
      <span className="text-2xl p-1 w-[3rem]" >{count}</span>
    </div>
    <div className="flex h-fit grow items-center justify-end">
  
      <span className="text-2xl p-1 ">&#8364;</span>
      <span className="text-2xl p-1 ">{subtotal()}</span>
    </div>

    
  </div>
    )

}

export default DisplayCoin