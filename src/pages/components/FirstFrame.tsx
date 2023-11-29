import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import AnimatedTextWord from './animation/AnimatedTextWord';
import Frames from './Themes/Frames';


 const FirstFrame = () => {
  return (
    <header data-scroll-section className='flex items-center  bg-bg z-[80]  fixed top-0 left-0 right-0  justify-center w-full h-[50px] xs:h-[50px] lg:h-[60px] mid:h-[35px]'>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.05%]'/>
        <div className='w-[47%]   flex items-center justify-start px-3  font-bold h-full  border-r-[0.5px]  border-b-[0.5px] border-border xs:w-[45%] mid:w-[68%] md:w-[45%] lg:w-[34.15%]' >
        {/* <p className=' text-text text-[18px]   absolute '>Full Stack Developer</p> */}
         <AnimatedTextWord transition={{staggerChildren:0.3,delayChildren:0.050 * 10}} text='Software Developer' classname='text-text text-[18px]   absolute '/>
        </div>
        <Frames className='w-[72%] hidden lg:block lg:w-[15.53%]' />
        <Frames className='hidden lg:block lg:w-[15%]'/>
        <div className='w-[47%] xs:w-[45%] mid:w-[68%] md:w-[29%] flex items-center justify-end px-3 lg:w-[30.1%] h-full  border-r-[0.5px]  border-b-[0.5px] border-border'>
          <GiHamburgerMenu className=' text-text' size={'30'} />
        </div>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]'/>
    </header>
  )
}

export default FirstFrame;