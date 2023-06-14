/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import React from 'react'
import useScanner from '../hooks/useScanner';

const Keyboard = () => {

    const defaultTitle = 'Q'
    const confirmTitle = 'CONFERMA'
    const cn = `text-stone-400`

    const [scan, setScan] = React.useState({})
    const [quantity, setQuantity] = React.useState(1)
    const [input, setInput] = React.useState('1')
    const [quantityButtonTitle, setQuantitybuttonTitle] = React.useState(defaultTitle)
    const [isQuantityButtonClicked, setIsQuantityButtonClicked] = React.useState(false)
    const [quantityClass, setQuantityClass] = React.useState(cn)
    
    
    const inputRef = React.useRef()

    const { clearReaded, readed} = useScanner()


    React.useEffect(()=>{
        console.log('kb readed changed', readed)
        const gotReaded = JSON.stringify(readed) !== '{}'
        if(!isQuantityButtonClicked && gotReaded) processReading(readed)
        gotReaded && logNewReadingToStorage(readed) 
    }, [readed, isQuantityButtonClicked])


    const processReading=(data)=>{
        setScan(data)
        const updatedRead = {
            ...data, 
            quantity:Number(quantity),
            processed:true
        }
        console.log('updatedRead',updatedRead)
        setInput(quantity)
        setQuantity(1)
        
    }


    const logNewReadingToStorage = (data)=>{
        
        let existing = localStorage.getItem('readings')
        existing = existing ? JSON.parse(existing) : []
        localStorage.setItem("readings",JSON.stringify([...existing, data])); 
        clearReaded()
    }

    /* React.useEffect(() =>{ 
    
    
    console.log('key eff obj',lastRead, isQuantityButtonClicked, waitForNewRead,input)

    if(waitForNewRead){
        setWaitForNewRead(false)
        return;
    }

    if(!isQuantityButtonClicked ){

        if(JSON.stringify(lastRead) !== '{}') return;
        let c = lastRead.code
        setCode(c)
        const updatedRead = {...lastRead, quantity:Number(quantity)}
        console.log('updatedRead',updatedRead)
        setQuantity(1)
       
    }
    },[lastRead, isQuantityButtonClicked, waitForNewRead, input, quantity]) */

    const handleKeyClick= (e)=>{
        //console.log(e)
        let str = input + e.target.value
        setInput(str)
    }

    const handleClearInput= (e)=>{
        //console.log(e)
        setInput('')
    }

    const qBtnClick = ()=>{
        if(!isQuantityButtonClicked){
            setQuantityClass(`text-white w-fit bg-white/20`)
            setQuantitybuttonTitle(confirmTitle)
            setIsQuantityButtonClicked(true)
            setScan({})
            setInput('')
            clearReaded()
            
            return;
        }

        setIsQuantityButtonClicked(false)
        setQuantitybuttonTitle(defaultTitle)
        setQuantityClass(cn)
        setQuantity(input)
        
        

        
    }


const btnClass = `w-full py-2 px-4 bg-white text-stone-800 text-3xl font-semibold rounded-lg shadow-md `

const qBtnClass = `w-full py-2 px-4 ${isQuantityButtonClicked?'bg-teal-600 text-white':'bg-white text-stone-800'} text-3xl font-semibold rounded-lg shadow-md `

  return (
    
        <div className="flex flex-col gap-1 h-full pt-2 ">
            <div className={`relative w-full h-[9rem] bg-stone-600 row-span-2 col-span-3 flex flex-col text-white rounded-xl shadow-lg px-3 items-center pt-2`}>
            <input  hidden ref={inputRef} className = 'text-black' value={input} onChange={e => setInput(e.target.value)} />
                <div className={`w-full flex flex-row text-white text-7xl gap-3  items-center`}>
                    <span className={quantityClass}>{input}</span>
                    <span className='pb-1'>|</span>
                    <span>{!!scan?scan.code:''}</span>
                </div>
                <div className={`absolute bottom-2 w-full h-fit flex flex-row text-white text-2xl font-thin justify-between px-4 items-center`}>
                    <span>{!!scan?scan.evaluationType: ''}</span>
                    <span>{!!scan?scan.count: ''}</span>
                    <span>{!!scan?scan.read_at: ''}</span>

                </div>
            </div>
        
        <div className="grow grid grid-flow-row grid-cols-3 grid-rows-5 gap-1.5">
            <button className={qBtnClass} onClick={qBtnClick}>{quantityButtonTitle}</button>
            <button className={btnClass}>000</button>
            <button className={btnClass}>BACK</button>
            <button className={btnClass} onClick={handleKeyClick} value='7'>7</button>
            <button className={btnClass} onClick={handleKeyClick} value='8'>8</button>
            <button className={btnClass} onClick={handleKeyClick} value='9'>9</button>
            <button className={btnClass} onClick={handleKeyClick} value='4'>4</button>
            <button className={btnClass} onClick={handleKeyClick} value='5'>5</button>
            <button className={btnClass} onClick={handleKeyClick} value='6'>6</button>
            <button className={btnClass} onClick={handleKeyClick} value='1'>1</button>
            <button className={btnClass} onClick={handleKeyClick} value='2'>2</button>
            <button className={btnClass} onClick={handleKeyClick} value='3'>3</button>
            <button className={`${ btnClass} col-span-2`} onClick={handleKeyClick}>0</button>
            <button className={btnClass} onClick={handleClearInput}>CLEAR</button>
        </div>
    
        </div>
  )
}

export default Keyboard

{/* <div className="flex items-center justify-center gap-1">
                        <button className={`${regularBtnClass}`}>CONTR. PREZZO ART</button>
                        <button className={`${regularBtnClass}`}>RESO <br/> ART</button>
                        <button className={`${regularBtnClass}`}>STORNO ART PRECEDENTE</button>
                        <button className={`${regularBtnClass}`}>STORNO ULT ARTICOLO</button>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                        <button className={`${largeBtnClass}`}>SHOP BIO PICCOLA</button>
                        <button className={`${largeBtnClass}`}>SHOP BIO GRANDE</button>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                        <button className={`${largeBtnClass}`}>G. VARI</button>
                        <button className={`${largeBtnClass}`}>MUI. SA. FO.</button>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                        <button className={`${largeBtnClass}`}>BANC. SA. FO.</button>
                        <button className={`${largeBtnClass}`}>PANET</button>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                        <button className={`${largeBtnClass}`}>SURGEL</button>
                        <button className={`${largeBtnClass}`}>NO FOOD</button>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                        <button className={`${largeBtnClass}`}>PESCE</button>
                        <button className={`${largeBtnClass}`}>CARNE</button>
                    </div>
                   
                    <div className="flex items-start justify-center gap-2">
                        <button className={`py-[1.9rem] px-4 w-1/2 bg-white bg-opacity-90 font-semibold border-2 border-teal-900 rounded-lg shadow-lg`}>FRUTTA</button>
                        <div className="flex gap-1 w-1/2">
                            <button className={`py-[1.9rem] text-center w-1/2 bg-white bg-opacity-90 text-teal-800 rounded-lg shadow-lg`}>SACCH. BIO</button>
                            <button className={`py-[1.9rem] text-center w-1/2 bg-white bg-opacity-90 text-teal-800 rounded-lg shadow-lg`}>P. CASSA</button>
                        </div>
                    </div> */}