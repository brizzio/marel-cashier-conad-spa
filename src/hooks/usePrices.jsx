/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import usePersistentContext from './usePersistentContext'
import useApi from './useApi'




const usePrices = () => {

  const key = 'prices'

  const [prices, setPrices] = usePersistentContext(key);
  
  const {get} = useApi()

  React.useEffect(() => {
    let existing = localStorage.getItem(key)
    if(!existing && !prices) init()
    
    return () => console.log('prices unmount')
    
  }, []);

  const init = async () => {
    const response = await get('priceList')
    setPrices(response);
  };

  


  return prices
}

export default usePrices