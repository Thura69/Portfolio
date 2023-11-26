import React from 'react'
import Experience from '../../../public/assets/experience-information-knowledge-svgrepo-com (1).png';
import Image from 'next/image';
import logo from '../../../public/assets/det_logo-2.png';
import self from '../../../public/assets/tools-and-utensils-programmer-svgrepo-com.png';
import Frames from './Themes/Frames';

 const FourthFrame = () => {
  return (
    <div data-scroll-section className='flex items-center lg:hidden  justify-center w-full h-[350px] lg:h-[320px] md:h-[300px]'>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%]   h-full'/>
        <div className='w-[94%] xs:w-[90%] mid:w-[86%] md:w-[90%] h-full border-r-[0.5px] p-5 border-border border-b-[0.5px] experience mid:px-7'>
        <div className='flex items-center gap-3 justify-start'>
          <Image src={Experience} width={25} alt='experience' />
          <h3 className='text-active uppercase text-[18px] font-bold'>Experience</h3>
        </div>
        <div className='flex  lg:mt-[0px] flex-col h-[90%] gap-3 items-start justify-center '>
          <div className='flex bg-bg w-full md:w-[500px] border-[0.5px] border-border px-4   h-[85px] items-center justify-start gap-5 mid:p-5'>
            <Image width={50} src={logo} alt='logo' />
            <div className='text-[#ffff]'>
              <h3 className='text-[0.9rem] font-bold'>Frontend Developer at Digital Engineering Tech</h3>
              <h3 className=' text-textgray text-[0.9rem]  mt-1'>Jan 2022 - Present</h3>
            </div>
          </div>
          <div className='flex h-[85px] w-full md:w-[500px] bg-bg border-[0.5px] border-border px-4  items-center justify-start gap-5 mid:p-5'>
            <Image width={50} src={self} alt='logo' />
            <div className='text-[#ffff] text-start '>
              <h3 className='text-[0.9rem]  font-bold'>Self  Developer</h3>
              <h3 className=' text-textgray  text-[0.9rem]  mt-1'>Sep 2021 - Jan 2022</h3>
            </div>
          </div>
        </div>
        </div>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] h-full'/>
    </div>
  )
}

export default FourthFrame;