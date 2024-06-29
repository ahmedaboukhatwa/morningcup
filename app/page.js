import Image from "next/image";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Home() {
  return (
    <Fragment>
      <Navbar/>
      <About/>
    </Fragment>
  );
}
