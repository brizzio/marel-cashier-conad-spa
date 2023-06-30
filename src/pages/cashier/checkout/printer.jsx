/* eslint-disable no-unused-vars */
import React from 'react'
import { PropTypes } from "prop-types";
import { useNavigate } from 'react-router-dom'
import useCheckout from './useCheckout'
import useCart from '../../../hooks/useCart'
import useEpson from '../printer/useEpson'
import PrintableDiv from '../../../components/PrintableDiv'

const Printer = () => {

  const navigate = useNavigate()


  
  const {
    currentCart
  }= useCart()

  const {
    
    ticketFacSimile
  } = useEpson()

  const print = ()=>{
   
      return currentCart
   


  }

  React.useEffect(()=>{
    console.log('ueff')
    
  })

  return (
    
  <div
  className='relative flex w-full grow debug '
  >
    <PrinterSetup/>
    
    <div>

      {currentCart.cart_id}
      <FacSimile lines={ticketFacSimile()}/>
    
     
     <button
    onClick={print}
    >STAMPA SCONTRINO</button>
    
    
    </div>


  </div>

   
  )
}

export default Printer


const PrinterSetup = () => {

  const navigate = useNavigate()

  const info={
    ip: `192.168.1.180`,
    device:'5a6a2cb8-51e4-4226-89cc-bc355a563013',
    operator:1, //user.uuid
    store:1, //cashier.store_id.uuid

  }
   
  const inputs = [
      {
          field:'ip',
          label:'Indirizzo IP'
      },
      {
          field:'company',
          label:'Nome del Cliente'
      },
      {
          field:'store',
          label:'Codice del Negozio'
      },
      {
        field:'operator',
        label:'OPERATORE'
      }
  ]
  
    
    return (
      
      
      <div className='flex flex-col w-3/12 h-full debug justify-between'>

        <img 
        className='h-40'
        src="/epson_fp_81.jpg"  alt="" />
        <div>

        </div>

        <div
        className='flex flex-col justify-around  h-3/6 debug text-lg font-thin '
        >
          <p>IP:{info.ip}</p>
          <p>NEGOZIO:{info.store}</p>
          <p>CASSA:{info.device}</p>
          <p>UTENTE:{info.operator}</p>
        </div>
          
          

          

        <button className=' py-4 border rounded-md bg-white shadow-xl m-2 w-11/12' onClick={()=>navigate(-1)}><i className="fas fa-chevron-left px-2"></i>INDIETRO</button>
       
       
      </div>
    )
}


const FacSimile = ({lines}) =>{

  const lineStyle = {
    marginTop:0,
  }

  //const {tickets} = useTicket()
  //const lines = tickets && tickets.length?tickets.slice(-1)[0].lines:[]
  //console.log('ShowPrintedTicket', tickets.slice(-1), lines, lines?.length)

  
  return(

    <div className=' flex flex-col justify-start items-start font-mono debug'>

      {[...lines].map((el, i)=>{
        return (
        <div className='font-mono leading-4' key={i}>
          {el.text.length}:{el.text.replace(/\s/g, "_")}
        </div>
        )
      })}


    </div>
     
    
  )
}

FacSimile.propTypes = {
    
  lines:PropTypes.array,
   
  };

  FacSimile.defaultProp = {
      lines:[]
    }





