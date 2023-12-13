import { motion } from 'framer-motion';
import Link from 'next/link'
import React, { useState } from 'react'
import { blur, translate } from '../../public/header';

interface bodyProps{
    setIsActive:any
}
 

const Body:React.FC<bodyProps> =({setIsActive})=> {
    const [selectedLink, setSelectedLink] = useState({ isActive: false, index:0});
    const links = [
        {
            title: "Home",
            href: '/',
            src: ''
        },
        {
            title: "About",
            href: '/about',
            src: ''
        },
        {
            title: "Projects",
            href: '/about',
            src: ''
        },
    ];

    const getChar = (title:string) => {
        let chars:any[] = [];
        title.split("").forEach((char, index) => {
            chars.push(
                <motion.span  custom={[index * 0.02,(title.length - index) * 0.01]} variants={translate} initial='initial'  animate='enter' exit='exit' key={`char_${index}`}>
                    {char}
                </motion.span> 
            )
        });
        return chars; 
    }

  return (
    <div className='text-text   flex flex-wrap'>
        { 
              links.map((link, index) => {
                  return <Link  onMouseOver={()=>setSelectedLink({isActive:true,index})} onMouseLeave={()=>setSelectedLink({isActive:false,index})} className='mt-[40px]' href={link.href} key={`dd_${index}`}><motion.p onClick={()=>setIsActive(false)} variants={blur} initial='initial' animate={selectedLink.isActive && selectedLink.index != index? "open" : "closed"}  className='text-text m-0 flex uppercase overflow-hidden pl-[10px] mr-[20px] text-[2.5rem] lg:text-[4rem] font-bold '>{getChar(link.title)}</motion.p></Link>
            })
        }
    </div>
  )
}

export default Body