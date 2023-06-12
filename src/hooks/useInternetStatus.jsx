import React from 'react'
import usePersistentContext from './usePersistentContext';

const useInternetStatus = () => {


    const [isOnLine, setIsOnLine] = usePersistentContext('internet');
    
 
    React.useEffect(()=>{

        let status = !!navigator.onLine
        if(isOnLine !== status) setIsOnLine(status)
    
    },[navigator.onLine])
 
 return isOnLine 

  
}

export default useInternetStatus