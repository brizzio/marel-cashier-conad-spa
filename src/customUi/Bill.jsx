/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect }from 'react'



function Bill(props) {

  const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.
  
  useEffect(() => {

      //console.log(props.value + " count changed! --", count);

      props.update(props.value, count)
   

    
    
  }, [count]);

  useEffect(()=>{
    //console.log(`${props.value} --- props.reset! --`, props.reset)
    if (props.reset) setCount(0)

    
  },[props.reset]);

 
  

    
  
    function increment() {
      //setCount(prevCount => prevCount+=1);
      
      setCount(function (prevCount) {
        return (prevCount += 1);
      });

      
    }

    function decrement() {
      setCount(function (prevCount) {
        if (prevCount > 0) {
          return (prevCount -= 1); 
        } else {
          return (prevCount = 0);
        }
      });
    }


  return (
    <>
    
    <div className="flex flex-col w-24 justify-center items-center">
  <div className={`relative z-0 ${count > 0?'border border-4 border-teal-700':''}`}>
    <svg width="93" height="46" viewBox="0 0 93 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M66 23C66 32.9411 57.7173 41 47.5 41C37.2827 41 29 32.9411 29 23C29 13.0589 37.2827 5 47.5 5C57.7173 5 66 13.0589 66 23ZM65 23C65 32.3632 57.191 40 47.5 40C37.809 40 30 32.3632 30 23C30 13.6368 37.809 6 47.5 6C57.191 6 65 13.6368 65 23Z" fill="black"/>
      <path d="M23.4093 20.0038L22.7892 21.3346H17.3092C17.2959 21.5495 17.2892 21.7713 17.2892 22C17.2892 22.2287 17.2959 22.4505 17.3092 22.6654H22.25L21.6299 23.9962H17.4971C17.5803 24.3526 17.6885 24.6831 17.8217 24.9876C18.1767 25.7994 18.6597 26.4138 19.2708 26.8308C19.8819 27.2478 20.5694 27.4563 21.3333 27.4563C21.7288 27.4563 22.1017 27.4053 22.4522 27.3032C22.8072 27.2012 23.1375 27.0615 23.443 26.884C23.7531 26.7066 24.0384 26.507 24.299 26.2852L24.973 27.6692C24.5012 28.1084 23.9485 28.4411 23.315 28.6673C22.6814 28.8891 22.0208 29 21.3333 29C20.2279 29 19.2484 28.7161 18.3946 28.1483C17.5453 27.5805 16.8781 26.7731 16.3928 25.7262C16.1507 25.1991 15.9695 24.6224 15.8493 23.9962H14L14.4853 22.6654H15.6895C15.6775 22.4485 15.6716 22.2267 15.6716 22C15.6716 21.7733 15.6775 21.5515 15.6895 21.3346H14L14.4853 20.0038H15.8493C15.9695 19.3776 16.1507 18.8009 16.3928 18.2738C16.8781 17.2269 17.5453 16.4195 18.3946 15.8517C19.2484 15.2839 20.2279 15 21.3333 15C22.0478 15 22.7151 15.122 23.3352 15.366C23.9598 15.6099 24.5147 15.9582 25 16.4106L24.3529 17.7947C24.0654 17.5374 23.7621 17.3156 23.443 17.1293C23.124 16.943 22.7892 16.7988 22.4387 16.6968C22.0882 16.5947 21.7198 16.5437 21.3333 16.5437C20.5694 16.5437 19.8819 16.7522 19.2708 17.1692C18.6597 17.5862 18.1767 18.2006 17.8217 19.0124C17.6885 19.3169 17.5803 19.6474 17.4971 20.0038H23.4093Z" fill="black"/>
      <path d="M78.4093 20.0038L77.7892 21.3346H72.3092C72.2959 21.5495 72.2892 21.7713 72.2892 22C72.2892 22.2287 72.2959 22.4505 72.3092 22.6654H77.25L76.6299 23.9962H72.4971C72.5803 24.3526 72.6885 24.6831 72.8217 24.9876C73.1767 25.7994 73.6597 26.4138 74.2708 26.8308C74.8819 27.2478 75.5694 27.4563 76.3333 27.4563C76.7288 27.4563 77.1017 27.4053 77.4522 27.3032C77.8072 27.2012 78.1375 27.0615 78.443 26.884C78.7531 26.7066 79.0384 26.507 79.299 26.2852L79.973 27.6692C79.5012 28.1084 78.9485 28.4411 78.3149 28.6673C77.6814 28.8891 77.0208 29 76.3333 29C75.2279 29 74.2484 28.7161 73.3946 28.1483C72.5453 27.5805 71.8781 26.7731 71.3928 25.7262C71.1507 25.1991 70.9695 24.6224 70.8493 23.9962H69L69.4853 22.6654H70.6895C70.6776 22.4485 70.6716 22.2267 70.6716 22C70.6716 21.7733 70.6776 21.5515 70.6895 21.3346H69L69.4853 20.0038H70.8493C70.9695 19.3776 71.1507 18.8009 71.3928 18.2738C71.8781 17.2269 72.5453 16.4195 73.3946 15.8517C74.2484 15.2839 75.2279 15 76.3333 15C77.0478 15 77.7151 15.122 78.3352 15.366C78.9598 15.6099 79.5147 15.9582 80 16.4106L79.3529 17.7947C79.0654 17.5374 78.7621 17.3156 78.443 17.1293C78.124 16.943 77.7892 16.7988 77.4387 16.6968C77.0882 16.5947 76.7198 16.5437 76.3333 16.5437C75.5694 16.5437 74.8819 16.7522 74.2708 17.1692C73.6597 17.5862 73.1767 18.2006 72.8217 19.0124C72.6885 19.3169 72.5803 19.6474 72.4971 20.0038H78.4093Z" fill="black"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.49976 43H85.001C85.001 43.0153 85 43.0306 85 43.046L89.4873 43.0931L89.4883 43H90V7.65369L90.0696 7.65405L90.0461 3H3V43.046L7.49976 43.0933V43ZM89 7.60754C86.718 7.39417 85.988 6.41467 86.0056 4H7.0459C7.06421 6.31946 6.31787 7.25317 4 7.4563V39.0107C6.31934 39.0077 7.26123 39.7389 7.45874 42H85.0588C85.3091 39.5723 86.3613 38.9064 89 39.0548V7.60754Z" fill="black"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M0.5 0.5V45.5H92.5V0.5H0.5ZM1 1H92V45H1V1Z" fill="black"/>
      </svg>
    <div className="absolute inset-0 flex justify-center items-center z-10">
      <p className="text-normal font-bold">{props.value}</p>
    </div>
  </div>

  <div className={`flex flex-row items-center justify-between	border border-gray-300 rounded-full w-full  py-0.5 mt-2`}>
              <button className='w-6 items-center ml-2' onClick={decrement}>
              <i className="fa-solid fa-minus text-zinc-400"></i>
              </button>

              <div className={`flex flex-row items-center gap-2`}>
                  <span className={`text-2xl ${count>0?'font-bold':'font-thin'}`}>{count}</span>
              </div>
             
             <button className='w-6 items-center mr-2' onClick={increment}>
              <i className="fa-solid fa-plus text-zinc-400"></i>
             </button>
              
  </div> 
  
</div>
</>
  )
}

export default Bill;
