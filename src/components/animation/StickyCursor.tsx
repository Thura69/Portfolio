import React, { useEffect } from 'react'
import { motion,useMotionValue,useSpring } from 'framer-motion';

function StickyCursor() {
    const cursorSize = 20;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }
    const smoothOptions = {damping:20,stiffness:300,mass:0.5}
    const smoothMouse = {
        x: useSpring(mouse.x,smoothOptions),
        y: useSpring(mouse.y,smoothOptions)
    }
    const manageMouseMover = (e:any) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize/2);
        mouse.y.set(clientY - cursorSize/2);
    }
    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMover);
      
        return ()=>{  window.removeEventListener('mousemove', manageMouseMover);}
    });
  return (
    <motion.div style={{left:smoothMouse.x,top:smoothMouse.y}} className='w-[20px] z-50 h-[20px] top-5 pointer-events-none   bg-text rounded-full fixed'></motion.div>
  )
}

export default StickyCursor