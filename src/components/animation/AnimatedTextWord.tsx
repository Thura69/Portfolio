import React from 'react'
import { animatedTextProps } from '@/types/animated.types';
import {motion} from 'framer-motion';

 const AnimatedTextWord: React.FC<animatedTextProps> = ({ text,classname,transition = {staggerChildren:0.01,delayChildren:0.030 * 2}}) => {
    const words = text?.split('');

    const container = {
        hidden: { opacity: 0, },
        visible: (i = 1) => ({
            opacity: 1,
            transition: transition
        })
    }

   



    const child = {
        visible: {
            opacity: 1,
            y:0,
            x:0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            }
        },
        hidden: {
            opacity: 0,
            y:70,
            x:-80,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness:100
            }
        }
    }

    return (
        <motion.div variants={container} initial="hidden" animate="visible" className={`text-[16.1px]    items-center   font-sans text-[#77818f] ${classname}`}>{words?.map((word, index) => <motion.span variants={child} className='' key={index}>
            {
               word
            }
        </motion.span>)}</motion.div>
    )
};

export default AnimatedTextWord