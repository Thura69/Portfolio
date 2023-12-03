import React from 'react'
import Frames from './Frames'
import AnimatedTextWord from '../animation/AnimatedTextWord'

 const ProjectNameFrame:React.FC<projectNameFrameProps> = ({title}) => {
  return (
     <div className='text-textgray flex border-border border-b-[0.5px] h-[240px] relative '>
    <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.05%]'/>
    <Frames className='w-[74%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.05%]'/>
    <div className='w-[20%] xs:w-[90%] mid:w-[86%] md:w-[90%] lg:w-[100%] bg-bg p-4 border-r-[0.5px] border-b-[0.5px] border-border h-full mid:p-7 md:p-0  md:flex  '>
    <AnimatedTextWord text={title} classname='text-[31px]  md:text-[90px]  uppercase text-text mt-[40px] mb-[30px] name lg:text-[150px] top-[33px] font-bold left-[7%] lg:top-[-25px] absolute name' transition={{staggerChildren:0.1,delayChildren:0.050 * 10}}/>
    </div>
     <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.05%]'/>
    </div>
  )
}

export default ProjectNameFrame