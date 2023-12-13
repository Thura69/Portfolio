import React, { useEffect } from 'react'
import {greet} from 'hourly-hello'
import Image from 'next/image'
import metro from './../../public/assets/400x400bb.jpg';
import { RevealWrapper } from  'next-reveal'
import AnimatedTextWord from './animation/AnimatedTextWord'
import Frames from './Themes/Frames';

 const SomeTitle = () => {
  const currentDate = new Date();
  const greeting = greet(currentDate);
  

  return (
    <div data-scroll-section className='flex items-center justify-center mt-[50px] relative w-full h-[120px] lg:h-[200px] '>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[70%]  md:w-[5%] lg:w-[3.05%]'/>
        <Frames className='w-[3%] hidden lg:block lg:w-[34.15%]'/>
        <Frames className='w-[72%] xs:w-[70%] mid:w-[68%] md:w-[45%] lg:w-[15.55%]'/>
        <Frames className='hidden lg:block lg:w-[15%]'/>
      <div className='w-[22%] xs:w-[20%] mid:w-[18%] md:w-[45%] lg:w-[30.08%]  border-border border-b-[0.5px] h-full border-r-[0.5px] md:p-[30px] flex flex-col items-start justify-center  contact'>
      <RevealWrapper origin='top' duration={1000}>  <p className='text-text text-[1.2rem] my-5  font-bold '>When did a dragon ever die from the poison of a snake.</p></RevealWrapper>
      <RevealWrapper origin='bottom' duration={1000}> <p className=' text-text'>Nietzsche</p></RevealWrapper>

        </div>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]'/>
      {/* <p className='text-bg hidden sm:block font-bold top-[-10%] lg:left-[30%] md:left-[45%] mid:left-[55%] left-[60%] p-2 z-10 rounded-2xl absolute bg-active '>{greeting}!</p> */}
        <h3 className='text-text px-2    uppercase text-[1.5rem] absolute left-[5%]  lg:text-[3.2rem] font-bold'>
        <RevealWrapper origin='top' duration={1000}>
          MEET THE MAKER <br/> BEHIND THE MAGIC.
        </RevealWrapper>
        </h3>
      {/* <p className='text-[60px] md:text-[90px] text-text lg:text-[150px] top-[33px] font-bold absolute left-[7%] lg:top-[-25px]'>
<RevealWrapper duration={1000} origin='bottom'>	Thura Nyi.</RevealWrapper>
</p> */}
    </div>
  )
}

export default SomeTitle