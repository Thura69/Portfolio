import React from 'react'
import Image from 'next/image'
import HTML from '../../../public/assets/html-5-svgrepo-com.png';
import CSS from '../../../public/assets/css-3-svgrepo-com.svg';
import JS from '../../../public/assets/js-svgrepo-com.svg';
import TJS from '../../../public/assets/typescript-svgrepo-com.svg';
import REact from '../../../public/assets/react-1-logo-svgrepo-com.svg';
import REactNative from '../../../public/assets/react-svgrepo-com.svg';
import Node from '../../../public/assets/nodejs-1-logo-svgrepo-com.svg';
import Npm from '../../../public/assets/npm-svgrepo-com.svg';
import Mongo from '../../../public/assets/mongodb-logo-svgrepo-com.svg';
import Git from '../../../public/assets/git-svgrepo-com.svg';
import ecs from '../../../public/assets/aws-ec2-svgrepo-com.svg';
import { GiSkills } from "react-icons/gi";
import rapsberry from '../../../public/assets/raspberry-pi-svgrepo-com.png'
import mqtt from '../../../public/assets/mqtt-logo-C92D58AA94-seeklogo.com.png'
import Text from './Themes/Text';
import Frames from './Themes/Frames';

 const SixthFrame = () => {
  const gg = 'bg-bg p-2 md:border-none border-[0.2px] w-[17%] md:w-[75px]  border-border lg:w-[65px]';
  const gge = 'bg-bg p-2 md:border-none border-[0.2px] w-[55%]   border-border  ';
  return (
    <div data-scroll-section className='flex items-center justify-center w-full lg:h-[320px]    h-[360px]'>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]'/>
        <div className='lg:w-[34.4%] xs:w-[90%] experience mid:w-[86%]  md:w-[90%]   h-full border-b-[0.5px] border-border w-[96%]  border-r-[0.5px] p-3 mid:px-7'>
          <div className='flex items-center mb-7 gap-3 justify-start'>
         <GiSkills className='text-text' size={25} />
          <h3 className='text-active uppercase text-[18px] font-bold'>SKILLS</h3>
        </div>
        <div className='flex  mt-[40px]  border-text  text-md lg:justify-center items-start md:justify-start justify-start gap-3 flex-wrap'>
        <Image className={gg} src={HTML}  width={60} alt='html'/>
        {/* <p className=' text-text'>HTML</p>
        <p className='text-text'>CSS</p>
        <p className='text-text'>JavaScript</p>
        <p className='text-text'>TypeScript</p>
        <p className='text-text'>Tailwind</p>
        <p className='text-text'>React</p>
        <p className='text-text'>React Native</p>
        <p className='text-text'>Express</p>
        <p className='text-text'>Node.js</p>
        <p className='text-text'>MQTT</p>
        <p className='text-text'>AWS</p> */}
        <Image className={gg} src={CSS} width={60} alt='css'/>
        <Image className={gg} src={JS} width={60} alt='js'/>
        <Image className={gg} src={TJS} width={60} alt='typescript'/>
        <Image className={gg} src={REactNative} width={60} alt='react'/>
        <Image className={gg} src={REact} width={60} alt='reactnative'/>
        <Image className={gg} src={Node} width={60} alt='node'/>
        <Image className={gg} src={Mongo} width={60} alt='mongo'/>
        <Image className={gg} src={ecs} width={60} alt='ecs'/>
        <Image className={gg} src={Npm} width={60} alt='npm'/>
        <Image className={gg} src={rapsberry} width={60} alt='ras'/>
        <Image className={gg} src={Git} width={60} alt='git'/>
        <Image className={gge} src={mqtt} width={200} alt='mqtt'/>
        </div>
        </div>
         <div className='lg:w-[61%] hidden xs:w-[90%]  mid:w-[86%] md:w-[90%] contact h-full  lg:flex lg:flex-col items-center justify-center border-b-[0.5px] border-border border-r-[0.5px] p-3 mid:px-7'>
       <Text bold='font-bold' context='Contact Me.' fontSize='text-[2rem]' color='text-text'/>
       <div className='bg-bg flex items-center justify-between border-border border-[0.5px] lg:w-[45%] h-[60px] p-2  md:h-[70px] mt-[8px] rounded-lg'>
        <input className='bg-bg px-2 w-[75%]  border-border outline-none' placeholder='ready for a crazy adventure'/>
        <button className='border-border w-[25%] h-full text-xs rounded-md border-[0.5px] text-text font-bold hover:bg-active hover:text-bg duration-500 '>Send</button>
       </div>
        </div>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]'/>
    </div>
  )
}

export default SixthFrame;