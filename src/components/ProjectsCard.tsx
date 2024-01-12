import React from 'react'
import Sample from '../../public/assets/smple.webp'
import Sever from '../../public/assets/screen2.png'
import Image from 'next/image';
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { RevealWrapper } from 'next-reveal';
import { projectCardProps } from '@/types/projectCard.types';
import Link from 'next/link';


const ProjectsCard:React.FC<projectCardProps> = ({id,project_name,description,date,image,video,github_link,demo_link,category}) => {
  return (
      <RevealWrapper origin='bottom' duration={1000} className='lg:h-[400px] mid:my-[20px]'>
          <div className='group w-full hover:translate-y-[-10px] duration-300 relative'>
              <Image className={`${video ? 'group-hover:hidden':''} rounded-md `} src={image} alt='smaple' />
        {
          video  && <video loop autoPlay  muted className='hidden  rounded-md group-hover:block' width="100%" height="auto" >
  <source src={video as string} type="video/mp4"/>
  </video>
  }
  <div className=' w-[98%] absolute bottom-0 right-1 left-1 flex justify-between items-center'>
     
  <a href={github_link!} target="_blank"  className="flex   cursor-pointer hover:text-text  items-center gap-1 bottom-2 left-2 rounded-full uppercase font-sans p-[10px]  text-[18px] my-2 bg-textgray duration-700 group-hover:translate-y-[-10px]">
     <FaGithub />
          </a>
          <div className=" lg:opacity-0 opacity-1 group-hover:opacity-100  group-hover:translate-y-[-10px] lg:flex duration-500 gap-3 bottom-0  right-0">
  <a href={demo_link} target="_blank"  className="flex cursor-pointer hover:gap-2 items-center gap-1 bottom-2 right-2 rounded-full uppercase font-sans p-[10px] px-[15px] lg:text-[18px] text-[12px] my-2 bg-textgray duration-700">
    DEMO <LiaExternalLinkAltSolid />
  </a>
</div>
  </div>
          </div> 
          <div className='my-3'>
              <p className=' text-textgray  text-[12px] font-sans'>{date}</p>
              <div className='flex flex-wrap gap-2'>
                  {
                      category?.map((e) => (<div key={e} className='  rounded-[18px] uppercase font-sans p-[5px]  text-[10px] my-2 bg-textgray inline-block'>{e}</div>))
                  }
              </div>
              <h2 className='text-[14px] lg:text-[21px] font-bold text-text '>{project_name}</h2>
              <p className='text-textgray text-[11px] lg:text-[12px] mt-1 '>{description}</p>
          </div>
   </RevealWrapper>
  )
}

export default ProjectsCard;