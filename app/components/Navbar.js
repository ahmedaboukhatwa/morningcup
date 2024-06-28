"use client";  // Add this line at the top

import { Fragment } from "react"

import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
export default function Navbar() {
  const dispatch = useDispatch();
  console.log("dispatch",dispatch);
  const productsList = useSelector(state=>state.products.productsList);

  // const contentList = useSelector(state => state.content.contentList);fsda
  return (
    <Fragment>
    <nav className='flex justify-between border-b-2 rounded-b-md items-center w-full 
    px-2 sm:px-10 md:px-24 lg:px-42 xl:px-48'>   
       <div className='logo w-14 h-14 relative overflow-hidden'>
        <Image
            src="/images/logo.png" // Replace with the actual path to your image
            alt="My Image"
           fill
              />       
         </div>
         <ul className="flex">
                    <Link href='/favorited'>
                        <div className='mr-2'>
                            <FontAwesomeIcon className='h-6 w-4' icon={faHeart} />
                            <span>
                            0
                            </span>
                        </div>
                    </Link>
                    <Link href='/cart'>
                        <div className='mr-2'>
                            <FontAwesomeIcon className='h-6 w-4' icon={faCartShopping} />
                            <span>0</span>
                        </div>
                    </Link>
                </ul>
    </nav>
    </Fragment>
  );
  }
  
