import React from 'react'; 

import Link from 'next/link';
import NavBar from '../components/navbar';
import Courses from '../components/courses';


function Home() {

    return (
        <> 
            <NavBar /> 
  
            <div className="flex mt-10 flex-col  items-center sm:mt-10 lg:mt-10 ">
                <p className="text-2xl  font-bold sm:text-4xl lg:text-6xl"> 
                    Main Classes in Your Major: 
                </p>

            <Courses/> 
            
                

            </div>    
        </>
    )
}
  
export default Home; 