import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import AnimatedTextWord from './animation/AnimatedTextWord';
import Frames from './Themes/Frames';
import { background } from '../../public/header';
import { motion,AnimatePresence } from 'framer-motion';
import { MdOutlineClose } from "react-icons/md";
import Nav from './Nav';
import Link from 'next/link';

const FirstFrame = () => {

  const [isActive, setIsActive] = useState(false);

  return (
      <header data-scroll-section className=' relative'>
      <div className='w-full flex fixed items-center  bg-bg z-[100]   top-0 left-0 right-0  justify-center h-[50px] xs:h-[50px] lg:h-[65px] mid:h-[55px]'> <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.05%]'/>
        <Link href={'/'} className='w-[47%]   flex items-center justify-start px-3  font-bold h-full  border-r-[0.5px]  border-b-[0.5px] border-border xs:w-[45%] mid:w-[43%] md:w-[45%] lg:w-[34.15%]' >
        {/* <p className=' text-text text-[18px]   absolute '>Full Stack Developer</p> */}
         <AnimatedTextWord transition={{staggerChildren:0.3,delayChildren:0.050 * 10}} text='Developer' classname='text-text uppercase text-[18px]    absolute '/>
        </Link>
        <Frames className='w-[72%] hidden lg:block lg:w-[15.53%]' />
        <Frames className='hidden lg:block lg:w-[15%]'/>
        <div className='w-[47%] xs:w-[45%] mid:w-[43%] md:w-[45%] flex items-center justify-end px-3 lg:w-[30.1%] h-full  border-r-[0.5px]  border-b-[0.5px] border-border'>
        {
          isActive?  <MdOutlineClose onMouseDown={()=>{setIsActive(!isActive)}} className=' text-text cursor-pointer' size={'35'} />:  <GiHamburgerMenu onMouseDown={()=>{setIsActive(!isActive)}} className=' cursor-pointer text-text' size={'30'} />
        }
        </div>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]' /></div>
      <AnimatePresence mode='popLayout'>
      <motion.div variants={background} animate={isActive?"enter":"exit"}  className="w-[100%] fixed z-[90] bg-bg opacity-[0.9] top-0 left-0 right-0 bottom-0"></motion.div>
       {
          isActive && <Nav setIsActive={setIsActive} />
      }
      </AnimatePresence>
      </header>
    
  )
}

export default FirstFrame;