import React, { useRef } from 'react'
import Text from './Themes/Text'
import Frames from './Themes/Frames'
import { motion } from 'framer-motion';
import { opacity } from '../../public/header';

 const FifthFrame = () => {
  return (
     <div data-scroll-section className='flex lg:hidden items-center justify-center w-full h-[200px] md:h-[200px]'>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%]'/>
        <div className='w-[94%] xs:w-[90%]  mid:w-[86%] md:w-[90%] contact h-full border-b-[0.5px] border-border border-r-[0.5px] p-3 mid:px-7'>
       <Text bold='font-bold' context='Contact Me.' fontSize='text-[22px]' color='text-text'/>
       <div className='bg-bg mt-[20px]  flex items-center justify-between border-border border-[0.5px] h-[60px] p-2  md:h-[70px] rounded-lg'>
        <input className='bg-bg px-2 w-[80%]  border-border outline-none' placeholder='ready for a crazy adventure'/>
        <button className='border-border w-[20%] h-full text-xs rounded-md border-[0.5px] text-text font-bold hover:bg-active hover:text-bg duration-500'>Send</button>
       </div>
        </div>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%]'/>
    </div>
  )
}
export default FifthFrame;