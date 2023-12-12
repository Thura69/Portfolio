import React, { useEffect, useRef, useState } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import {motion,AnimatePresence,useScroll, useTransform} from 'framer-motion';
import Lenis from '@studio-freight/lenis'
import { TbInfoTriangle } from "react-icons/tb";
import Preload from './Preload'
import SeventhFrame from './SeventhFrame'
import SecondFrame from './SecondFrame'
import SixthFrame from './SixthFrame'
import ThirdFrame from './ThirdFrame'
import FifthFrame from './FifthFrame'
import FourthFrame from './FourthFrame'
import FirstFrame from './FirstFrame';
import EightFrame from './EightFrame';
import StickyCursor from './animation/StickyCursor';
import SomeTitle from './SomeTitle';
import SomeAnimation from './SomeAnimation';


 const Home = () => {

  useEffect(() => {
    const lenis = new Lenis()



function raf(time:any) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  }, []);

  return (
   <div className='bg-bg relative h-[100svh] w-full'>
<>
      <StickyCursor/>
      {/* <FirstFrame  />   */}
      <SecondFrame/>  
      <ThirdFrame />
      <FourthFrame />
      <FifthFrame />
      {/* <SixthFrame/> */}
      <SeventhFrame />
      {/* <SomeTitle/>
      <SomeAnimation/> */}
      <EightFrame />
      <div className='fixed h-[40px] bg-border text-text bottom-0 text-sm flex items-center justify-center gap-3  p-5'><TbInfoTriangle className='text-[#E9D502]'  size={25}/> This Portfolio is under developing</div>
        </>
    </div>
  )
 }

export default Home;
