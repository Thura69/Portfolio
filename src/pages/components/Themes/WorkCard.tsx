import Image from 'next/image'
import React from 'react'
import Cart from '../../../../public/assets/Vector.png';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { workCardProps } from '@/types/workCard.types';
import Link from 'next/link';
import Logo from '../../../../public/assets/64e2212a242e4af9b6eb6a2a_Icon.svg';

// 13161b
const WorkCard: React.FC<workCardProps> = ({ title, description, img, tools, no, link,real=false }) => {
   
  return (
    <Link href={'/project'} className='w-full border-b-[1px]  leading-[29.1px] lg:text-[16.1px] sm:hover:translate-y-[-10px] duration-500 md:w-[48%] group lg:w-[30%] cursor-pointer p-[13px]  lg:border-solid relative  rounded-lg h-[550px] bg-[#13161b]  border-bg  md:border-none \'>
         <p className=' font-mono text-border font-extrabold text-[25px]'>{no}</p>    
      <p className='text-text  font-bold z-10 text-[15px] uppercase '>{title}</p>
      {
        real? <p className='text-active z-10 font-bold text-sm'>Running in RealWorld</p>:
      <p className='text-bg-blue z-10 font-bold text-md'>Own Project</p>
     }
      <p className='text-text  z-10 text-[15px] uppercase  mb-[16px] font-light'>{2023}</p>
          <p className=' text-textgray text-sm z-[99]'>{description}</p>
          <p className=' text-text text-sm   relative mt-[5px] z-[99]'>{tools}</p>
           <Image src={img} className='absolute z-0 bottom-2 w-[100px] right-2' alt='cart' />
        <button className='text-text mt-[20px] border-border border-[0.5px] px-2 py-1 rounded-md text-[1rem] flex items-center absolute bottom-4 left-4 justify-center  gap-2'>View more. <BsArrowUpRightCircle size={18} className='group-hover:text-active duration-500'/></button>
        </Link>
  )
}

export default WorkCard;