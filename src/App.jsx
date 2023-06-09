import React from 'react'
import MainRoutes from './components/MainRoutes';
import { useIp } from './hooks/useIp';
import { useDevice } from './hooks/useDevice';
import useTimeZoneDate from './hooks/useTimeZone';



function App() {

  const ipData = useIp()
  const did = useDevice()
  const tz = useTimeZoneDate()


  console.log('ipdata', ipData )
  console.log('did', did )
  console.log('tz', tz )

  
  return (
    <MainRoutes/>
  )
}

export default App
