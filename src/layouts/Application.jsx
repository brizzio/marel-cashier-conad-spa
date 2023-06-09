/* eslint-disable react/prop-types */
export const AppLayout = ({
    children
}) => {

   
    
    return(
        <>
       <div className="flex flex-col w-screen aspect-video mx-auto p-3 bg-gray-100 min-w-[900px] max-h-[1000px]"
       style={{backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/006/469/228/small/abstract-white-background-with-halftone-texture-free-vector.jpg)'}}>
        <div className="w-full  h-14 bg-white bg-opacity-70 border border-stone-600 rounded-xl flex flex-row items-center justify-start px-3">
            <img 
                className="w-[6rem]"
                src='/marel-logo.png' />
        </div>
        <div className="grow w-full mt-2  rounded drop-shadow-lg">
            {children}
        </div>
        <div className="w-full h-14 mt-2 bg-white bg-opacity-70 rounded-xl flex flex-row items-center justify-end px-3">
            <img 
            className="h-[0.75rem]"
            src='/bizerba-logo.png' />
        </div>
       </div>

        </>
    )
    
    };