'use client';
import React, { useState } from 'react';
import { IoSearch, IoPerson } from 'react-icons/io5';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import Link from 'next/link';

function NavBar() {
    const [showDropdown, setDropdown] = useState(false); 

    const toggleDropdown = () => {
        setDropdown(!showDropdown);
    };

    const closeDropdown = () => {
        setDropdown(false);
    };

    return (
        <div className="z-10 w-full flex items-center justify-between font-mono text-sm bg-white border-b border-black p-5 relative">
            <div className="flex items-center">
                <Link href="/home"> <img src="/uofcLogo.png" className="w-12 sm:ml-5 sm:mr-5 lg:ml-5 lg:mr-5" alt="UofC Logo" /></Link>
            </div>
            <div className="flex items-center w-full max-w-7xl mx-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-3 py-2 border rounded-l-sm text-black focus:outline-none focus:ring-2 focus:ring-red-700 sm:px-5"
                />
                <button className="bg-white p-2 rounded-r-sm focus:outline-none focus:ring-2 focus:ring-red-700 m-2">
                    <IoSearch className=" text-black  hover:text-red-700" size={24} />
                </button>
            </div>

            <ul className="flex items-center flex-row relative">
                <li>  
                    <Link href="/profile" className="hover:bg-red-700">
                        <IoPerson className="text-black sm:mr-5 lg:mr-10" size={24} /> 
                    </Link> 
                </li> 
                <li className="relative">
                    <button onClick={toggleDropdown}>
                        {showDropdown ? (
                            <FaCaretUp className="ml-1 group-hover:rotate-180 transition-transform duration-200"/> 
                        ) : (
                            <FaCaretDown className="ml-1 group-hover:rotate-180 transition-transform duration-200"/>
                        )}
                    </button>
                    {showDropdown && (
                        <ul className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg z-20 w-48">
                            <li onClick={closeDropdown} className="p-2 hover:bg-gray-200 text-center"> 
                                <Link href="../profile" > My Profile</Link> 
                            </li>
                            <li onClick={closeDropdown} className="p-2 hover:bg-gray-200 text-center"> 
                                <Link href="../ratings"> My Remarks</Link> 
                            </li>
                            <li onClick={closeDropdown} className="p-2 hover:bg-gray-200 text-center"> 
                                <Link href="../logIn"> Log Out</Link> 
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
