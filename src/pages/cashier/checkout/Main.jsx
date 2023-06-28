/* eslint-disable no-unused-vars */
import DueCashedPendingHeader from "./DueCashedPendingHeader";
import { PropTypes } from "prop-types";
import useCheckout from "./useCheckout";

const Main = () => {

 
  const {
    payment
  } = useCheckout()

  if(payment?.dueTotal == 0) return(
    <div
                className='flex w-5/6 h-5/6 mx-auto items-center justify-center text-stone-400 text-4xl font-thin'
                >
                    Scegli una forma di pagamento
                </div>
  )

    return(
        <div className='flex flex-col gap-3 items-center justify-end h-full w-full p-6 bg-white'>

            <DueCashedPendingHeader />

            <div
            className='flex flex-col gap-3 items-start justify-start h-5/6 w-full border rounded-xl bg-white shadow-xl p-4 text-stone-400 '
            >
            {
                payment?.list.length
                ?[...payment.list].map((el,i)=>{
                    return(
                        <div key={i}
                        className='flex w-full gap-4 text-2xl items-center bg-stone-200 rounded-xl shadow-xl py-4 px-2 text-teal-700'
                        >
                            <span>{i+1}</span>
                            <span>{el.id}</span>
                            <span>{el.type_name}</span>
                            <span>{el.raw.operator}</span>
                            <span>{el.value}</span>
                        </div>
                    )
                })
                :<div
                className='flex w-5/6 h-5/6 mx-auto items-center justify-center text-stone-400 text-4xl font-thin'
                >
                    {payment?.pending == 0
                    ?<button
                    className={`btn-primary`}
                    >
                        CONFERMA
                    </button>
                    :'Scegli una forma di pagamento'}
                </div>

            }
            </div>
            
           
        </div>
    )
   

}

/* Main.propTypes = {
    
    payment: PropTypes.shape({
        dueTotal:PropTypes.number,
        cashedInTotal:PropTypes.number,
        pending:PropTypes.number,
        list:PropTypes.array,
    }),
    action: PropTypes.func,
  };

Main.defaultProp = {
    payment:{
        dueTotal:0,
        cashedInTotal:0,
        pending:0,
        list:[],
    }
} */


export default Main



       