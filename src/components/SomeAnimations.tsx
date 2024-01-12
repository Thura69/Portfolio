import React from 'react'
import Image from 'next/image'
import Profile from '../../public/assets/64cd4b8241e30d1ff98179ad_gamestation.png';
import SVG from '../../public/assets/nft-_1_.svg';
import {AiFillLinkedin,AiFillGithub,AiFillFacebook} from 'react-icons/ai'
import Sign from '../../public/assets/2-removebg-preview.png';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import self from '../../public/assets/tools-and-utensils-programmer-svgrepo-com.png';
import Experience from '../../public/assets/experience-information-knowledge-svgrepo-com (1).png';
import { RevealWrapper } from  'next-reveal'
import AnimatedTextWord from './animation/AnimatedTextWord';
import Text from './Themes/Text';
import Frames from './Themes/Frames';
import FramerMagnetic from './FramerMagnetic';
import { MdEmail } from "react-icons/md";
import logo from '../../public/assets/64e2212a242e4af9b6eb6a2a_Icon.svg';


const styles = {
};

 
 const SomeAnimations = () => {
  return (
    <div data-scroll-section className=' grid grid-cols-3  items-center justify-center  w-full h-[800px] xs:h-[960px] sm:h-[900px] mid:h-[1000px] lg:h-[650px] md:h-[950px]'>
      <AnimationCard/>
      <AnimationCard/>
      <AnimationCard/>
    </div>
  )
 }


const AnimationCard = () => {
  return (
     <div className=' p-3 flex flex-col items-start  justify-center'>
<h3 className='text-[#ffff] text-[1.4rem] font-sans font-bold'>Cards Parallax</h3>
  <div className="flex gap-2">
    <div  className='  rounded-[18px] uppercase font-sans p-[5px]  text-[10px] my-2 bg-textgray inline-block'><p>Next.js</p></div>
  <div  className='  rounded-[18px] uppercase font-sans p-[5px]  text-[10px] my-2 bg-textgray inline-block'><p>Framer Motion</p></div>
  </div>
  <video loop autoPlay  muted className='rounded-md  group-hover:block' width="80%" height="auto" >
  <source src={'https://videos.ctfassets.net/jzzgtonmw9s6/558iv5rXmoDg7eN52nW49J/5a30f7024a14bbb387db9d7f176b044c/Untitled__1_.mov'} type="video/mp4"/>
  </video>

        </div>
   )
 }

export default SomeAnimations;