/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import usePersistentContext from './usePersistentContext'

export const useDevice= () => {

  const [did, setDid] = usePersistentContext('device')

  const create = setDid(crypto.randomUUID())
    
  return {did, create}
}