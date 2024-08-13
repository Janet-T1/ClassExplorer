import React from "react";
import Image from "next/image";

const Course = ({ title, description, linkUrl }) => {
  return (
    <div className="bg-red-200 flex flex-row gap-10 rounded p-3 sm:gap-60 lg:gap-80"> 
        
        
        <div className="flex flex-col w-full "> 
            <h1 className="font-bold uppercase text-xl  "> {title} </h1>
            <p className="text-sm "> {description} </p>
        </div> 

        <button className="bg-[#2b2b2b] text-white  px-4 rounded hover:bg-black text-sm" > View </button> 
    </div> 

   
  );
};

export default Course;