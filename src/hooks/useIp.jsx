/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import usePersistentContext from './usePersistentContext'


export const useIp= () => {

  //const [ipData, setIpData] = usePersistentContext('ipData')

  const [ipData, setIpData] = React.useState('')

  React.useEffect(() => {
    if(!ipData){
      console.log(ipData)
      fetch('https://hutils.loxal.net/whois')
      .then(res => res.json())
      .then(res=>setIpData(res))
    }
    
  },[])

  

  return {ipData}
}