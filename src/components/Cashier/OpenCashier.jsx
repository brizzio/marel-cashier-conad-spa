/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDevice } from '../../hooks/useDevice';
import useCashier from '../../hooks/useCashier';



const OpenCashier = ()=> {

  const [step, setStep] = React.useState(0)
  const btnBack = React.useRef(null)
  const btnNext = React.useRef(null)


  const navigate = useNavigate()

  const {did} = useDevice()

  const {
    openCashier,
    closeCashier,
    updateCashier,
    cashier
    } = useCashier()
  

  const displayComponent = () => {
    switch (step) {
      case 0:
        return <First exit={exit} next={next}/>;
      case 1:
        return <Second back={back} next={next}/>;
       case 2:
         return <Wrapper back={back} open={openCashier}/>;
       default:
         return <First />;
    }
  }; 

  const back = () => {

    setStep(prev=>prev>0?prev-1:0)

  }

  const next = () => {

    setStep(prev=>prev < 2?prev+1:2)

  }

  const exit = () => {
    closeCashier()
    navigate('/landing')
  }

  React.useEffect(()=>{
    console.log('opencashier eff ', step)
    
  },[step])

  return (
    <div className='relative flex w-full grow items-center justify-center'>
        {displayComponent()}
        
    </div>
  )
}

export default OpenCashier

//display cashier info for evaluation - first step
const First =({exit, next})=>{


return (
    <div className='flex w-full h-full items-center justify-center debug'>
        Show me some info 
        <button className='absolute bottom-0 left-0 p-4' onClick={exit}>ESCI</button>
        <button className='absolute bottom-0 right-0 p-4'onClick={next}>AVANTI</button>
        </div>
        

)


}

//display cashier info for evaluation - first step
const Second = ({back, next})=>{

    return (
        <div className='flex w-full h-full items-center justify-center debug'>
            register money
        <button className='absolute bottom-0 left-0 p-4' onClick={back}>INDIETRO</button>
        <button className='absolute bottom-0 right-0 p-4'onClick={next}>AVANTI</button>
        </div>
    )


}

const Wrapper = ({back, open})=>{
    
    return (
       
         <div className='flex w-full h-full items-center justify-center debug'>
         confirm open cashier
     <button className='absolute bottom-0 left-0 p-4' onClick={back}>INDIETRO</button>
     <button className='absolute bottom-0 right-0 p-4'onClick={open}>CONFERMA</button>
     </div>
    )


}