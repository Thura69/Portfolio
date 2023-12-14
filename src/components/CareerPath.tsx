import { careerpathprops } from '@/types/careerpath.types';
import { RevealWrapper } from 'next-reveal';
import React from 'react'
import { LiaExternalLinkAltSolid } from "react-icons/lia";


 const CareerPath:React.FC<careerpathprops> = ({companyName,position,year,link,open}) => {
  return (
    <RevealWrapper origin='bottom' duration={500}>
      <div className='text-text my-4 leading-9'>
      <p className='font-bold text-[1.15rem] font-sans '>{companyName} </p>
      {
        open?<>  <a href={link} target="_blank" className='text-[1.05rem] hover:underline flex items-center gap-2 cursor-pointer'>{position} <LiaExternalLinkAltSolid/></a>
        <p className='text-[.75rem]'>{year}</p></>:''
      }
    </div>
    </RevealWrapper>
  )
}

export default CareerPath;