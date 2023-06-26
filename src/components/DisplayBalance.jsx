/* eslint-disable react/prop-types */
import React from 'react'
import DisplayBill from '../customUi/DisplayBill';
import DisplayCoin from '../customUi/DisplayCoin';
import useCashInventory from '../hooks/useCashInventory';
import useIntl from '../hooks/useIntl';
import useSwap from '../hooks/useSwap';

const sample ={
    type: '',
    face:'',
    value:0, 
    quantity:0,
}

const DisplayBalance = ({confirm}) => {

 
  const {
    inventory, 
    clearSelections, 
    updateQuantityToSelectedRow
  } = useCashInventory()

  const {swap} = useSwap()

  const [input, setInput] = React.useState('')

  const {currency} = useIntl()

  let sum = [...inventory].reduce((a,el)=>{
    let val = Number(el.value) * Number(el.quantity)
    return a + val
},0)

  React.useEffect(()=>{

    console.log('inventory',inventory)
  },[])

  const handleKeyClick= (e)=>{
    console.log(e.target.value)
    let str = input.toString() + e.target.value.toString()
    setInput(str)
   
}

const handleClearInput= ()=>{
  //console.log(e)
  clearSelections()
  setInput('')
}

const confirmCurrencyQuantity = () =>{

  updateQuantityToSelectedRow(input)
  setInput('')


}

const saveInventoryAndMoveToNextPage = ()=>{

  const inventoryMessage = "Il fondo cassa é stato stabilito. Continuamo verso la apertura del cassa?"

  if (window.confirm(inventoryMessage)) {
    confirm()

  }//close if window confirm
}


const btnClass = `w-full py-1.5 px-2 bg-white/50 text-stone-800 text-3xl font-semibold rounded-lg shadow-md border border-2 border-stone-300`

const row=`flex items-center justify-start gap-2 w-full`
const label =`text-lg font-semibold text-center p-3`
const field =`text-2xl font-thin border border-teal-300 border-2 border-opacity-20 rounded-xl shadow-xl bg-white bg-opacity-90 drop-shadow-xl px-4 py-[1rem] grow `

//${swap?'flex-row-reverse':''}

    return (
      <div className={`flex  ${swap?'flex-row-reverse':''} items-start grow h-full justify-between`}>
        <div className='grid grid-rows-8 grid-cols-2 grid-flow-row w-8/12 max-h-[32rem] gap-3.5 mb-2 pr-4'>
        

        {[...inventory]?.map((item, index) => (
            <Item 
            key={index} 
            item={item} 
            i={index} 
            keyboardValue={input} 
            />
          ))}
              
        </div>
        <div className='flex flex-col items-end justify-start w-4/12 h-full px-4 gap-4'>
          <div className={`${row}`}>
            <span className={`${label}`}><i className="fas fa-sack-dollar fa-2x text-stone-600"></i></span>
            <span className={`${field}`}>{currency(sum)}</span>
          </div>
          <div className=' border border-zinc-300 rounded-lg bg-white h-[6rem] w-full my-1 text-stone-600 text-2xl'>
              <div className='flex items-center justify-between h-full px-4'>
                <div className='text-4xl font-thin'>
                  {input}
                </div>
                <div className={`${input?'':'hidden'}`}>
                  <button
                  onClick={confirmCurrencyQuantity}>
                   <i className="fas fa-2x bg-white text-green-700 fa-circle-check"></i>
                  </button>
                </div>
              </div>

            </div>

          <div className="h-fit w-full grid grid-flow-row grid-cols-3 grid-rows-4 gap-1.5 bg-white/30 backdrop-blur-lg">
           
            <button className={btnClass} onClick={handleKeyClick} value='7'>7</button>
            <button className={btnClass} onClick={handleKeyClick} value='8'>8</button>
            <button className={btnClass} onClick={handleKeyClick} value='9'>9</button>
            <button className={btnClass} onClick={handleKeyClick} value='4'>4</button>
            <button className={btnClass} onClick={handleKeyClick} value='5'>5</button>
            <button className={btnClass} onClick={handleKeyClick} value='6'>6</button>
            <button className={btnClass} onClick={handleKeyClick} value='1'>1</button>
            <button className={btnClass} onClick={handleKeyClick} value='2'>2</button>
            <button className={btnClass} onClick={handleKeyClick} value='3'>3</button>
            <button className={btnClass} onClick={handleClearInput}><i className="fas fa-circle-xmark text-stone-500"/></button>
            <button className={`${ btnClass} col-span-2`} onClick={handleKeyClick}
            value='0'>0</button>
            
          </div>
          
            <button
            onClick={saveInventoryAndMoveToNextPage}
            className='btn-primary w-full '
            >CONFERMA</button>
          

          
        </div>
      </div>
      );
}

const Item = ({item=sample, i, keyboardValue}) =>{

 
    return (
        <>
        {item.type === 'bill'
        ?<DisplayBill 
        count={item.quantity}
        face={item.face}
        value={item.value}
        selected={!!item.selected}
        keyboard={keyboardValue}
        index={i}/>
        :<DisplayCoin 
        count={item.quantity}
        face={item.face}
        value={item.value}
        selected={!!item.selected}
        keyboard={keyboardValue}
        index={i}/>
        }
        </>
    )

}

export default DisplayBalance

/* const itemPropTypes = PropTypes.shape({
        type: PropTypes.string,
        face:PropTypes.string,
        value:PropTypes.number, 
        quantity:PropTypes.number,
       })




Item.propTypes = {
    item:PropTypes.instanceOf(itemPropTypes),
    index:PropTypes.number
  }

//{type:'bill', face:'200', value:200, quantity:100}
DisplayBalance.propTypes ={ 
      
    items: PropTypes.arrayOf(PropTypes.instanceOf(itemPropTypes))
    
  } */