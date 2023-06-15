/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import useScanner from './useScanner'
import usePersistentContext from './usePersistentContext'
import useTimeZoneDate from './useTimeZone'
import usePrices from './usePrices'


const useScannerData = () => {

  const { readed} = useScanner()
  const [currentRead, setCurrentRead] = usePersistentContext('currentRead')
  const counter = React.useRef(0)

  const {
    millis,
    dateTime,
  } = useTimeZoneDate()

  const prices = usePrices()

  React.useEffect(()=>{

    const gotReaded = JSON.stringify(readed) !== '{}'
    if(gotReaded) evaluate().then(res=>setCurrentRead(res))


  },[readed])

  const evaluate = async () =>{
    console.log('new reading', readed)
    
    let item = searchProductInPriceListFromScannerReading(readed)

    console.log('item', item)

    return {
    code:readed, 
    count:counter.current,
    origin:'scanner',
    processed:false,
    ...checkEan(readed),
    ...item,
    evaluated: true
    }
    

  }


  const searchProductInPriceListFromScannerReading = (code) =>{
    const match = prices.filter(el => (el.upc == code))
    //console.log('match', match)
    if (match.length == 1) {
        //console.log('match', match[0])
        return {found:true, item:match[0]}
    }else{
      return {found:false, item:{}}
    }
  
  }


  function checkEan(eanCode) {
    let result = {
      read_id:millis,
      read_at:dateTime,
      isEan:true,
      inputCode:eanCode,
      outputCode:'',
      digits:0,
      evaluationType:'',
      error:false,
      errorMsg:''
    }
    eanCode = eanCode.trim();
    if ([8,12,13,14].indexOf(eanCode.length) == -1 ) {
      result.isEan=false
      result.error=true
      result.errorMsg= eanCode.length + 'is an invalid number of digits'
      result.digits = eanCode.length
      result.evaluationType='OTHER'
      return result; 
    }
    //if (eanCode.length < l) {
    //eanCode = Array(14 - eanCode.length).join(0) + eanCode; //add 0's as padding
    
    //if (!eanCode.match(/[\d]{eanCode.length}/))
    //{
    // alert('Illegal characters');
    //return false; }
    var total=0;
    
    let isValidEan = isValidBarcode(eanCode)
    
               
    if (!isValidEan) {
      // alert('Wrong checksum');
        result.isEan=false
        result.error=true
        result.errorMsg= total + ' Wrong checksum'
        result.digits = eanCode.length
        result.evaluationType='OTHER'
        return result; 
      }
  
      result.isEan=true;
      result.digits = eanCode.length;
      result.evaluationType='EAN-'+ eanCode.length;
      result.outputCode = Array(14 - eanCode.length).join(0) + eanCode;
      return result; 
    }

  const clearCurrentRead = () => setCurrentRead({})

  const updateCurrentRead = (obj) =>{
    let updatedData = {...currentRead, ...obj}
    setCurrentRead(updatedData)
  }

  const logNewReadingToStorage = ()=>{
        
    let existing = localStorage.getItem('readings')
    existing = existing ? JSON.parse(existing) : []
    localStorage.setItem("readings",JSON.stringify([...existing, currentRead])); 
    setCurrentRead({})
}

    function isValidBarcode(number) {
        const checkDigit = String(number).slice(0, -1).split('').reverse().reduce((sum, v, i) => sum + v * (i % 2 || 3), 0)*9%10
        return /^\d+$/.test(number) && String(checkDigit) === String(number).at(-1)
    }



  return {
    currentRead,
    clearCurrentRead,
    updateCurrentRead,
    logNewReadingToStorage 
  }
}

export default useScannerData




    
     
      
     
      

  /*     const manualReading = (code)=>{

        searchCounter.current=searchCounter.current + 1
        code.replace(/\W/g, "")
        return {
          code:code, 
          count:searchCounter.current,
          origin:'search',
          ...checkEan(code),
          ...searchProductInPriceListFromScannerReading(code)
  
          }
  
      } */