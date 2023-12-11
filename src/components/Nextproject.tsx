import { nextProjectProps } from '@/types/nextProject.types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

const Nextproject:React.FC<nextProjectProps> = ({projectDetail}) => {
  return (
    <Link href={`/projects/${projectDetail.next_project_id}`} className=' my-4 mt-[80px]'>
    <h3 className='text-text font-bold text-[2rem] mb-3 font-sans lg:text-[2.5rem] uppercase lg:my-[20px] lg:mb-[50px]'>Next Project?</h3>
    <p className='text-text text-[2rem] font-sans font-bold'>{projectDetail.next_project_title}</p>
    <p className='text-text lg:text-[1.5rem]'>{projectDetail.next_project_year}</p>
    <p className='text-textgray mt-4 font-sans '>{projectDetail.next_project_description}</p>
    <Marquee className='gap-2 my-5'>
    <Image src={projectDetail.next_project_pictures[0]} className='w-[350px] lg:w-[650px]  mx-2' alt='rocket'/>
    <Image src={projectDetail.next_project_pictures[1]} className='w-[350px] lg:w-[650px]  mx-2' alt='rocket'/>
    <Image src={projectDetail.next_project_pictures[2]} className='w-[350px] lg:w-[650px]  mx-2' alt='rocket'/>
    <Image src={projectDetail.next_project_pictures[3]} className='w-[350px] lg:w-[650px]  mx-2' alt='rocket'/>
    </Marquee>
  </Link>
  )
}

export default Nextproject