import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'
import Img from '../../public/assets/khitzay4.png'
import FMS from '../../public/assets/fuel2.png'
import { GoDotFill } from "react-icons/go";
import Link from 'next/link';

interface AndroidWorkCard {
    img: StaticImageData,
  title: string,
  href:string
}

export const AndroidWorkCard:FC<AndroidWorkCard> = ({img,title,href}) => {
  return (
    <Link href={href} className='border-[0.5px] border-border rounded-md p-5 flex flex-col gap-3 justify-between text-[#ffff]'>
      <div>
          <Image src={img} alt='kdkd'/>
      </div>
      <div className='flex  justify-between items-center'>
              <p className='text-lg'>{title}</p>
              <GoDotFill />
      </div>
    </Link>
  )
}
