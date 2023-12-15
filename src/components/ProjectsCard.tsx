import React from 'react'
import Sample from '../../public/assets/smple.webp'
import Sever from '../../public/assets/screen2.png'
import Image from 'next/image';
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { RevealWrapper } from 'next-reveal';
import { projectCardProps } from '@/types/projectCard.types';


const ProjectsCard:React.FC<projectCardProps> = ({id,project_name,description,date,image,video,github_link,demo_link,category}) => {
  return (
      <RevealWrapper origin='bottom' className='md:w-[45%]  h-[350px] lg:h-[400px] xl:w-[31%] mid:my-[20px]' duration={1000}>
          <a href={demo_link} className=' group hover:translate-y-[-10px] duration-300 relative'>
              <Image className=' group-hover:hidden  rounded-lg' src={image} alt='smaple' />
  <video loop autoPlay  muted className='hidden rounded-lg group-hover:block' width="100%" height="auto" >
  <source src={video} type="video/mp4"/>
  </video>
              <div className="absolute opacity-0 hidden group-hover:translate-y-[-10px] lg:flex group-hover:opacity-100 duration-500 bottom-2 gap-3 right-2">
  <a href={demo_link} target="_blank"  className="flex cursor-pointer hover:gap-2 items-center gap-1 bottom-2 right-2 rounded-full uppercase font-sans p-[10px] px-[15px] text-[18px] my-2 bg-textgray duration-700">
    DEMO <LiaExternalLinkAltSolid />
  </a>
</div>
  <div className="flex  absolute cursor-pointer hover:text-text  items-center gap-1 bottom-2 left-2 rounded-full uppercase font-sans p-[10px]  text-[18px] my-2 bg-textgray duration-700 group-hover:translate-y-[-10px]">
     <FaGithub />
  </div>
          </a> 
          <div className='my-3'>
              <p className=' text-textgray  text-[12px] font-sans'>{date}</p>
              <div className='flex gap-2'>
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