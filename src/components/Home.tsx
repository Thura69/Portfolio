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
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const router = useRouter();
  const { ady } = router.query;
  const seventhFrameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis()



function raf(time:any) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  }, []);

  useEffect(() => {
    const scrollToSeventhFrame = () => {
      if (seventhFrameRef.current) {
        if (ady === "ok") {
        seventhFrameRef.current.scrollIntoView({behavior:'auto'});
        }
      }
    };

    // Scroll to SeventhFrame when the component mounts or when navigating to this page
    scrollToSeventhFrame();

    const handleRouteChange = () => {
      // Scroll to SeventhFrame when navigating within the same page
      scrollToSeventhFrame();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [ady, router.events, seventhFrameRef]);

  return (
   <div  className='bg-bg relative h-[100svh] w-full'>
<>
      <StickyCursor/>
      {/* <FirstFrame  />   */}
      <SecondFrame/>  
      <ThirdFrame />
      <FourthFrame />
      <FifthFrame />
      {/* <SixthFrame/> */}
      <SeventhFrame gg={seventhFrameRef} />
      <EightFrame />
      <div className='fixed h-[40px] bg-border text-text bottom-0 text-sm flex items-center justify-center gap-3  p-5'><TbInfoTriangle className='text-[#E9D502]'  size={25}/> This Portfolio is under developing</div>
        </>
    </div>
  )
 }

export default Home;
