/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'

const useCheckout = () => {

  const optionsModel= [
    {
        type:'bancomat',
        url:'bancomat',
        title:'carte',
        icon:'fas fa-credit-card',
        selected:false,
        total:0
    },
    {
        type:'cash',
        url:'cash',
        title:'contanti',
        icon:'fas fa-hand-holding-dollar',
        selected:false,
        total:0
    },
    {
        type:'bonus',
        url:'bonus',
        title:'bonus',
        icon:'fas fa-gifts',
        selected:false,
        total:0
    },
    {
        type:'difer',
        url:'difer',
        title:'altri',
        icon:'fas fa-money-check-dollar',
        selected:false,
        total:0
    },
]

const paymentsModel= {
        isEditing:false,
        dueTotal:0,
        cashedInTotal:0,
        list:[],
        isFulfilled:false
    }


   
    const setRowSelectedByIndex = (arr=optionsModel, index) => {
      return [...arr].reduce((a, c, i) => {
        return [...a, { ...c, selected: i === index ? true : false }];
      }, []);
           
    };

    const clearSelections = (arr=optionsModel) => {
      return [...arr].reduce((a, c, i) => {
        return [...a, { ...c, selected: false }];
      }, []);
      
      
    };

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
   optionsModel,
   paymentsModel,
   setRowSelectedByIndex,
   //updateQuantityToSelectedRow,
   clearSelections,
   //total
  }
}

export default useCheckout

