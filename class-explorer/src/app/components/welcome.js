import React from 'react'; 

function Welcome() {

    return (
        <> 
            <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
                <p className="fixed justify-end pr-10 right-0 top-0 flex w-full pb-5 pt-5 bg-white border-b border-black" style={{ borderBottomWidth: '1px' }}>
                    <img src="/uofcLogo.png" className="w-12"/>
                </p>
            </div>
  
            <div className="flex mt-60 flex-col  items-center sm:mt-40 ">
                <p className="text-4xl  font-bold sm:text-6xl lg:text-8xl"> 
                    CLASS EXPLORER
                </p>
            
                <p className="text-md lg:text-2xl"> 
                    Empowering students, one class at a time. 
                </p>

                <div className="flex flex-col items-center space-y-4 mt-5 text-lg lg:flex-row lg:space-y-0 lg:space-x-4">
                    <button className="bg-red-800 hover:bg-red-900 text-white font-bold w-40 py-3">
                    LogIn
                    </button>
                    <button className="bg-red-800 hover:bg-red-900 text-white font-bold w-40 py-3">
                    SignIn
                    </button>
                </div>


                <p className="flex flex-col mt-5 text-xl"> 
                    University of Calgary 
                </p> 

            </div>    
        </>
    )
}
  
export default Welcome; 