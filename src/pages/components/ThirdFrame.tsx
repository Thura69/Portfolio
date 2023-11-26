import React from 'react'
import Image from 'next/image'
import Profile from '../../../public/assets/64cd4b8241e30d1ff98179ad_gamestation.png';
import SVG from '../../../public/assets/nft-_1_.svg';
import {AiFillLinkedin,AiFillGithub,AiFillFacebook} from 'react-icons/ai'
import Sign from '../../../public/assets/2-removebg-preview.png';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import logo from '../../../public/assets/det_logo-2.png';
import self from '../../../public/assets/tools-and-utensils-programmer-svgrepo-com.png';
import Experience from '../../../public/assets/experience-information-knowledge-svgrepo-com (1).png';
import { RevealWrapper } from  'next-reveal'
import AnimatedTextWord from './animation/AnimatedTextWord';
import Text from './Themes/Text';
import Frames from './Themes/Frames';
import FramerMagnetic from './FramerMagnetic';

const styles = {
};

 
 const ThirdFrame = () => {
  return (
    <div data-scroll-section className='flex items-center justify-center  w-full h-[800px] xs:h-[860px] sm:h-[900px] lg:h-[550px] md:h-[540px]'>
      <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.15%]'/>
      <div className='w-[94%] xs:w-[90%] mid:w-[86%] md:w-[90%] lg:w-[100%] bg-bg p-4 border-r-[0.5px] border-b-[0.5px] border-border h-full mid:p-7 md:p-0  md:flex  '>
      {/* <div className='w-[300px]  cursor-crosshair  relative h-[300px] rounded-md'>
      <div className=' bg-bg absolute bottom-1 left-1 text-[#ffff] px-1 rounded-sm'><h3 className=' text-[0.75rem]'>IMG_286.png</h3></div>
      <ReactSketchCanvas
      style={styles}
      strokeWidth={4}
      strokeColor="#17E134"
      backgroundImage="https://res.cloudinary.com/dbqyaigcg/image/upload/v1697608738/tmd3v7bzd9gj9awynvjr.avif"
    />
        </div> */}
   
  
    <div data-scroll-sticky className='md:p-7 bg-bg lg:w-[33.1%] order-1 md:w-[50%]   md:flex items-center justify-center'>
          <RevealWrapper duration={3500}>
              <Image src={Profile}  className='md:h-auto lg:h-auto   order-1 bg-active rounded-md' width={500} height={590} alt='profile'/>
  </RevealWrapper>
      </div>
        <div className='mt-[20.3px]'></div>
        <div className=' md:flex md:p-10 md:w-[50%] lg:p-6  lg:w-[37%]  flex-col md:border-r-[0.5px] border-border items-start  lg:text-[19.4px]'>
          {/* <Text bold='font-bold lg:mb-[30px] mb-[30.3px]' context='About me' color='text-text' fontSize='text-[2.25rem] md:text-[3.2rem]' /> */}
          <AnimatedTextWord text={'About Me'} classname='font-bold lg:mb-[30px] mb-[30.3px] text-[2.25rem] md:text-[3.2rem] text-text'/>
          <AnimatedTextWord text={'I am a seasoned Frontend Developer specializing in React.js, Next.js, Tailwind CSS, and React Native. Proficient in crafting innovative web applications. Committed to staying current with industry trends, I bring a unique blend of technical expertise and a passion for exploring creative ideas.Specializes in IoT integration and server technologies using Express and MongoDB for seamless web applications.'} />
          {/* <p className='text-[16.1px] font-sans text-[#77818f]'>I am a seasoned <span className=' text-[#ffff] font-bold   '>Full Stack Developer</span> specializing in React.js, Next.js, Tailwind CSS, and React Native. Proficient in crafting innovative web applications. Committed to staying current with industry trends, I bring a unique blend of technical expertise and a passion for exploring creative ideas.</p> */}
        {/* <AnimatedTextWord text='Specializes in IoT integration and server technologies using Express and MongoDB for seamless web applications.'/> */}
        {/* <Text context='Specializes in IoT integration and server technologies using Express and MongoDB for seamless web applications.' color='text-[#77818f]' fontSize='text-[16.1px]'/> */}
       <div className='  text-right   mt-[20px]  w-full '>
            {/* <Text context='FIND ME AT' color='text-[#ffff]   md:font-bold' fontSize='text-[0.85rem] md:text-[0.9rem]' /> */}
            <AnimatedTextWord text='FIND ME AT' transition={{staggerChildren:0.4,delayChildren:0.050 * 10}} classname='text-[1rem] font-bold text-text mb-5 md:text-[0.9rem]' />
         <div className='flex  items-center gap-3 justify-end'>
          <RevealWrapper duration={4500} origin='bottom'>
                <div className='text-[#77818f] border-border  md:w-[50px] md:h-[50px] w-[40px] h-[40px]  flex items-center justify-center duration-500 cursor-pointer rounded-full group'>
                <FramerMagnetic>
                <AiFillLinkedin className=' group-hover:text-active duration-500' size={35}/>
                </FramerMagnetic>  
            </div>
          </RevealWrapper>
          <RevealWrapper duration={4500} origin='bottom'>
             <div className='text-[#77818f] border-border  md:w-[50px] md:h-[50px] w-[40px] h-[40px]  flex items-center justify-center group rounded-full cursor-pointer'>
                <FramerMagnetic>
               <AiFillGithub className=' group-hover:text-active duration-500' size={35} />
                </FramerMagnetic>   
               </div>
          </RevealWrapper>
        <RevealWrapper duration={4500} origin='bottom'>
           <div className='text-[#77818f] group border-border  md:w-[50px] md:h-[50px] w-[40px] h-[40px]  flex items-center droup justify-center rounded-full cursor-pointer'>
                <FramerMagnetic>
                 <AiFillFacebook className='group-hover:text-active duration-500' size={35} />
                </FramerMagnetic>   
              </div>
        </RevealWrapper>
         </div>
       </div>
        </div>
        <div className=' bg-bg hidden lg:block border-border  experience border-l-[0.5px] w-[32.7%] order-3'>
           <div className='flex p-5 items-center  gap-3 justify-start'>
          <Image src={Experience} width={25} alt='experience' />
          <h3 className='text-active uppercase text-[0.85rem] font-bold'>Experience</h3>
        </div>
          <div className='flex w-full  lg:mt-[0px] p-5 flex-col h-[50%] gap-3 items-start justify-center '>
<RevealWrapper origin='bottom' duration={3500}>
               <div className='flex bg-bg w-full md:w-[100%] border-[1px]  p-3 rounded-sm  h-[85px] items-center justify-start gap-7  mid:p-5 drop-shadow-md border-border'>
              <Image width={60} src={logo} alt='logo' />
              
            <div className='text-[#ffff]'>
                {/* <h3 className='text-[0.9rem] font-sans font-bold'>Frontend Developer at Digital Engineering Tech</h3> */}
          <AnimatedTextWord transition={{staggerChildren:0.1,delayChildren:0.030 * 1}} text='Frontend Developer at Digital Engineering Tech' classname='text-[0.9rem] text-text font-sans font-bold'/>
          <AnimatedTextWord transition={{staggerChildren:0.2,delayChildren:0.030 * 1}} text='Jan 2022 - Present' classname='font-sans text-textgray leading-[29px] text-[16.1px]'/>
                
              {/* <h3 className=' font-sans text-textgray leading-[29px] text-[16.1px] '>Jan 2022 - Present</h3> */}
            </div>
          </div>
  </RevealWrapper>
  <RevealWrapper origin='bottom' className='w-full' duration={3500}>
            <div className='flex h-[85px] w-full md:w-[100%] bg-bg border-[1px] border-border drop-shadow-md  p-3 rounded-sm   items-center justify-start gap-7 mid:p-5'>
            <Image width={60} src={self} alt='logo' />
            <div className='text-[#ffff] text-start '>
                <AnimatedTextWord transition={{staggerChildren:0.2,delayChildren:0.030 * 1}} text='Self Freelance Developer' classname='text-[0.9rem] text-text font-sans font-bold'/>
                {/* <h3 className='text-[0.9rem]  font-sans font-bold'>Self  Developer</h3> */}
                  <AnimatedTextWord transition={{staggerChildren:0.2,delayChildren:0.030 * 1}} text='Jan 2021 - Jan 2022' classname='font-sans text-textgray leading-[29px] text-[16.1px]'/>
              {/* <h3 className=' text-textgray font-sans leading-[29px] text-[16.1px]'>Sep 2021 - Jan 2022</h3> */}
            </div>
          </div>
  </RevealWrapper>
         
        </div>
        </div>
        </div>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.16%]'/>
    </div>
  )
}

export default ThirdFrame;