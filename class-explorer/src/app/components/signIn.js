'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [schoolEmail, setSchoolEmail] = useState('');
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [major, setMajor] = useState(''); // State for storing selected major
  const [errorMessage, setErrorMessage] = useState('');
  const [isScrolled, setIsScrolled] = useState(false); // State for handling scroll behavior

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
      console.log('Major:', major);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scrollY value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const majors = [
    "Actuarial Science", "Ancient and Medieval History", "Anthropology", "Applied Chemistry", "Applied Mathematics", 
    "Archaeology", "Art History", "Astrophysics", "Bachelor of Design in City Innovation", "Bioinformatics", 
    "Biochemistry", "Biological Sciences", "Biomedical Engineering", "Biomedical Sciences", "Biomechanics", 
    "Canadian Studies", "Cellular, Molecular and Microbial Biology", "Chemical Engineering", "Chemistry", 
    "Civil Engineering", "Commerce", "Communication and Media Studies", "Community Rehabilitation", 
    "Computer Science", "Dance", "Doctor of Medicine", "Doctor of Veterinary Medicine", "Drama", "Earth Science", 
    "East Asian Language Studies", "East Asian Studies", "Ecology", "Economics", "Electrical Engineering", 
    "Elementary", "Energy Engineering", "English", "Environmental Science", "Exercise and Health Physiology", 
    "Film Studies", "French", "Gender and Sexuality Studies", "General Mathematics", "Geography", "Geology", 
    "Geomatics Engineering", "Geophysics", "German", "Global Development Studies", "Greek and Roman Studies", 
    "Health and Society", "History", "International Indigenous Studies", "International Relations", 
    "Italian Studies", "Kinesiology", "Language and Culture", "Latin American Studies", "Law", "Law and Society", 
    "Leadership and Coaching", "Linguistics", "Linguistics and Language", "Mathematics", "Mechanical Engineering", 
    "Motor and Psychosocial Aspects of Movement", "Multidisciplinary", "Music", "Natural Sciences", "Neuroscience", 
    "Nursing", "Philosophy", "Physics", "Plant Biology", "Political Science", "Psychology", "Pure Mathematics", 
    "Religious Studies", "Russian", "Secondary", "Social Work", "Sociology", "Software Engineering", "Spanish", 
    "Statistics", "Sustainable Systems Engineering", "Urban Studies", "Visual Studies", "Zoology"
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className={`z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex ${isScrolled ? 'fixed top-0 left-0 w-full' : ''}`}>
        <p className="fixed justify-end pr-10 right-0 top-0 flex w-full pb-5 pt-5 bg-white border-b border-black" style={{ borderBottomWidth: '1px' }}>
          <img src="/uofcLogo.png" className="w-12" />
        </p>
      </div>

      <div className={`flex  mt-40 flex-col items-center ${isScrolled ? 'mt-20' : ''}`}>
        <p className="text-4xl font-bold sm:text-6xl lg:text-8xl">
          CLASS EXPLORER
        </p>

        <p className="text-sm lg:text-2xl">
          Empowering students, one class at a time.
        </p>

        <div className="flex flex-col items-center justify-center w-full mt-10">
          <div className="relative bg-white rounded-sm md:shadow-md sm:w-full sm:max-w-md p-8">
            <Link href="/" className="absolute top-2 left-2 text-blue-500 hover:text-blue-700 flex items-center">
              <IoArrowBack className="mr-2" size={24} />
              Back
            </Link>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                Full Name
              </label>
              <div className="mb-4">
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="major">
                  Major
                </label>
                <select
                  id="major"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                  className="w-full px-3 py-2 border rounded-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-1/2 lg:w-2/3"
                  required
                >
                  <option value="" disabled>Select your major</option>
                  {majors.map((major) => (
                    <option key={major} value={major}>{major}</option>
                  ))}
                </select>
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

          <p className="flex flex-col mb-5 lg:mt-5 text-lg sm:text-xl items-center">
            University of Calgary
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
