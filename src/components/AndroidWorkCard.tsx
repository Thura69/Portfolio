import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'
import Img from '../../public/assets/khitzay4.png'
import FMS from '../../public/assets/fuel2.png'
import { GoDotFill } from "react-icons/go";

interface AndroidWorkCard {
    img: StaticImageData,
    title:string
}

export const AndroidWorkCard:FC<AndroidWorkCard> = ({img,title}) => {
  return (
    <div className='border-[0.5px] border-border rounded-md p-5 flex flex-col gap-3 justify-between text-[#ffff]'>
      <div>
          <Image src={img} alt='kdkd'/>
      </div>
      <div className='flex  justify-between items-center'>
              <p className='text-lg'>{title}</p>
              <GoDotFill />
      </div>
    </div>
  )
}
