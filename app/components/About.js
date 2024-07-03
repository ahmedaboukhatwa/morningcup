"use client";  // Add this line at the top

import { Fragment } from "react"
import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
export default function About() {
  const dispatch = useDispatch();
  console.log("dispatch",dispatch);
  const productsList = useSelector(state=>state.products.productsList);

  // const contentList = useSelector(state => state.content.contentList);fsda
  return (
    <Fragment>
    <div className="px-36">
        <div className="text-center">
            <h2>Few Word About Us</h2>
            <p>A charming neighbourhood restaurant and bar, located in the heart of the city; a true gateway to gourmet farm-to-table dining, inspired by seasonal produce.</p>
        </div>
        <div className="flex justify-between">
          <div style={{height:"200px",width:"400px",position:"relative"}}>
        <Image
            src="/images/coffee.jpg" // Replace with the actual path to your image
            alt="My Image"
            fill
              />  
        </div>
        <div style={{height:"200px",width:"400px",position:"relative"}}>
        <Image
            src="/images/coffee.jpg" // Replace with the actual path to your image
            alt="My Image"
            fill
              />  
        </div>
        <div style={{height:"200px",width:"400px",position:"relative"}}>
        <Image
            src="/images/coffee.jpg" // Replace with the actual path to your image
            alt="My Image"
            fill
              />  
        </div>
        </div>
        
    </div>
    </Fragment>
  );
  }
  
