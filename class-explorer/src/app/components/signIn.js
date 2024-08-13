'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [schoolEmail, setSchoolEmail] = useState('');
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
    } else if (password !== repeatPassword) {
      setErrorMessage('Passwords do not match.');
    } else {
      setErrorMessage('');
      // Add sign-up logic here
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('School Email:', schoolEmail);
      console.log('Student ID:', studentID);
      console.log('Password:', password);
    }
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
          <div className="relative bg-white rounded-sm shadow-md sm:w-full sm:max-w-md p-8">
            <Link href="/" className="absolute top-2 left-2 text-blue-500 hover:text-blue-700 flex items-center">
              <IoArrowBack className="mr-2" size={24} />
              Back
            </Link>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <div className="mb-4">
                {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label> */}
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="mb-4">
                {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label> */}
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="schoolEmail">
                  School Email
                </label>
                <input
                  type="email"
                  id="schoolEmail"
                  value={schoolEmail}
                  onChange={(e) => setSchoolEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="name@ucalgary.ca"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentID">
                  Student ID
                </label>
                <input
                  type="text"
                  id="studentID"
                  value={studentID}
                  onChange={(e) => setStudentID(e.target.value)}
                  className="w-full px-3 py-2 border rounded-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="******"
                  required
                />
              </div>
              <div className="mb-4">
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
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="repeatPassword">
                  Repeat Password
                </label>
                <input
                  type="password"
                  id="repeatPassword"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="********"
                  required
                />
              </div>
              {errorMessage && (
                <p className="text-red-500 text-xs italic mb-4">{errorMessage}</p>
              )}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white font-bold py-2 px-4 rounded-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                >
                 <Link href="../logIn"> Sign Up </Link>
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

export default SignUp;

