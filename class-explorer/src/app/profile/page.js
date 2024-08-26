'use client'

import React, { useState } from 'react';
import Navbar from "../components/navbar";
import Profile from "../components/profile"

export default function Page() {
   
    return (
        <div>
            <Navbar />
            <div>
                <Profile/> 
            </div>
        </div>
    );
}
