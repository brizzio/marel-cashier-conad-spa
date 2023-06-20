/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import useScanner from './useScanner'
import { useNavigate } from 'react-router-dom'
import usePersistentContext from './usePersistentContext'


let cashierModel = {
    session_id:crypto.randomUUID(),
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

    const navigate = useNavigate()

    const openCashier = React.useCallback(() => {
        setCashier({...cashierModel, is_active:true})
        initialize()
        navigate('cashier')
    })

    const closeCashier = React.useCallback(() => { 

        if(cashier 
            && cashier.is_active 
            && !cashier.carts.lenght)
        if (window.confirm(emptyCashierDeleteMessage)) setCashier(null) 

        if(cashier 
            && cashier.is_active 
            && cashier.carts.lenght)
        if (window.confirm(cashierCloseMessage)) setCashier({
            ...cashierModel, 
            is_active:false,
            is_closed:true
        })

    },[cashier])

    const updateCashier = (obj) => setCashier({...cashierModel, ...obj})


  return {
    openCashier,
    closeCashier,
    updateCashier,
    cashier
    
    }
}

export default useCashier