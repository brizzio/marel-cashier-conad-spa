/* eslint-disable no-unused-vars */
import React from 'react'
import usePersistentContext from './usePersistentContext'
import useTimeZoneDate from './useTimeZone'
import useCart from './useCart'
import useCashier from './useCashier'

const useTicket = () => {

const [ticket, setTicket] = usePersistentContext('ticket')

const {
    currentCart,
    updateTicket
} = useCart()

const {cashier} = useCashier()

const {
    millis,
    formattedDate,
    formattedTime
  } = useTimeZoneDate()



const generate = async()=>{
    
    try {

    const cart = {...currentCart}
    const items = cart.items?[...cart.items ]:[]
    const pays = [...cart.payment.list ]
    const c = {...cashier}
    const ticket = {}

    ticket.id={
        data:crypto.randomUUID(),
        title:'scontrino'

    }

    ticket.seq ={
        data: millis,
        title:'n'
    }

    ticket.date ={
        data: formattedDate,
        title:'data'
    }
    ticket.time ={
        data: formattedTime,
        title:'ora'
    }

    ticket.tenant={
        data:c.company_corporate_name,
        title:'ditta'
    }
    ticket.retail_banner={
        data:c.company_retail_banner,
        title:'insegna'
    }
    ticket.logo={
        data:c.company_retail_banner_logo_url,
        title:''
    }

    ticket.store_id={
        data: c.company_store_id,
        title:'num.'
    }
    ticket.store_name={
        data: c.company_store_name,
        title:'neg.'
    }
    ticket.fiscal_code={
        data:c.company_store_fiscal_code,
        title:'IVA'
    }

    ticket.origin_device={
        data:c.did,
        title:'CASSA'
    }

    ticket.items = [...items].map((el)=>{
    
        return {
            upc:el.upc,
            product:el.product_name,
            order:el.order,
            weight:numericWeight(el.weight),
            weight_unit:'g',
            currency:c.currency,
            price:el.calculated_price,
            price_type:el.calculated_price == el.regular_price
            ?"R"
            :"P"
        }
    })

    ticket.amount={
        data:cart.total.toFixed(2),
        title:'totale'
    }

    ticket.weight={
        data:cart.weight,
        title:'peso'
    }

    ticket.cashed_in_total = {
        data:cart.payment.cashedInTotal,
        title:'importo'
    }

    ticket.payment = [...pays].map((el)=>{
    
        return {
            ...el.raw,
            type:'debito',
            mode:el.type_name,
            id:el.id
        }
    })

    ticket.invoice = await invoice(ticket)

    
    setTicket(ticket)

    return true
        
    } catch (error) {
        console.log('printTicket error: ',error)
    }
   

}











//reduces ticket object to lines of text
const invoice = React.useCallback(async (tkt) =>{

    const lines = []
    const line = ''
    const footer=[]
    const comments = []
    const items = []
    
    const size = 60
    const filler = " "
    const base = filler.repeat(size)

    

    const str = {
        
        at: (index, replacement, str)=>{
        let s = str || base    
        return s.substring(0, index) + replacement.toUpperCase() + s.substring(index + replacement.length)
        },
        
        centered: (replacement, str)=>{
            console.log('invoice replacement', replacement)
        let s = str || base
        let index = Math.floor((s.length - replacement.length)/2)
        return s.substring(0, index) + replacement.toUpperCase() + s.substring(index + replacement.length )
        },
        
        end: (replacement, str) => {
        let s = str || base
        
        let index = s.length - replacement.length
        return s.substring(0, index) + replacement.toUpperCase() + s.substring(index + replacement.length)
        },

        startEnd: (strStart, strEnd, str) => {
            let s = str || base
            
            let s1 = s.substring(0, 0) + strStart.toUpperCase() + s.substring(strStart.length)

            let index = s.length - strEnd.length
            return s1.substring(0, index) + strEnd.toUpperCase() + s.substring(index + strEnd.length)
            }
    
    } 

    console.log('invoice got ticket', tkt)

    
    
    
    const header = [
        str.centered(tkt.tenant.data),
        base,
        str.centered(tkt.store_name.data),
        str.centered(`${tkt.date.data} -- ${tkt.time.data}`),
        base,
        str.centered(`DOCUMENTO NON-FISCALE`),
        str.startEnd(' prodotto','euro ')

    ]

    let it = [...tkt.items].reduce((a,c)=>{
        console.log('it reduce  ', a)
            let p = c.product.lenght > 25
            ?c.product.substring(0,25) + '...'
            :c.product
            let w = `${c.weight}${c.weight_unit} ${c.order}`
            let left = `${str.end(c.upc, '0'.repeat(13))} ${p} ${w}`
            let right = ` ${c.price_type} ${c.currency} ${c.price}`
            let row = str.startEnd(left, right)
        return [...a , row]
    },[])




    return [
                ...header,
                ...it,
                base,
                str.end(`${tkt.amount.title}: ${tkt.amount.data}`)

               
                
           ]

    

},[])

  const printed = () => !!ticket && !!currentCart.ticket

  const reset = () => setTicket(null)

  const save = () => updateTicket({...ticket})

  return {

    ticket,
    save,
    generate,
    reset,
    printed,
  }

}

export default useTicket

const numericWeight = (w)=>{
    //console.log('numericWeight', w)
    return w.toString().indexOf(',')>0
    ?w.replace(',','.')*1000
    :w * 1000

}

