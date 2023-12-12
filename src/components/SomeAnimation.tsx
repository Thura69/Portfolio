import React from 'react'
import Image from 'next/image'
import Profile from '../../public/assets/646933774666ac41a59ff891_Rotate.svg';
import SVG from '../../public/assets/nft-_1_.svg';
import {AiFillLinkedin,AiFillGithub,AiFillFacebook} from 'react-icons/ai'
import Sign from '../../public/assets/2-removebg-preview.png';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import logo from '../../public/assets/det_logo-2.png';
import self from '../../public/assets/tools-and-utensils-programmer-svgrepo-com.png';
import Experience from '../../public/assets/experience-information-knowledge-svgrepo-com (1).png';
import { RevealWrapper } from  'next-reveal'
import AnimatedTextWord from './animation/AnimatedTextWord';
import Text from './Themes/Text';
import Frames from './Themes/Frames';
import FramerMagnetic from './FramerMagnetic';
import { MdEmail } from "react-icons/md";


const styles = {
};

 
 const SomeAnimation = () => {
  return (
    <div data-scroll-section className='flex items-center justify-center  w-full h-[950px] xs:h-[960px] sm:h-[900px] mid:h-[1000px] lg:h-[417px] md:h-[950px]'>
      <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.15%]'/>
      <div className='w-[94%] xs:w-[90%] mid:w-[86%] md:w-[90%] lg:w-[100%] bg-bg p-4 border-r-[0.5px] border-b-[0.5px] border-border h-full mid:p-7 md:p-0  lg:flex  '>

  
    <div data-scroll-sticky className='md:p-5 lg:p-8 2xl:p-10 bg-bg lg:w-[50.1%] order-1 md:w-[50%] xl:w-[33.1%]   border-text  md:flex items-center justify-center md:justify-start bg-text'>
      <p className='text-bg text-[2.2rem]  font-bold'>Infinite rotation</p>
       <div className='border-2 flex  border-border w-[80%] rounded-full gap-5 p-3 '>
         <p className='text-bg'>Git</p>
         <p className='text-bg'>source code</p>
       </div>
       <Image className='mx-auto' src={Profile} alt="hello"/>
      </div>
        <div className='mt-[20.3px]'></div>
        <div className=' md:flex md:p-5 md:w-[100%] lg:p-8  lg:w-[55.3%] xl:w-[37%]  flex-col md:border-r-[0.5px] border-border items-start  lg:text-[19.4px] bg-text'>
       <p className='text-bg text-[2.2rem]  font-bold'>Infinite rotation</p>
       <div className='border-2 flex  border-border w-[80%] rounded-full gap-5 p-3 '>
         <p className='text-bg'>Git</p>
         <p className='text-bg'>source code</p>
       </div>
       <Image className='mx-auto' src={Profile} alt="hello"/>
        </div>
        <div className='  hidden bg-text p-8 border-border xl:block   border-l-[0.5px] w-[32.7%] order-3'>
     <p className='text-bg text-[2.2rem]  font-bold'>Infinite rotation</p>

      
        </div>
        </div>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.16%]'/>
    </div>
  )
}

export default SomeAnimation;