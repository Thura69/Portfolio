import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {motion,AnimatePresence,useScroll, useTransform} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Preload from './components/Preload';


export default function App({ Component, pageProps }: AppProps) {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const container = useRef(null);

  useEffect(() => {
    // Trigger animation after a delay or any other condition you want
    const animationTimeout = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(animationTimeout); // Clear timeout on component unmount

  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset:[`start end`,`end start`]
  });
  const y = useTransform(scrollYProgress,[0,1],[0,100])

  return <AnimatePresence mode='wait'  initial={false}  >
      {isAnimationComplete ? 
        <motion.div>
          <Component {...pageProps} y={y} />
          <motion.div
            className=' absolute z-[99] top-0 left-0 w-full h-[100svh] bg-bg origin-bottom'
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 2, ease: [1.5, 2, 2.5, 3] }}
          ></motion.div>
          <motion.div
            className='absolute z-[99] top-0 left-0 w-full h-[100svh] bg-bg origin-top'
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 2, ease: [1.5, 2, 2.5, 3] }}
          ></motion.div>
        </motion.div>
      :<Preload/>}
    </AnimatePresence>
}
