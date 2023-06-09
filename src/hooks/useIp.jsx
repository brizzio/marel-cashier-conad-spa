/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useFetch } from './useFetch'

export const useIp= () => {

  const [state, setState] = useState(null)

  const gotData = useFetch('https://hutils.loxal.net/whois')
 
  useEffect(() => {
    if(!state?.data) setState(gotData)

  }, [gotData])

  return state
}