import React from 'react'
import useInternetStatus from '../hooks/useInternetStatus'

const OnLineSignal = () => {
 
  const [signal, setSignal] = React.useState(false) 
  const status = useInternetStatus()
  
  React.useEffect(() => setSignal(status), [status])

  return (
    <>
    {signal?'we have connection'
        :'disconnected'
    }
    </>
    
  )
}

export default OnLineSignal