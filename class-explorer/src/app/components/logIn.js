'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <p className="fixed justify-end pr-10 right-0 top-0 flex w-full pb-5 pt-5 bg-white border-b border-black" style={{ borderBottomWidth: '1px' }}>
          <img src="/uofcLogo.png" className="w-12" />
        </p>
      </div>

      <div className="flex mt-60 flex-col items-center sm:mt-40">
        <p className="text-4xl font-bold sm:text-6xl lg:text-8xl">
          CLASS EXPLORER
        </p>

        <p className="text-sm lg:text-2xl">
          Empowering students, one class at a time.
        </p>

        <div className="flex flex-col items-center justify-center w-full mt-10">
          <div className="relative  bg-white rounded-sm shadow-md sm:w-full sm:max-w-md  p-8">
            <Link href="/" className="absolute top-2 left-2 text-blue-500 hover:text-blue-700 flex items-center">
              <IoArrowBack className="mr-2" size={24} />
              Back
            </Link>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  School Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="name@school.edu"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="********"
                  required
                />
              </div>
              <div className="mb-6 text-right">
                <Link href="/forgot-password" className="text-blue-500 underline hover:text-blue-700">Forget Password?</Link>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white font-bold py-2 px-4 rounded-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                >
                  <Link href="../home"> Login </Link>
                </button>
              </div>
            </form>
          </div>

          <p className="flex flex-col mt-5 text-lg sm:text-xl items-center">
            University of Calgary
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;

