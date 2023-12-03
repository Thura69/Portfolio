import React, { useEffect, useRef } from 'react'
import Frames from './Themes/Frames'
import AnimatedTextWord from './animation/AnimatedTextWord'
import Image from 'next/image'
import Star from '../../../public/assets/6469a18e29af2de5755caf00_Animated_rainbow_card.svg'

import server from '../../../public/assets/fuel.png';
import server2 from '../../../public/assets/fuel2.png';
import server3 from '../../../public/assets/fuel3.png';
import server4 from '../../../public/assets/fuel4.png';
import { RevealWrapper } from 'next-reveal'
import Lenis from '@studio-freight/lenis'
import { useScroll, useTransform } from 'framer-motion';
import ProjectNameFrame from './Themes/ProjectNameFrame'

function ProjectShowCase() {


  useEffect(() => {
    const lenis = new Lenis()



function raf(time:any) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  }, []);
  return (
  <div>
          <ProjectNameFrame title='Real Time Fuel Management System.' />
          <div className='text-textgray overflow-hidden flex border-border border-b-[0.5px] h-[230px] relative '>
    <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.05%]'/>
    <div className='w-[54%] overflow-hidden relative xs:w-[90%]  mid:w-[86%] md:w-[90%] lg:w-[100%] bg-bg p-4  border-b-[0.5px] border-r-[0.5px] border-border h-full mid:p-7 md:p-0  md:flex  '>
    <ul className='text-text leading-8 mt-[10px]'>
            <li className='font-bold text-text text-[2rem]'>Role:</li>            
        <li className='font-bold text-textgray text-[1rem]  mt-[20px]'>2023</li>
        <li className='text-[#0000FF] '>https://detfsmm.com</li>
        <li className='font-extralight '>Fullstack</li>
        <p className='text-active z-10 font-bold text-sm'>Running in RealWorld</p>
   </ul>
    </div>
   
    <div className='w-[40%] overflow-hidden relative xs:w-[90%]  mid:w-[86%] md:w-[90%] lg:w-[100%] bg-bg p-4 border-r-[0.5px] border-b-[0.5px] border-border h-full mid:p-7 md:p-0  md:flex '>
   
   <Image src={Star} width={400} className='absolute min-w-[400px] top-[-150px] right-[-200px]'  alt='start'/>  
     </div>
     <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.05%]'/>
    </div>
          <div className='text-textgray overflow-hidden flex border-border border-b-[0.5px] h-[1900px] relative '>
    <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.05%]'/>
    <div className='w-[94%] flex flex-col gap-3 overflow-hidden relative xs:w-[90%]  mid:w-[86%] md:w-[90%] lg:w-[100%] bg-bg py-5 px-5 border-b-[0.5px] border-r-[0.5px] border-border h-full mid:p-7 md:p-0  md:flex  '>
    <RevealWrapper   origin='bottom'> <h3 className='font-bold text-text text-[2rem] uppercase'>About</h3></RevealWrapper>
    <RevealWrapper   origin='bottom'>
    <p className='text-[14px]'>The real-time fuel management website is currently operational, with hundreds of users, including the Ministry of Electricity and Energy (MOEE) and fuel station companies, actively monitoring it. On the default website, 10 stations are running, providing detailed sales information.
                                </p>
   </RevealWrapper>
   <RevealWrapper   origin='bottom'> <Image src={server} alt='s' /></RevealWrapper>
         
  <RevealWrapper   origin='bottom'>
      <h3 className='font-bold text-text text-[2rem] mt-[20px] uppercase'>Purpose and Useage</h3>
  </RevealWrapper>
    <RevealWrapper   origin='bottom'>
    <p className='text-[14px]'>
     Many managers use this website for their stations to generate daily reports, manage accounts, and check profits and other staff details from their individual dashboards. The website maintains daily data directly sourced from the table application used by sellers and dispensers. Future plans include displaying information for 100 stations, allowing control of multiple accounts.</p>
     </RevealWrapper>
      <RevealWrapper   origin='bottom'>  <Image src={server4} alt='s' /></RevealWrapper>
       <RevealWrapper   origin='bottom'>
      <h3 className='font-bold text-text text-[2rem] mt-[20px] uppercase'>Duties</h3>
  </RevealWrapper>
   <RevealWrapper   origin='bottom'>
    <p className='text-[14px]'>
         I am actively contributing to the development and design of the cloud server API. However, my primary focus is on developing the frontend user interface, emphasizing user experience and UI design. I worked closely with the project manager and another backend developer to devise solutions and brainstorm ideas for improvements. 
    </p>
   </RevealWrapper>
    <RevealWrapper   origin='bottom'>  <Image src={server3} alt='s'/></RevealWrapper>
  
  <RevealWrapper   origin='bottom'>
      <h3 className='font-bold text-text text-[2rem] mt-[20px] uppercase'>Technologies</h3>
  </RevealWrapper>
   
  
  <RevealWrapper   origin='bottom'>
  <p className='text-[14px]'>I created the design using Figma and implemented it with React.js, Tailwind, ReactRouterDom, Framermotion, and Prime React.For server Express.js,Node.js, TypeScript and Mongodb.Of course, version control is being managed using Git and GitHub.Bought Domain from z.com.For hosting, I utilize AWS EC2.</p>
  </RevealWrapper>
   <RevealWrapper   origin='bottom'>  <Image src={server2} alt='s' /></RevealWrapper>
  
    </div>


     <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.05%]'/>
    </div>
  </div>
   
  )
}

export default ProjectShowCase