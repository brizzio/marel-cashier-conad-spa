/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useFetch } from './useFetch'
import usePersistentContext from './usePersistentContext'


export const useIp= () => {

  const [state, setState] = React.useState({})

  const {data, isLoading, error} = useFetch('https://hutils.loxal.net/whois')



  React.useEffect(() => {
    console.log('data, isLoading, error', data, isLoading, error)
    setState({
      data: data,
      isLoading: isLoading,
      error: error,
    })
  }, [isLoading])
  

  /* const init = async () =>{
       const data = fetch('https://hutils.loxal.net/whois')
       setIpData((await data).json())
  }
 */
  
  

  return state
}