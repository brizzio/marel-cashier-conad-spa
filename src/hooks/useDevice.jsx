/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

export const useDevice= () => {

  const [state, setState] = useState(null)

  useEffect(() => {
    const current = localStorage.getItem('device')
    if(!state) {
      const value = current?current:crypto.randomUUID()
      setState(value)
      localStorage.setItem('device', value)
    }

  }, [])

  return state
}