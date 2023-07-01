/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import useCart from '../../../hooks/useCart';
import usePersistentContext from '../../../hooks/usePersistentContext';
import useTimeZoneDate from '../../../hooks/useTimeZone';
import useScanner from '../../../hooks/useScanner';

const useCheckout = () => {


  const paymentModel = {
    isEditing:false,
    dueTotal:0,
    cashedInTotal:0,
    pending:0,
    list:[],
    isFulfilled:false
}

  const paymentItemModel = {
    isEditing:false,
    dueTotal:0,
    cashedInTotal:0,
    pending:0,
    list:[],
    isFulfilled:false

  }


  const optionsModel= [
    {
        id:1,
        type:'bancomat',
        url:'bancomat',
        title:'carte',
        icon:'fas fa-credit-card',
        selected:false,
        total:0
    },
    {
        id:2,  
        type:'cash',
        url:'cash',
        title:'contanti',
        icon:'fas fa-hand-holding-dollar',
        selected:false,
        total:0
    },
    {
      id:3,  
      type:'bonus',
        url:'bonus',
        title:'bonus',
        icon:'fas fa-gifts',
        selected:false,
        total:0
    },
    {
      id:4,
        type:'difer',
        url:'difer',
        title:'altri',
        icon:'fas fa-money-check-dollar',
        selected:false,
        total:0
    },

   
]

const keyPayment = 'payment'
const keyOptions = 'options'
const [payment, setPayment] = usePersistentContext(keyPayment)
const [options, setOptions] = usePersistentContext(keyOptions)

const {
  currentCart,
  updatePayment
}= useCart()

const {clearReaded} = useScanner()


const {
  millis,
  formattedDate,
  formattedTime
} = useTimeZoneDate()


    

    const init = () =>{
      console.log('init payment and options')
      //clear last reading from scanner
      clearReaded()
      setPayment({
        ...paymentModel,
        isEditing:true,
        dueTotal:currentCart?.total,
        cashedInTotal:0,
        pending:currentCart?.total,

      })
      setOptions(optionsModel)
    }

   
    const setRowSelectedByIndex = (index) => {
      let selectedOptions = [...options].reduce((a, c, i) => {
        return [...a, { ...c, selected: i === index ? true : false }];
      }, []);
      
      setOptions(selectedOptions)
    };

    const clearSelections = () => {
      let clearedOptions = [...options].reduce((a, c, i) => {
        return [...a, { ...c, selected: false }];
      }, []);
      
      setOptions(clearedOptions)
      
    };


    const updateOptionTotal = (val) => {
      let updatedOptions = [...options].reduce((a, c, i) => {
        if(c.selected){
          let sum = Number(c.total + val)
          c.total = sum
        }
        return [...a, { ...c}];
      }, []);
      
      setOptions(updatedOptions)
    };

    const addPaymentToList=(item)=>{
      console.log('add payment to list', item)
      let opt = options.filter(el=> el.selected == true)[0]
      console.log('opt', opt)
      item.id= millis,
      item.added_at_date=formattedDate,
      item.added_at_time=formattedTime,
      item.value=Number(item.raw.amount)
      item.type_id=opt.id
      item.type=opt.type
      item.type_name=opt.title
      
      let newList = [...payment.list, item ]
      
      setPayment({
        ...payment,
        cashedInTotal:Number(item.raw.amount),
        pending:Number(payment.dueTotal-item.raw.amount),
        list:newList
      })

      updateOptionTotal(item.raw.amount)
    }

    const option = ()=>{
      return options.filter(el=> el.selected === true)[0]
    }

    const updateCurrentCartWithPaymentData = ()=>{

      const pymt = {
        ...payment,
        options:options
      }

      updatePayment(pymt)
      


    }

    const resetPayment = () => setPayment(null)

    

   /*  const updateTotalToSelectedRow = (aquant) => {
      const arr = [...inventory].reduce((a, c, i) => {
        let updatedRow = c.selected
        ?{
          ...c,
          quantity:quant,
          selected:false}
        :{...c}
        return [...a, { ...updatedRow }];
      }, []);
      //console.log('arr', arr)
      setInventory(arr);
      
    };

    let total = [...inventory].reduce((a,el)=>{
      let val = Number(el.value) * Number(el.quantity)
      return a + val
  },0) */
  

   
  

  return {
  
   init,
   setRowSelectedByIndex,
   updateCurrentCartWithPaymentData,
   clearSelections,
   addPaymentToList,
   resetPayment,
   payment,
   options,
   option
   //total
  }
}

export default useCheckout

