/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import { useState, useRef, useEffect} from 'react'
import usePersistentContext from './usePersistentContext'



const useScanner = () => {

const [isScannerOn, setIsScannerOn] = usePersistentContext('isScannerOn')
const [readed, setReaded] = usePersistentContext('readed')
 
const hasSerial = useRef(!!('serial' in navigator))
let port = useRef(null)
const portInfo = useRef(null)




/* useEffect(()=>{
  console.log('use scanner initialized')
    //if(!isScannerOn) initialize()
  return ()=>{
    console.log('use scanner unmount')
   
    setIsScannerOn(false)
  }
},[]) */

let initialize = async () => {
    
    if (!hasSerial.current || isScannerOn) return; 

       

    // The Web Serial API is supported.
    console.log('Awesome, The serial port is supported.');
    console.log('Port is active?',port.current);

    // Get all serial ports the user has previously granted the website access to.
    const ports = await navigator.serial.getPorts();
    console.log(ports);

    const options = {
      baudRate: 9600,
      dataBits: 8,
      parity: "none",
      stopBits: 1,
    };
    
    try {

      if (ports && ports.length > 0) {

        console.log('we have an selected port, lets get it!!', ports[0]);
        
        port.current = ports[0];
      } else{

        console.log('we dont have any port selected, lets get one!!');
        port.current = await navigator.serial.requestPort();

      }
      
    } catch (error) {
      console.log('error opening port!', error);
    }
    
   
    await port.current.open(options);
    
    //port.current = ActivePort
    setIsScannerOn(true)
    
    console.log('Now we have an opened port ... ', port.current.getInfo());

    await connect();
    
  };

  

  const connect = async () => {

    // connect & listen to port messages
    //console.log(port.current.getInfo());
    portInfo.current = port.current.getInfo()
    let scanned = '';
    let end = false
    while (port.current.readable) {
      // Listen to data coming from the serial device.
      const textDecoder = new TextDecoderStream();
      const readableStreamClosed = port.current.readable.pipeTo(textDecoder.writable);
      const reader = textDecoder.readable.getReader();
      
      while (true) {
        const scan = await reader.read();
        
         end = (JSON.stringify(scan).indexOf('r')>-1)
         scanned = scanned + scan.value
         
         if(end){
           
            let code = scanned.replace(/\W/g, "")
            setReaded(code)
            scanned =''
            end=false
            //scan.done = true
         }
          
        if (scan.done) {
          // Allow the serial port.current to be closed later.
          //console.log('done', scan.done);
          reader.releaseLock();
          break;
        }
        // value is a string will be streaming here.
      }
    }
  };


  
  const clearReaded = ()=>{
    setReaded('')
  }
  

  return (
    {portInfo, port, initialize, isScannerOn, readed, clearReaded}
  )
}

export default useScanner


