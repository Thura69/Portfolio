import React, { useEffect, useRef } from 'react'
import Frames from './Themes/Frames'
import AnimatedTextWord from './animation/AnimatedTextWord'
import Image from 'next/image'
import Star from '../../public/assets/6469a18e29af2de5755caf00_Animated_rainbow_card.svg'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import server from '../../public/assets/fuel2.png';
import server2 from '../../public/assets/fuel4.png';
import server3 from '../../public/assets/fuel3.png';
import server4 from '../../public/assets/fuel.png';
import { RevealList, RevealWrapper } from 'next-reveal'
import Lenis from '@studio-freight/lenis'
import { useScroll, useTransform } from 'framer-motion';
import ProjectNameFrame from './Themes/ProjectNameFrame'
import logo from '../../public/assets/64e2212a242e4af9b6eb6a2a_Icon.svg';
import Marquee from 'react-fast-marquee'
import Rocket from '../../public/assets/photo-1700508317396-e343a69ac72f.avif'
import { projectDetail } from '@/types/projectDetail.types'
import Link from 'next/link'

const ProjectShowCase:React.FC<any>=({projectDetail})=> {


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
          <ProjectNameFrame title={projectDetail.project_name} />
          <div className='text-textgray overflow-hidden flex border-border border-b-[0.5px] h-[290px] relative '>
    <Frames className='w-[3%] xs:w-[4.8%] mid:w-[7%] md:w-[7%] lg:w-[3.05%]'/>
    <div className='w-[60%] overflow-hidden relative xs:w-[52%]  mid:w-[53%] md:w-[90%] lg:w-[100%] bg-bg p-4  border-b-[0.5px] border-r-[0.5px] border-border h-full mid:p-7  md:p-7  md:flex  '>
    <ul className='text-text leading-3 mt-[10px]'>
        <RevealWrapper origin='bottom'>   <li className='font-bold text-text text-[2rem]'>Info:</li> </RevealWrapper>           
        <RevealWrapper origin='bottom'>   <li className='font-bold text-textgray text-[1rem]  mt-[50px]'>{projectDetail.year}</li></RevealWrapper>   
        <RevealWrapper origin='bottom'>   <li className='font-bold text-textgray text-[1rem]  mt-[20px]'>  <p className='text-text'> <span className=' text-bg-blue font-bold underline'> {projectDetail.live_at}</span></p></li></RevealWrapper>   
       {
              projectDetail.credential_status ? <>
                <RevealWrapper origin='bottom'>   <li className='font-bold text-textgray text-[1rem]  mt-[20px]'>  <p className='text-text'> <span className=' text-text  '> Name : <span className='text-bg-blue text-[20px]'>user</span></span></p></li></RevealWrapper>
                 <RevealWrapper origin='bottom'>   <li className='font-bold text-textgray text-[1rem]  mt-[20px]'>  <p className='text-text'> <span className=' text-text  '> Password : <span className='text-bg-blue text-[20px]'>12345678</span></span></p></li></RevealWrapper>
              </> : ''
       }  
        <RevealWrapper origin='bottom'>   <li className='font-bold text-textgray text-[1rem]  mt-[20px]'> <p className='text-text'>Role: <span className='text-text font-bold'> {projectDetail.role}</span></p></li></RevealWrapper>   
        {/* <RevealWrapper origin='bottom'>    <li className='text-[#0000FF] '>https://detfsmm.com</li> </RevealWrapper>           
        <RevealWrapper origin='bottom'>    <li className='font-extralight '>Fullstack</li> </RevealWrapper>           
        <RevealWrapper origin='bottom'>     <p className='text-active z-10 font-bold text-sm'>Running in RealWorld</p> </RevealWrapper>            */}
   </ul>
    </div>
   
    <div className='w-[40%] overflow-hidden relative xs:w-[38%]  mid:w-[33%] md:w-[38%] lg:w-[100%] bg-bg p-4 border-r-[0.5px] border-b-[0.5px] border-border h-full mid:p-7 md:p-0  md:flex '>
   
   <Image src={Star} width={400} className='absolute min-w-[400px] top-[-150px] right-[-200px]'  alt='start'/>  
     </div>
     <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[7%] lg:w-[3.05%]'/>
    </div>
    <div className={`text-textgray overflow-hidden flex border-border border-b-[0.5px]  mid:h-[1900px] md:h-[2200px] relative ${projectDetail.id === 5 || projectDetail.id === 8 ?'h-[1900px]':'h-[1700px]'}`}>
    <Frames className=' w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.05%]'/>
    <div className='w-[94%] p-3  flex flex-col gap-3 overflow-hidden relative xs:w-[90%]  mid:w-[86%] md:w-[90%] lg:w-[100%] bg-bg py-5  border-b-[0.5px] border-r-[0.5px] border-border h-full mid:p-7 md:p-0  md:flex  '>
  <div className=''>
     <RevealWrapper   origin='bottom'> <h3 className='font-bold text-text text-[2rem] uppercase'>About</h3></RevealWrapper>
    <RevealWrapper  className={' h-[190px] overflow-hidden'}  origin='bottom'>
    <p className='text-[14px] '>{projectDetail.about}
    </p>
   </RevealWrapper>
   <div className='font-bold  relative min-h-[50px]   text-text uppercase shadow-bg shadow-2xl rotate-180'><span className=" top-[20px] absolute right-0  rotate-180">Show More</span></div>
  </div>
 
   
  <RevealWrapper   origin='bottom'> <Image src={projectDetail.pictures[0]} alt='s' /></RevealWrapper>

  <RevealWrapper   origin='bottom'>  <Image src={projectDetail.pictures[1]} alt='s' /></RevealWrapper>
  <RevealWrapper   origin='bottom'>  <Image src={projectDetail.pictures[2]} alt='s'/></RevealWrapper>
  <RevealWrapper   origin='bottom'>  <Image src={projectDetail.pictures[3]} alt='s' /></RevealWrapper>
  {/* <div className='p-3 mt-[10px] leading-6'>
  <p className='text-text'>Live at: <span className=' text-text font-bold underline'> https://detfsmm.com</span></p>
  <p className='text-text'>Role: <span className='text-text font-bold'> FullStack Development</span></p>
  <p className='text-text'>Year: <span className='text-text font-bold'> 2023</span></p>
  </div> */}
  {/* <div className='flex items-center justify-between p-3'>
    <div className='flex justify-center text-text gap-2 font-bold items-center'> <FaArrowLeftLong /> Raspberry Pi</div>
    <div className='flex justify-center gap-2 text-text font-bold items-center'>FMS APP<FaArrowRight /></div>
  </div> */}
  <Link href={`/projects/${projectDetail.next_project_id}`} className=' my-4 mt-[80px]'>
    <h3 className='text-text font-bold text-[2rem] mb-3 font-sans'>Next Project?</h3>
    <p>{projectDetail.next_project_title}</p>
    <p className='text-text'>{projectDetail.next_project_year}</p>
    <p className='text-textgray mt-4 font-sans '>{projectDetail.next_project_description}</p>
    <Marquee className='gap-2 my-5'>
    <Image src={projectDetail.next_project_pictures[0]} className='w-[350px]  mx-2' alt='rocket'/>
    <Image src={projectDetail.next_project_pictures[1]} className='w-[350px]  mx-2' alt='rocket'/>
    <Image src={projectDetail.next_project_pictures[2]} className='w-[350px]  mx-2' alt='rocket'/>
    <Image src={projectDetail.next_project_pictures[3]} className='w-[350px]  mx-2' alt='rocket'/>
      
    </Marquee>
  </Link>
    </div>


     <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.05%]'/>
    </div>
  </div>
   
  )
}

export default ProjectShowCase