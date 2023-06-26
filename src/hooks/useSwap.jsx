/* eslint-disable no-unused-vars */
import React from 'react'
import usePersistentContext from './usePersistentContext'

const useSwap = () => {

    const [swap, setSwap] =usePersistentContext('swap')
    
    const leftHanded  = {
        value:false,
        title:'mancino'
    }

    const rightHanded  = {
        value:true,
        title:'destro'
    }

    const toggleSwap = () => setSwap(!swap)

    React.useEffect(()=>{

        let existing = localStorage.getItem('swap')
        if(!existing){
            console.log('setting swap')
            setSwap
        }

    })
  
  
  
    return {swap, toggleSwap}
}

export default useSwap