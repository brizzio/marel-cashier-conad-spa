/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDevice } from '../../hooks/useDevice';
import useCashier from '../../hooks/useCashier';
import StaticMap from '../StaticMap';
import useAuth from '../../hooks/useAuth';
import StoreOptions from '../StoreOptions';
import WorkingStore from './WorkingStore';


const OpenCashier = ()=> {
  
  const {logout} = useAuth()

  const getUser = () =>{
    return JSON.parse(localStorage.getItem('user'))
  }

  const [user, setUser] = React.useState(getUser())
  const [step, setStep] = React.useState(0)
  const [workingStore, setWorkingStore] = React.useState(null)
  const [userStores, setUserStores] = React.useState([])


  const navigate = useNavigate()

  const {did} = useDevice()

  const {
    openCashier,
    closeCashier,
    updateCashier,
    cashier
    } = useCashier()
  
console.log('First data={user}', user)


  React.useEffect(()=>{
    console.log('opencashier eff ', step, user.stores.length == 1)
    if(user.stores.length == 1) setWorkingStore(user.stores[0])
    
  },[step])

  const displayComponent = () => {
    switch (step) {
      case 0:
        return workingStore
        ?<WorkingStore store={workingStore} user={user} undo={unSelectStore}/>
        :<First data={user.stores} exit={exit} select={selectStore}/>
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
    logout()
    navigate('/landing')
  }

  const selectStore = (selected) =>{
    setWorkingStore(selected)
  }

  const unSelectStore = () =>{
    setWorkingStore(null)
  }


  

  return (
    <div className='relative flex w-full grow items-center justify-center'>
        {displayComponent()}
        
    </div>
  )
}

export default OpenCashier

//display cashier info for evaluation - first step
const First =({data, exit, select})=>{
//style={{background-image:`url(male.png)`}}




console.log('storesThatUserCanAccess ', data)
return (
    <div className='flex w-full h-full items-center justify-center text-black text-2xl '>
        <div className='flex flex-col w-full h-full p-8 '>
            <span className='text-3xl text-teal-700 text-center'>Scegli il negozio dove aprire il cassa.</span>
            <StoreOptions stores={data} selectStore={select}/>
            
        </div>
        
        <button className='absolute bottom-0 left-0 p-4 border rounded-md bg-white shadow-xl' onClick={exit}><i className="fas fa-chevron-left px-2"></i>ESCI</button>
       
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