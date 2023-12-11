import React from 'react'
import Frames from './Frames'
import AnimatedTextWord from '../animation/AnimatedTextWord'

 const ProjectNameFrame:React.FC<projectNameFrameProps> = ({title}) => {
  return (
     <div className='text-textgray flex border-border border-b-[0.5px] h-[240px] md:h-[300px] lg:h-[220px] relative '>
    <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]'/>
    <div className='w-[20%] xs:w-[50%] mid:w-[43%] md:w-[90%] lg:w-[94%] bg-bg p-4 border-r-[0.5px] border-b-[0.5px] border-border h-full mid:p-7 md:p-0  md:flex  lg:flex items-center justify-start relative '>
    <AnimatedTextWord text={title} classname='text-[35px] mid:text-[50px]  md:text-[65px]  uppercase text-text mt-[40px] mb-[30px] name lg:text-[80px] top-[33px] font-bold left-[7%] mid:left-[10%] lg:left-0 p-7 lg:top-[20px] absolute lg:relative name' transition={{staggerChildren:0.1,delayChildren:0.050 * 10}}/>
    </div>
     <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]'/>
    </div>
  )
}

export default ProjectNameFrame