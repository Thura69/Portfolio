import React, { FC } from 'react'
import Experience from '../../public/assets/experience-information-knowledge-svgrepo-com (1).png';
import Image, { StaticImageData } from 'next/image';
import logo from '../../public/assets/det_logo-2.png';
import logo2 from '../../public/assets/download.jpeg';
import self from '../../public/assets/tools-and-utensils-programmer-svgrepo-com.png';
import Frames from './Themes/Frames';

 const FourthFrame = () => {
  return (
    <div  className='flex items-center xl:hidden bg-bg  justify-center w-full h-[300px] lg:h-[400px] md:h-[390px]'>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] lg:w-[3%] md:w-[5%]   h-full'/>
        <div className='w-[94%] xs:w-[90%] mid:w-[86%] lg:w-[94%] md:w-[90%] h-full border-r-[0.5px]  p-5 border-border border-b-[0.5px] experience mid:px-7'>
        <div className='flex items-center gap-3 justify-start'>
          <Image src={Experience} width={25} alt='experience' />
          <h3 className='text-active uppercase text-[18px] font-bold'>Experience</h3>
        </div>
        <div className='flex   lg:mt-[0px] flex-col h-[90%] gap-2 items-start justify-center '>
         <WorkCard img={logo} title='Fullstack Developer at Digital Engineering Tech' time='Dec 2022 - Jan 2024'/>
         <WorkCard img={self} title='Self  Developer' time='Sep 2021 - Jan 2022'/>
        </div>
        </div>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] lg:w-[3%] md:w-[5%] h-full'/>
    </div>
  )
 }

interface workCardProps {
  img: StaticImageData,
  title: string,
  time:string
}

const WorkCard:FC<workCardProps> = ({img,title,time}) => {
  return (
     <div className='flex bg-bg w-full md:w-[500px] border-[0.5px] border-border px-4   h-[85px] items-center justify-start gap-5 mid:p-5'>
            <Image width={50} src={img} alt='logo' />
            <div className='text-[#ffff]'>
        <h3 className='text-[0.9rem] font-bold'>{title}</h3>
        <h3 className=' text-textgray text-[0.9rem]  mt-1'>{time}</h3>
            </div>
          </div>
  )
}

export default FourthFrame;