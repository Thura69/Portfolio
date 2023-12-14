import React from 'react'
import Image from 'next/image'
import Profile from '../../public/assets/646933774666ac41a59ff891_Rotate.svg';
import SVG from '../../public/assets/nft-_1_.svg';
import {AiFillLinkedin,AiFillGithub,AiFillFacebook} from 'react-icons/ai'
import Sign from '../../public/assets/2-removebg-preview.png';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import logo from '../../public/assets/64e2212a242e4af9b6eb6a2a_Icon.svg';
import self from '../../public/assets/tools-and-utensils-programmer-svgrepo-com.png';
import Experience from '../../public/assets/experience-information-knowledge-svgrepo-com (1).png';
import { RevealWrapper } from  'next-reveal'
import AnimatedTextWord from './animation/AnimatedTextWord';
import Text from './Themes/Text';
import Frames from './Themes/Frames';
import FramerMagnetic from './FramerMagnetic';
import { MdEmail } from "react-icons/md";
import About from '../../public/assets/647a301328e41c27c8484b60_About me page type script.svg';
import Dance from '../../public/assets/meme.jpg';
import Twikle from '../../public/assets/64e87d3109760d7f63115377_Animated star.svg';
import { GrWaypoint } from "react-icons/gr";
import { MdOutlineSimCardDownload } from "react-icons/md";
import PDF from '../../public/assets/ThuraNyi.pdf';

const styles = {
};

 
 const SomeAnimation = () => {
  return (
    <div data-scroll-section className='flex items-center justify-center  w-full h-[1400px] xs:h-[960px] sm:h-[900px] mid:h-[1000px] lg:h-[560px] md:h-[950px]'>
      <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.15%]'/>
      <div className='w-[94%] xs:w-[90%] mid:w-[86%] md:w-[90%] lg:w-[100%] bg-bg  border-r-[0.5px] border-b-[0.5px] border-border h-full mid:p-7 md:p-0  lg:flex  '>
    {/* <div data-scroll-sticky className='md:p-5 lg:p-8 2xl:p-10 bg-bg lg:w-[50.1%] order-1 md:w-[50%] xl:w-[33.1%]   border-text  md:flex items-center justify-center md:justify-start bg-text'>
      <p className='text-bg text-[2.2rem]  font-bold'>Infinite rotation</p>
       <div className='border-2 flex  border-border w-[80%] rounded-full gap-5 p-3 '>
         <p className='text-bg'>Git</p>
         <p className='text-bg'>source code</p>
       </div>
       <Image className='mx-auto' src={Profile} alt="hello"/>
      </div> */}
        <div className=' md:flex p-4 md:p-5 md:w-[100%] relative lg:p-10  lg:w-[60%] xl:w-[40.6%] border-b-[0.5px]  flex-col md:border-r-[0.5px] border-border items-start  lg:text-[19.4px] bg-bg h-[400px] lg:h-auto'>
      <div className='border-border mx-auto relative  border-[0.5px]   rounded-xl'>
         <Image className=' mx-auto w-auto p-3  rounded-xl   ' src={Dance} alt="hello" />
         <p className='text-bg absolute font-sans text-sm   bottom-[20px] uppercase font-bold left-[20px]'>IMG_054.JPG</p>
      </div>
        <Image className=' bottom-[5%] absolute max-w-[400px] w-auto left-0 px-3 ' src={About} alt="hello" />
        </div>
        <div className='  bg-bg border-border xl:block p-5   w-[100%] order-3'>
     <RevealWrapper origin='bottom' duration={900} className='w-full ' >  <div className="flex    mb-[30px] items-center justify-centr   gap-3"> <div className=' bg-text text-bg inline-block  rounded-full p-1  hover:scale-105 cursor-pointer text-xs duration-300 '><a className=' gap-1 flex items-center'><Image src={logo} alt='logo'/>I love development, very much</a> </div>
        <Image className='' src={Twikle} alt='start'/></div></RevealWrapper>
       <RevealWrapper origin='bottom' duration={1000}>
         <p className=' text-textgray my-3'>I am a creative, self-driven developer that enjoys making challenging situations fun. Working on user interface is my favourite.</p>
       </RevealWrapper>
       <RevealWrapper origin='bottom' duration={1100}>
         <p className=' text-textgray my-3'>In my two years of experience, I have enjoyed creating websites, applications, IoT, local servers,    suffering and pain.</p>
       </RevealWrapper>
<RevealWrapper origin='bottom' duration={1200}>
         <p className=' text-textgray my-3'>
I like debating and exchanging concepts and ideas that educate people.I thrive under pressure, using it as a catalyst for personal and professional growth. My eagerness to acquire new skills is matched only by my dedication to contributing to the company&apos;s success.
</p>
       </RevealWrapper>
<RevealWrapper origin='bottom' duration={1300}>
         <p className=' text-textgray my-3'>If you want to talk about a project you&apos;re working on or if you need help with development, send me an email at thuranyi64@gmail.com. If you have any new (and exciting) ideas, please let me know as I am currently AVAILABLE to work on them.

</p>
       </RevealWrapper>

    <div className='flex-col'> <RevealWrapper origin='bottom' duration={1400}> <div className='text-text w-full duration-500 hover:bg-text hover:text-bg border-[1px]   text-sm inline-block mt-[30px] p-3 rounded-full'>
          <a href="mailto:thuranyi64@gmail.com" className='flex items-center cursor-pointer justify-center gap-2'>  <p className=' text-md'>SEND ME AN EMAIL</p>
            <GrWaypoint className=' scale-125' /></a>
        </div></RevealWrapper>
       <RevealWrapper origin='bottom' duration={1400}> <div className='text-text cursor-pointer w-full duration-500 hover:bg-text hover:text-bg border-[1px]  text-sm inline-block mt-[30px] p-3 rounded-full'>
          <a download  href={PDF} className='flex  items-center cursor-pointer justify-center gap-2'>  <p className='  text-md'>GET RESUME</p>
         <MdOutlineSimCardDownload className=' scale-125'  /></a>
        </div></RevealWrapper></div>
        </div>
        </div>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.16%]'/>
    </div>
  )
}

export default SomeAnimation;