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
    <div>
        <div>
            <h2>Few Word About Us</h2>
            <p>A charming neighbourhood restaurant and bar, located in the heart of the city; a true gateway to gourmet farm-to-table dining, inspired by seasonal produce.</p>
        </div>
        <div></div>
    </div>
    </Fragment>
  );
  }
  
