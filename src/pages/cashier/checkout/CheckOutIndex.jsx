/* eslint-disable react/prop-types */
import React from 'react';
import BouncingDotsLoader from '../../../components/BouncingDotsLoader/BouncingDotsLoader';
import useCart from '../../../hooks/useCart';
import useCheckout from './useCheckout'
import {
   
    Routes,
    Route,
    Outlet,
    useNavigate,
    
  } from "react-router-dom";


export default function CheckOutIndex() {


    const navigate = useNavigate()
    const {
        closeCart, 
    
    } = useCart()

    const {
        optionsModel,
        paymentsModel,
        setRowSelectedByIndex,
        clearSelections,
        
       }= useCheckout()

    const [options, setOptions] = React.useState(optionsModel)   
    const [payments, setPayments] = React.useState([])
    const [payment, setPayment] = React.useState(paymentsModel)
    
    const [loading, setLoading] = React.useState(false)

    const handleConfirm = async () => {
        setLoading(true)
        console.log('close cart on checkout')
        closeCart()
        await new Promise(resolve => setTimeout(resolve, 700)); 
        setLoading(false)
        navigate(-1)
       
    }


    const handleBack = async () => {
        
        console.log('back')
        navigate(-1, {replace:true})
       
    }

    const handleSelect = (index)=>{

        console.log('selected', index)
        setOptions(opt => setRowSelectedByIndex(opt,index))
        navigate(options[index].url)

    }

    const unSelect = ()=>{

        setOptions(opt => clearSelections(opt))
        navigate(-1, {replace:true})

    }

    React.useEffect(()=>{
        console.log('selection changed', options)
    },[options])

    React.useEffect(()=>{
        console.log('payments list changed', options)

    },[payments])

    if( loading ) return <div className='flex items-center justify-center grow w-full'><BouncingDotsLoader/></div>

    
    return(
        
        <div  className='flex flex-row gap-3 items-center justify-center h-full w-full'>
            <div className='flex flex-col gap-3 items-center justify-start h-full basis-1/4'>
            <div className={`debug w-full h-fit`}>
            {
                options.map((el,i)=>{
                    return(  
                    <div key={i}
                    className={`flex items-center w-full h-fit mt-2 gap-3`}
                    >
                        <SideButton 
                            face={el.title}
                            index={i}
                            faIcon={el.icon} 
                            action={handleSelect}
                            isClicked={el.selected} 
                        />
                        <div className="flex w-8/12 h-full border rounded-xl bg-white shadow-xl items-center justify-start py-4 px-1 text-stone-400 mt-1 gap-2">
                            <span className="text-4xl font-semibold ">€</span>
                            <span className="text-3xl font-thin  text-end w-full">{el.total.toFixed(2)}</span>
                        </div>
                
                    </div>
                    )
                })
            }
            
            
            </div>
            <button
            onClick={handleConfirm}
            >CONFIRM</button>
             <button
            onClick={handleBack}
            >BACK</button>


            </div>

            <div className='flex flex-col gap-3 items-center justify-center h-full basis-3/4'>
            <Outlet />
            
            <Routes>
                <Route index element={<Main payment={payment}/>} />
                <Route path="cash" element={<Cash back={unSelect}/>} />
                <Route path="bancomat" element={<Bancomat back={unSelect}/>} />
                <Route path="bonus" element={<Bonus back={unSelect}/>} />
                <Route path="difer" element={<Difer back={unSelect}/>} />
            </Routes>
            </div>

        </div>

        

       
    )

    
   
  }


  const SideButton = ({
    index,
    face,
    icon,
    faIcon,
    action,
    isClicked
}) =>{

    
    const click = () =>{
        console.log('clicked', face)
        action(index)
        
    }
    

    return (
        <button key={index} className={`flex items-center justify-center border  rounded-xl border-zinc-300 font-thin shadow-md py-4 h-[5.3rem] grow
        ${isClicked
        ?'bg-teal-500 text-white'
        :''}
        `}
        onClick={click}>
            {icon
            ?<img className="h-[3rem]" src={'/' + icon}/>
            :faIcon
            ?<i className={`${faIcon} fa-3x text-zinc-400 ${isClicked?'text-white':''}`}></i>
            :face.toUpperCase()}
        </button>
    )

}

const Main = ({payment}) => {

    
    return(
        <div className='flex flex-col gap-3 items-start justify-start h-full w-full p-4'>

            <div 
            className={`flex items-center w-full h-1/6  px-1 gap-3 `}
            >
                <div
                className={`flex items-center w-4/12  gap-2 `}
                >

                   
                    <i 
                    className={`fas fa-cart-shopping fa-3x text-zinc-400 pr-1`}
                    />
                    
                    <div 
                    className="flex w-9/12 h-full border rounded-xl bg-white shadow-xl items-center justify-start py-4 px-1 text-stone-400 mt-1 gap-2"
                    >
                        <span 
                        className="text-4xl font-semibold "
                        >
                            €
                        </span>
                        <span 
                        className="text-3xl font-thin  text-end w-full"
                        >
                            {payment.dueTotal.toFixed(2)}
                        </span>
                    </div>


                </div>

                <div
                className={`flex items-center w-4/12 gap-2 pl-1`}
                >

                    <i 
                    className={`fas fa-sack-dollar fa-3x text-zinc-400 pr-1`}
                    />

                    <div 
                    className="flex w-9/12 h-full border rounded-xl bg-white shadow-xl items-center justify-start py-4 px-1 text-stone-400 mt-1 gap-2"
                    >
                        <span 
                        className="text-4xl font-semibold "
                        >
                            €
                        </span>
                        <span 
                        className="text-3xl font-thin  text-end w-full"
                        >
                            {payment.dueTotal.toFixed(2)}
                        </span>
                    </div>


                </div>

                <div
                className={`flex items-center w-4/12 gap-2 pl-1`}
                >

                    <i 
                    className={`fas fa-hand-holding-medical fa-3x text-zinc-400 pr-1`}
                    />
                    <div 
                    className="flex w-9/12 h-full border rounded-xl bg-white shadow-xl items-center justify-start py-4 px-1 text-stone-400 mt-1 gap-2"
                    >
                        <span 
                        className="text-4xl font-semibold "
                        >
                            €
                        </span>
                        <span 
                        className="text-3xl font-thin  text-end w-full"
                        >
                            {payment.dueTotal.toFixed(2)}
                        </span>
                    </div>


                </div>
                
                
            </div>
            <div
            className='flex flex-col gap-3 items-start justify-start grow w-full border rounded-xl bg-white shadow-xl p-4 text-stone-400 '
            >
                list
            </div>
            
           
        </div>
    )
   

}

const Cash = ({back}) => {

    
    return(
        <div className='flex flex-col gap-3 items-center justify-center h-full w-full debug'>
            cash payment
            <button
            onClick={back}
            >back</button>
        </div>
    )
   

}

const Bancomat = ({back}) => {

    const navigate = useNavigate()

    return(
        <div className='flex flex-col gap-3 items-center justify-center h-full w-full debug'>
            BANCOMAT payment
            <button
            onClick={back}
            >back</button>
        </div>
    )
   

}


const Bonus = ({back}) => {

    const navigate = useNavigate()

    return(
        <div className='flex flex-col gap-3 items-center justify-center h-full w-full debug'>
            BONUS payment
            <button
            onClick={back}
            >back</button>
        </div>
    )
   

}

const Difer = ({back}) => {

    const navigate = useNavigate()

    return(
        <div className='flex flex-col gap-3 items-center justify-center h-full w-full debug'>
            OTHER TYPES OF PAYMENTS
            <button
            onClick={back}
            >back</button>
        </div>
    )
   

}