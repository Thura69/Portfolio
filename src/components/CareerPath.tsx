import { careerpathprops } from '@/types/careerpath.types';
import { RevealWrapper } from 'next-reveal';
import React from 'react'
import { LiaExternalLinkAltSolid } from "react-icons/lia";


 const CareerPath:React.FC<careerpathprops> = ({companyName,position,year,link,open}) => {
  return (
    <RevealWrapper origin='bottom' duration={500}>
      <div className='text-text my-4 leading-9'>
      <p className='font-bold text-[15px] font-sans '>{companyName} </p>
      {
        open?<>  <a href={link} target="_blank" className='text-[12px] hover:underline flex items-center gap-2 cursor-pointer'>{position} <LiaExternalLinkAltSolid/></a>
        <p className='text-[10px]'>{year}</p></>:''
      }
    </div>
    </RevealWrapper>
  )
}

export default CareerPath;