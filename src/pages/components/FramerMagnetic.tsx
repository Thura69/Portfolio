import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'

import {framermagnetic} from '@/types/framermagnetic'

 const FramerMagnetic: React.FC<framermagnetic> = ({ children }) => {
    const ref = useRef<any>(null);
    const [postion, setPosition] = useState({ x: 0, y: 0 });

    const mouseMove = (e:any) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref?.current?.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    }

    const mouseLeave = (e: any) => {
        setPosition({ x: 0, y: 0 });
    }

    const { x, y } = postion;

  return (
      <motion.div ref={ref} onMouseMove={mouseMove} transition={{type:'spring',stiffness:150,damping:15,mass:0.1}} onMouseLeave={mouseLeave} animate={{x,y}}>{children}</motion.div>
  )
}

export default FramerMagnetic;