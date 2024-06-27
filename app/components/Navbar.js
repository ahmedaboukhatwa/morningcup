"use client";  // Add this line at the top

import { Fragment } from "react"

import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
export default function Navbar() {
  const dispatch = useDispatch();
  console.log("dispatch",dispatch);
  const productsList = useSelector(state=>state.products.productsList);
  // const contentList = useSelector(state => state.content.contentList);

  console.log(productsList);
  let frontMap = productsList.map((project,i)=>{
    return(
      <li key={i} className='w-full flex justify-between items-center  border-2 mb-4 relative rounded-xl oveflow-hidden h-72 '>
          <div className='relative h-full w-1/2 overflow-hidden bg-red-200'>
              <Image
            src={project.Src} // Replace with the actual path to your image
            alt="My Image"
            fill
          />
          </div>
            <div className='w-1/2 '>
               <h3 className='text-3xl text-end pr-2 lg:pr-10'>{project.Name}</h3>
            </div>
        </li>
      )
 })
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
            src="/images/logo.png" // Replace with the actual path to your image
            alt="My Image"
           fill
              />       
         </div>
    </nav>
    <ul className='flex flex-wrap flex-col text-start '>
            {frontMap}
        </ul>
    </Fragment>
  );
  }
  