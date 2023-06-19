import React from 'react'
import usePersistentContext from './usePersistentContext'

const useCashInventory = () => {

    const key = 'inventory'
    const [inventory, setInventory] = usePersistentContext(key)
  
    React.useEffect(() => {
      let existing = localStorage.getItem(key)
      if(!existing) {
        console.log('registering new device')
        setInventory(inventoryDefaultData)
      }
    }, []);

    const balance = inventory?.filter(el => {
        return el.quantity > 0;
      });

  return {
    balance
  }
}

export default useCashInventory



let inventoryDefaultData = [

    {type:'bill', face:'200', value:200, quantity:100},
    {type:'bill', face:'100', value:100, quantity:100},
    {type:'bill', face:'50' ,value:50 ,quantity:100},
    {type:'bill', face:'20' ,value:20 ,quantity:100},
    {type:'bill', face:'10' ,value:10 ,quantity:100},
    {type:'bill', face:'5' ,value:5, quantity:100},        
    {type:'bill', face:'2' ,value:2 , quantity:100},        
    {type:'bill', face:'1' ,value:1 , quantity:100},       
    {type:'coin', face:'2€' ,value:2 ,quantity:100},
    {type:'coin', face:'1€' ,value:1 , quantity:100},
    {type:'coin', face:'50C', value:0.5, quantity:100},
    {type:'coin', face:'25C', value:0.25 , quantity:100},
    {type:'coin', face:'20C', value:0.20 , quantity:100},
    {type:'coin', face:'10C', value:0.10 , quantity:100},
    {type:'coin', face:'5C' ,value:0.05 , quantity:100 },        
    {type:'coin', face:'1C' ,value:0.01 , quantity:100 },     
     ]

     
  
    /* //let notes = [ 2000, 500, 200, 100, 50, 20, 10, 5, 1 ];
    let noteCounter = [];
    
    // count notes using Greedy approach
    //console.log('splitting...', amount)
    for (let i = 0; i < filtered.length; i++) {
      //console.log('amount >= filtered[i].value', amount >= filtered[i].value, i, filtered[i].value)
        if (amount >= filtered[i].value) {

            let obj ={
              type:filtered[i].type, 
              face:filtered[i].face, 
            }

            obj.count = Math.floor(amount / filtered[i].value);

            //console.log('obj', obj)
            noteCounter[i] = obj;
            amount = amount % filtered[i].value;
            //console.log('next amount value', amount)
        }
    }
     */