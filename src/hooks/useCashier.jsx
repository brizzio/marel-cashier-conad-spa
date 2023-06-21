/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import useScanner from './useScanner'
import { useNavigate } from 'react-router-dom'
import usePersistentContext from './usePersistentContext'
import useCashInventory from './useCashInventory'
import useTimeZoneDate from './useTimeZone'
import useSessions from './useSessions'


let cashierModel = {
    
    is_active:false,
    did:'',
    company:'',
    company_id:'',
    company_retail_banner:'',
    company_store_name:'',
    company_store_id:'',
    company_store_lat:'',
    company_store_lng:'',
    company_country_iso:'',
    company_country_name:'',
    company_postal_code:'',
    operator_user_id:'',
    operator_user_name:'',
    operator_user_role:'',
    operator_user_is_admin:'',
    operator_user_is_superuser:'',
    carts:[],
    sales_amount:0,
    taxes_amount:0,
    is_closed:false,
    is_errored_on_close:false,
    error_message:''

}



const useCashier = () => {

    const key = 'cashier'
    const [cashier={}, setCashier] = usePersistentContext(key)
    
    const emptyCashierDeleteMessage = "Vuoi chiudere il cassa non iniziato?"

    const cashierCloseMessage = "Inizio della chiusura del cassa... Vuoi continuare?"

    const {initialize} = useScanner()
    //const {inventory } = useCashInventory()

    const {save} = useSessions()

    const {
        
        formattedDate,
        formattedTime,
         
      } = useTimeZoneDate()

    const navigate = useNavigate()

    const getInventory =()=>JSON.parse(localStorage.getItem('inventory'))

    const openCashier = React.useCallback(() => {
        setCashier({
            ...cashierModel, 
            session_id:crypto.randomUUID(),
            is_active:true,
            open_date:formattedDate,
            open_time:formattedTime,
            inventory_on_start:getInventory()
        })
        initialize()
        navigate('cashier')
    })

    const closeCashier = React.useCallback(() => { 

        console.log('closeCashier',cashier 
        && cashier.is_active 
        && !cashier.carts.length,
         
        cashier.is_active ,
        cashier.carts.length
        
        )

        if(cashier 
            && cashier.is_active 
            && !cashier.carts.length)
            if (window.confirm(emptyCashierDeleteMessage)) setCashier(null) 

        if(cashier 
            && cashier.is_active 
            && cashier.carts.length)
            if (window.confirm(cashierCloseMessage)) {
                let session = {
                    ...cashier, 
                    is_active:false,
                    is_closed:true,
                    close_date:formattedDate,
                    close_time:formattedTime,
                    inventory_on_end:getInventory()
                    
                }
                console.log('session', session)
                save(session)
                setCashier(cashierModel)


            }//close if window confirm



    },[cashier])

    const updateCashier = (obj) => setCashier({...cashier, ...obj})

    const insertCart = React.useCallback((cart) => {
        let updatedCarts = [...cashier.carts, cart]
        setCashier({...cashier, carts:updatedCarts})
    })

  return {
    openCashier,
    closeCashier,
    updateCashier,
    insertCart,
    cashier
    
    }
}

export default useCashier