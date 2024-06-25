"use client";  // Add this line at the top

import { Fragment } from "react"

import Image from 'next/image';
export default function Navbar() {
  
  return (
    <Fragment>
    <nav className='flex justify-between border-b-2 rounded-b-md items-center w-full 
    px-2 sm:px-10 md:px-24 lg:px-42 xl:px-48'>   
        <button className='bg-blue-600 text-white rounded-lg px-24 py-2' 
         onClick={()=>{scrollTo({top: 1500,behavior: "smooth"})}}
        >اطلبها الآن
        </button>
    
        <div className='logo w-10 h-14 relative overflow-hidden'>
        <Image
            src="/images/logo.jpg" // Replace with the actual path to your image
            alt="My Image"
           fill
              />       
         </div>
    </nav>
    </Fragment>
  );
  }