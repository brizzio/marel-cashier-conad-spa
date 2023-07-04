/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import usePrices from '../../../hooks/usePrices'
import useCart from '../../../hooks/useCart'


//https://codesandbox.io/s/react-input-autocomplete-knwn3?file=/src/InputAuto.js




const useBags = () => {

  const prices = usePrices()
  const bag = React.useRef()

  const {
    addReferencedItem,
    removeItemById
  } = useCart()

  React.useMemo(()=>{

    if (prices) bag.current = prices?.filter(el=>el.product_id==145)[0]
  
  },[prices]) 
   
  const addBag=()=>{
  
    console.log('bag', prices, bag.current)
    addReferencedItem(bag.current, 1)
  }

  const removeBag=()=>{
  
    console.log('bag', prices, bag.current.product_id)
    if (bag.current) removeItemById(bag.current.product_id)
  }


  
  
 
    

  return {
        
    addBag,
    removeBag
        
    }
   
  
}

export default useBags

