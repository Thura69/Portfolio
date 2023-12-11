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
      <Link href={toPage}  className='p-5 '>
      <p className='  text-text uppercase font-bold text-[25px] font-sans'>{title}</p> 
      <a href={url} className='text-[#0000FF]  font-light z-10 text-[18px]  '>{link}</a>
            <p className='text-text  font-light z-10 text-[15px] uppercase '>{year}</p>
            <p className='text-[#77818f] font-sans mt-6 text-[16px] font-light'>{description}</p>
      <p className='text-text  font-bold  z-10 text-[15px] uppercase mt-3 '>{skills}</p>
             {
              account &&   <p className='text-[#0000FF] font-sans mt-3 text-[16px] font-light'>{accountDetail}</p>
             }
      {/* <AnimatedTextWord classname='text-[#77818f] font-sans mt-6 text-[16px] font-light' text={description} /> */}
              <Marquee className='h-[500px] m-0  '>
              <div className='h-[400px] mx-1 p-5  bg-[#13161b]'>
                <Image src={image[0]} height={360} alt='win' />
              </div>
              <div className='h-[400px] mx-1 p-5  bg-[#13161b] '>
                <Image src={image[1]} height={360} alt='win' />
              </div>
              <div className='h-[400px] mx-1 p-5  bg-[#13161b] '>
                <Image src={image[2]} height={360} alt='win' />
              </div>
              <div className='h-[400px] mx-1 p-5  bg-[#13161b] '>
                <Image src={image[3]} height={360} alt='win' />
              </div>
             </Marquee>
            </Link>
  )
}

export default ProjectCard