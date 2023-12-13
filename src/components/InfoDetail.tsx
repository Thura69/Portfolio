import React from 'react'
import Image from 'next/image'
import logo from '../../public/assets/64e2212a242e4af9b6eb6a2a_Icon.svg';
import com from '../../public/assets/det_logo-2.png';
import { RevealWrapper } from  'next-reveal'
import Frames from './Themes/Frames';
import About from '../../public/assets/647a301328e41c27c8484b60_About me page type script.svg';
import Dance from '../../public/assets/meme.jpg';
import Twikle from '../../public/assets/64e87d3109760d7f63115377_Animated star.svg';
import { GrWaypoint } from "react-icons/gr";
import { MdOutlineSimCardDownload } from "react-icons/md";
import AnimatedTextWord from './animation/AnimatedTextWord';
import School from '../../public/assets/ucsylogo.png';
import CareerPath from './CareerPath';

const styles = {
};

 
 const InfoDetail = () => {
  return (
    <div data-scroll-section className='flex items-center justify-center  w-full h-[950px] xs:h-[960px] sm:h-[900px] mid:h-[1000px] lg:h-[500px] md:h-[950px]'>
      <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.15%]'/>
      <div className='w-[94%] xs:w-[90%] mid:w-[86%] md:w-[90%] lg:w-[100%] bg-bg p-4 border-r-[0.5px] border-b-[0.5px] border-border h-full mid:p-7 md:p-0  lg:flex  '>

  
    {/* <div data-scroll-sticky className='md:p-5 lg:p-8 2xl:p-10 bg-bg lg:w-[50.1%] order-1 md:w-[50%] xl:w-[33.1%]   border-text  md:flex items-center justify-center md:justify-start bg-text'>
      <p className='text-bg text-[2.2rem]  font-bold'>Infinite rotation</p>
       <div className='border-2 flex  border-border w-[80%] rounded-full gap-5 p-3 '>
         <p className='text-bg'>Git</p>
         <p className='text-bg'>source code</p>
       </div>
       <Image className='mx-auto' src={Profile} alt="hello"/>
      </div> */}
        <div className='mt-[20.3px]'></div>
        <div className=' md:flex md:p-5 md:w-[100%] relative lg:p-10  lg:w-[60%] xl:w-[100.6%]  flex-col  items-start  lg:text-[19.4px] bg-bg'>
        <h3 className='text-text mb-10 font-bold text-[2rem] px-5'>CAREER PATH</h3>
       <div className='flex w-[50%] justify-between items-start gap-10'>
         <div className=' border-2 px-5'>
            <h3 className=' text-textgray  text-[1rem]'>PAST EXPERIENCES</h3>
        <CareerPath link='https://www.digitalengineeringtech.com/' open={true} position='Digital Engineerning Tech' companyName='Full-stack Developer' year='Dec 2022 - Dec 2023'/>
        <CareerPath link='https://www.linkedin.com/in/thura-nyi-453858241/' open={true} position='Self-employed' companyName='Free Lance Developer' year='Sep 2021 - Present'/>
         </div>
         <div className='border-l-[0.5px] h-full px-7 border-border'>
            <h3 className=' text-textgray    text-[1rem]'>PRESENT</h3>
        <CareerPath open={false} companyName='Open To Work #'/>
         </div>
       </div>
              </div>
              
        <div className='  hidden bg-bg p-10  border-border xl:hidden   w-[40.7%] order-3'>
 <div className='flex h-[100px] w-full md:w-[100%] xl:min-w-full bg-bg border-[1px] border-border drop-shadow-md  p-3 rounded-sm  items-center justify-start gap-7 mid:p-5'>
            <Image width={60} src={School} alt='logo' />
            <div className='text-[#ffff]'>
                {/* <h3 className='text-[0.9rem] font-sans font-bold'>Frontend Developer at Digital Engineering Tech</h3> */}
          <AnimatedTextWord transition={{staggerChildren:0.1,delayChildren:0.030 * 1}} text='University of Computer Studies, Pakokku ' classname='text-[0.85rem] text-text font-sans font-bold '/>
          <AnimatedTextWord transition={{staggerChildren:0.2,delayChildren:0.030 * 1}} text='Dec 2019' classname='font-sans text-textgray leading-[29px] text-[16.1px]'/>
                
              {/* <h3 className=' font-sans text-textgray leading-[29px] text-[16.1px] '>Jan 2022 - Present</h3> */}
            </div>
          </div>   
        </div>
        </div>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.16%]'/>
    </div>
  )
}

export default InfoDetail;