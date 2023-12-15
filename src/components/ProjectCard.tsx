import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";
import Rocket from '../../../public/assets/screen.png'
import Rocket2 from '../../../public/assets/screen2.png'
import Rocket3 from '../../../public/assets/screen3.png'
import Rocket4 from '../../../public/assets/screen4.png'
import { workCardProps } from '@/types/workCard.types';
import { projectCardProps } from '@/types/project.types';
import AnimatedTextWord from './animation/AnimatedTextWord';
import {RevealWrapper} from 'next-reveal';
import Link from 'next/link';

 const ProjectCard:React.FC<projectCardProps> = ({title,year,description,image,link,account,accountDetail,url,skills,toPage=""}) => {
  return (
      <div   className='p-5 mb-[30px] '>
      <p className='  text-text uppercase font-bold  text-[25px] font-sans'>{title}</p> 
      <a href={url} target='_blank' className='text-[#0000FF]  font-light z-10 text-[18px]  '>{link}</a>
            <p className='text-text  font-light z-10 text-[18px] font-sans mt-[10px] uppercase '>{year}</p>
            <p className='text-[#77818f] font-sans mt-[20px]  w-[90%] text-[17px] font-light'>{description}</p>
      {/* <p className='text-text  font-bold  z-10 text-[15px] uppercase mt-3 '>{skills}</p> */}
             {
              account &&   <p className='text-[#0000FF] font-sans mt-3 text-[16px] font-light'>{accountDetail}</p>
             }
      {/* <AnimatedTextWord classname='text-[#77818f] font-sans mt-6 text-[16px] font-light' text={description} /> */} 
              <Marquee className='h-[400px] my-3 mt-[35px] overflow-clip  '>
              <div className=' overflow-hidden mx-4    rounded-lg bg-[#13161b]'>
                <Image src={image[0]} className=' overflow-hidden ' width={610} height={400} alt='win' />
              </div>
              <div className='overflow-hidden mx-4  rounded-lg bg-[#13161b] '>
                <Image src={image[1]} className=' overflow-hidden ' width={610} height={400} alt='win' />
              </div>
              <div className='overflow-hidden mx-4  rounded-lg bg-[#13161b] '>
                <Image src={image[2]} className=' overflow-hidden ' width={610} height={400} alt='win' />
              </div>
              <div className=' overflow-hidden mx-4  rounded-lg bg-[#13161b] '>
                <Image src={image[3]} className=' overflow-hidden  '  width={610} height={400} alt='win' />
              </div>
             </Marquee>
            </div>
  )
}

export default ProjectCard