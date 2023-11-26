import Image from 'next/image'
import React from 'react'
import Cart from '../../../../public/assets/Vector.png';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { workCardProps } from '@/types/workCard.types';

// 13161b
 const WorkCard:React.FC<workCardProps> = ({title,description,img,tools}) => {
  return (
    <div className='w-full border-b-[1px]  leading-[29.1px] lg:text-[16.1px] sm:hover:translate-y-[-10px] duration-500 md:w-[48%] group lg:w-[30%] cursor-pointer p-[13px]  lg:border-solid relative  rounded-lg h-[290px] bg-[#13161b]  border-bg  md:border-none '>
      <p className=' font-mono text-border font-extrabold text-[25px]'>02</p>    
      <p className='text-text  font-bold z-10 text-[15px] uppercase '>{title}</p>
      <p className='text-text  z-10 text-[15px] uppercase  mb-[16px] font-light'>{2023}</p>
          <p className=' text-textgray z-[99]'>{description}</p>
          <p className=' text-textgray relative z-[99]'>{tools}</p>
           <Image src={img} className='absolute z-0 bottom-1 w-[90px] right-1' alt='cart' />
        <button className='text-text mt-[20px] border-border border-[0.5px] px-2 py-1 rounded-md text-[1rem] flex items-center absolute bottom-4 left-4 justify-center  gap-2'>View more. <BsArrowUpRightCircle size={18} className='group-hover:text-active duration-500'/></button>
        </div>
  )
}

export default WorkCard;