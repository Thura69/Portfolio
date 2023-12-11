import React, { useEffect, useRef } from 'react'
import Frames from './Themes/Frames'
import AnimatedTextWord from './animation/AnimatedTextWord'
import Image from 'next/image'
import Star from '../../public/assets/6469a18e29af2de5755caf00_Animated_rainbow_card.svg'
import Twikle from '../../public/assets/64e87d3109760d7f63115377_Animated star.svg'
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
import Nextproject from './Nextproject'
import StickyCursor from './animation/StickyCursor'

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
  <StickyCursor/>
   <ProjectNameFrame title={projectDetail.project_name} />
        <div className='text-textgray  flex border-border border-b-[0.5px] h-[350px] relative '>
    <Frames className='w-[3%] xs:w-[4.8%] mid:w-[7%] md:w-[7%] lg:w-[3%]'/>
    <div className='w-[94%] border-r-[0.1px] flex border-border'>
        <div className=' p-7 w-[25%] h-full border-border border-r-[0.1px]'>
        <p className=' uppercase font-bold text-active text-[2.5rem] mt-[20px]'>On-running</p>    
        <ul className=' text-text text-[1rem] mt-[30px] '>
          <li className=' uppercase font-bold text-[1.5rem] mb-[20px]'>Information</li>
          <li className=''>Year : 2022</li>
          <li>Scope : Web Development</li>
          <li className=' underline '>Live at : www.kpimedia.com</li>
        </ul>
          </div>
            <div className=' overflow-clip w-[75%] p-7 flex flex-col items-start   border-border bg-bg h-full  relative'>
          <div className="flex  items-center justify-centr  mt-[30px] gap-3"> <div className=' bg-text text-bg inline-block  rounded-full p-1  hover:scale-105 cursor-pointer duration-300 '><a className=' gap-1 flex items-center'><Image src={logo} alt='logo'/>  https://detfsmm.com</a> </div>
            <Image src={Twikle} alt='start'/></div>
            <p className='text w-[80%] text-xl   mt-[50px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, debitis provident. Fugit earum ut dignissimos accusantium consequatur labore vel nobis, fuga tempora repellendus! Alias magni laborum fugiat, perspiciatis odio labore?</p>
            <Image src={Star}  alt='star' className='absolute w-[470px] right-[-280px] top-[-70px]' />
            </div>
    </div>
  

    
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]' />
        
      </div>
        <div className='text-textgray  flex border-border border-b-[0.5px] h-[2800px] relative  '>
    <Frames className='w-[3%] xs:w-[4.8%] mid:w-[7%] md:w-[7%] lg:w-[3%]'/>
    <div className='w-[94%] border-r-[0.1px] flex border-border bg-bg   relative'>
         <div className=' p-7 pt-[70px] text-[#212326] sticky top-[50px] h-[500px] right-0 flex bg-bg   flex-col justify-start items-start gap-[20px] w-[25%] '>
           <a   className='text-[2.2rem] duration-500   font-bold font-sans uppercase '>Overview </a>
           <a   className='text-[2.2rem] duration-500   font-bold font-sans uppercase '>Photos </a>
           {/* <p className='text-[1.9rem]   font-bold font-sans'>Full-stack</p> */}
          </div>
            <div className=' w-[70%] p-7    border-border bg-bg h-full '>
            <p className='text-[2.5rem] font-bold text-text mt-[30px] font-sans uppercase'>About FMS</p>
            <p className='text-md mt-[50px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sapiente, odio earum blanditiis, commodi vel eos voluptates fugiat consequuntur possimus dolores minus expedita consectetur, tenetur ipsum vero. Ratione, vel modi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ea mollitia ullam harum reprehenderit incidunt nostrum ex, laudantium molestias, consectetur aspernatur quod quos, distinctio commodi provident culpa error illo voluptas! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, maiores explicabo vitae obcaecati accusamus quaerat adipisci architecto nemo ipsa facere, delectus ad nobis facilis tenetur eum magni in quis fuga.</p>
             <div>
              <p className='text-[2.5rem] font-bold text-text  font-sans uppercase my-[60px]'>Gallery</p>
              <div className='flex flex-col gap-5'>
              <Image className=' rounded-xl ' src={projectDetail.pictures[0]} alt='h'/>
              <Image className=' rounded-xl ' src={projectDetail.pictures[1]} alt='h'/>
              <Image className=' rounded-xl ' src={projectDetail.pictures[2]} alt='h'/>
              <Image className=' rounded-xl ' src={projectDetail.pictures[3]} alt='h'/>
              </div>
          </div>
          </div>
          
    </div>
      <Frames className='w-[3%] xs:w-[4.8%] mid:w-[7%] md:w-[7%] lg:w-[3%]'/>

    
    
        
      </div>
      <div className='flex h-[750px] border-b-[0.5px] border-border'>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]' />
        <div className='w-[94%] border-r-[0.5px] border-border p-7'>
          <Nextproject projectDetail={projectDetail}/>
        </div>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]' />
     </div>
  </div>
   
  )
}

export default ProjectShowCase