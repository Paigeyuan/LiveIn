"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { ArrowRightIcon, StarIcon  } from '@heroicons/react/outline'; // Importing for Heroicons v
import './ScrollAnimation.css';
import './globals.css';



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle
  return (
    <>
      <nav className="font-sans flex justify-between items-center p-4 bg-custom-purple shadow-md sticky top-0 z-50">
      {/* Logo and brand name */}
      <div className="flex items-center">
        <Link href="/" legacyBehavior>
          <a>
            <img src="/logo.svg" className="h-10 w-auto mr-4" />
          </a>
        </Link>
      </div>
         {/* Hamburger Menu for Mobile View */}
         <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
        <Link href="/" legacyBehavior>
          <a className="hover:text-purple-300 block px-7 py-2 rounded-md text-base font-medium text-white">Home</a>
        </Link>
        <Link href="/Document" legacyBehavior>
          <a className="hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium text-white">Document</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium text-white">Contact</a>
        </Link>
        <Link href="/Buy-token" legacyBehavior>
          <a className="hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium text-white">Buy Token</a>
        </Link>
        <Link href="/" legacyBehavior>
          <button className="flex items-center text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md border border-transparent hover:border-white transition-all">
            Try Live In
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </button>
        </Link>
        </div>
      </nav>
    </>
  );
    

}
