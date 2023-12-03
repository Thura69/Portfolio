import React, { useEffect } from 'react'
import {greet} from 'hourly-hello'
import Image from 'next/image'
import metro from './../../../public/assets/400x400bb.jpg';
import { RevealWrapper } from  'next-reveal'
import AnimatedTextWord from './animation/AnimatedTextWord'
import Frames from './Themes/Frames';

 const SecondFrame = () => {
  const currentDate = new Date();
  const greeting = greet(currentDate);
  

  return (
    <div data-scroll-section className='flex items-center justify-center relative w-full h-[120px] lg:h-[190px] md:h-[160px] mt-[10px] xs:mt-[20px] lg:mt-[60px] mid:mt-[35px]'>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.05%]'/>
        <Frames className='w-[3%] hidden lg:block lg:w-[34.15%]'/>
        <Frames className='w-[72%] xs:w-[70%] mid:w-[68%] md:w-[45%] lg:w-[15.55%]'/>
        <Frames className='hidden lg:block lg:w-[15%]'/>
        <div className='w-[22%] xs:w-[20%] mid:w-[18%] md:w-[45%] lg:w-[30.08%]  border-border border-b-[0.5px] h-full border-r-[0.5px] md:p-[30px] contact'>
        <div className='hidden md:block lg:pt-[35px]'>
           <AnimatedTextWord transition={{staggerChildren:0.2,delayChildren:0.050 * 10}} text='Recent Favourite.' classname='text-textgray mb-3 text-right uppercase text-[0.9rem] font-bold'/>
          {/* <h3 className='text-textgray mb-3 text-right uppercase text-[0.9rem] font-bold'>Recent Favourite.</h3> */}
          <div className='border-b-[0.5px] border-border'></div>
          <a href='https://youtu.be/NyTkaQHdySM?si=zlg-POd8iLtkvEyW' className='flex cursor-pointer items-center justify-end mt-3 gap-3'>
            <div className='text-textgray  leading-[29px] text-right'>
              {/* <p className='text-text text-[0.9rem] font-bold'>Metro Boomin</p> */}
               <AnimatedTextWord transition={{staggerChildren:0.3,delayChildren:0.050 * 10}} text='Metro Boomin' classname='text-text text-[0.9rem] font-bold'/>
               <AnimatedTextWord transition={{staggerChildren:0.2,delayChildren:0.050 * 10}} text='Too Many Nights' classname='text-[16.1px] text-textgray'/>
              {/* <p className='text-[16.1px]'>Too Many Nights</p> */}
            </div>
            <div>
              <RevealWrapper duration={3500} origin='right'>
   <Image src={metro} width={70} alt='ablum' className=' rounded-full w-[55px] h-[55px]' height={70}/>
              </RevealWrapper>
            </div>
          </a>
          </div>
        </div>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]'/>
      {/* <p className='text-bg hidden sm:block font-bold top-[-10%] lg:left-[30%] md:left-[45%] mid:left-[55%] left-[60%] p-2 z-10 rounded-2xl absolute bg-active '>{greeting}!</p> */}
        <AnimatedTextWord transition={{staggerChildren:0.3,delayChildren:0.030 * 10}} text='Thura Nyi' classname='text-[60px] md:text-[90px] flex text-text name lg:text-[150px] top-[33px] font-bold absolute left-[7%] lg:top-[-25px] name'/>
      {/* <p className='text-[60px] md:text-[90px] text-text lg:text-[150px] top-[33px] font-bold absolute left-[7%] lg:top-[-25px]'>
<RevealWrapper duration={1000} origin='bottom'>	Thura Nyi.</RevealWrapper>
</p> */}
    </div>
  )
}

export default SecondFrame