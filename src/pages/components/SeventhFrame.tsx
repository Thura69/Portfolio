import React, { useEffect, useRef } from 'react'
import Win from '../../../public/assets/laurel-wreath.png';
import Cart from '../../../public/assets/shopping-cart.png'
import Secure from '../../../public/assets/protection.png';
import Iot from '../../../public/assets/internet-of-things-2.png';
import cloud from '../../../public/assets/cloud-storage-2.png';
import Micro from '../../../public/assets/microservice-2.png';
import Blue from '../../../public/assets/floor-plan.png';

import Image from 'next/image';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { IoCartOutline} from 'react-icons/io5';

import ecommerce_1 from '../../../public/assets/screen.png'
import ecommerce_2 from '../../../public/assets/screen2.png'
import ecommerce_3 from '../../../public/assets/screen3.png'
import ecommerce_4 from '../../../public/assets/screen4.png'

import bank_1 from '../../../public/assets/bank.png'
import bank_2 from '../../../public/assets/bank2.png'

import bot_1 from '../../../public/assets/bot.png'
import bot_2 from '../../../public/assets/bot2.png'
import bot_3 from '../../../public/assets/bot3.png'
import bot_4 from '../../../public/assets/bot4.png'

import fuel_1 from '../../../public/assets/fuel4.png'
import fuel_2 from '../../../public/assets/fuel.png'
import fuel_3 from '../../../public/assets/fuel2.png'
import fuel_4 from '../../../public/assets/fuel3.png'
import fuel_5 from '../../../public/assets/fuel5.png'
import fuel_6 from '../../../public/assets/fuel6.png'
import fuel_7 from '../../../public/assets/server7.png'

import server_1 from '../../../public/assets/server4.png'
import server_2 from '../../../public/assets/server.png'
import server_3 from '../../../public/assets/server2.png'
import server_4 from '../../../public/assets/server3.png'

import app_1 from '../../../public/assets/app4.png'
import app_2 from '../../../public/assets/app.png'
import app_3 from '../../../public/assets/app2.png'
import app_4 from '../../../public/assets/app3.png'

import installer_1 from '../../../public/assets/installer4.png'
import installer_2 from '../../../public/assets/installer.png'
import installer_3 from '../../../public/assets/installer5.png'
import installer_4 from '../../../public/assets/installer3.png'

import hobby_1 from '../../../public/assets/IMG_9284.png'
import hobby_2 from '../../../public/assets/IMG_9285.png'
import hobby_3 from '../../../public/assets/IMG_9286.png'
import hobby_4 from '../../../public/assets/IMG_9287.png'
import hobby_5 from '../../../public/assets/IMG_9288.png'
import hobby_6 from '../../../public/assets/IMG_9289.png'
import hobby_7 from '../../../public/assets/IMG_9291.png'
import hobby_8 from '../../../public/assets/IMG_9292.png'
import WorkCard from './Themes/WorkCard';
import Text from './Themes/Text';
import Frames from './Themes/Frames';
import ProjectCard from './ProjectCard';

const ff = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, minus! Maiores, fugiat eligendi! Accusantium soluta autem a iste suscipit vero quaerat iure cum! Tempora possimus officia inventore! Dignissimos, earum vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laudantium doloremque beatae tempora corrupti. Harum error distinctio odit in alias, voluptas ex nulla id consectetur reprehenderit dolorem perferendis perspiciatis quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, tempora? Earum facilis ipsa soluta eaque voluptas tenetur itaque, perspiciatis labore incidunt dolor similique quis nulla voluptatem possimus autem voluptate ad.'



const SeventhFrame = () => {

  const webRef = useRef(null);
  const webTextRef = useRef<HTMLAnchorElement>(null);
  const appRef = useRef(null);
  const appTextRef = useRef<HTMLAnchorElement>(null);
  const serverRef = useRef(null);
  const serverTextRef = useRef<HTMLAnchorElement>(null);
  const otherRef = useRef(null);
  const otherTextRef = useRef<HTMLAnchorElement>(null);

  const fullRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

  const currentWeb = (webRef as React.RefObject<HTMLParagraphElement>)?.current;
  const currentTextWeb = (webTextRef as React.RefObject<HTMLAnchorElement>)?.current;
  const currentApp = (appRef as React.RefObject<HTMLParagraphElement>)?.current;
  const currentTextApp = (appTextRef as React.RefObject<HTMLAnchorElement>)?.current;
  const currentServer = (serverRef as React.RefObject<HTMLParagraphElement>)?.current;
  const currentTextServer = (serverTextRef as React.RefObject<HTMLAnchorElement>)?.current;
  const currentOther = (otherRef as React.RefObject<HTMLParagraphElement>)?.current;
  const currentTextOther = (otherTextRef as React.RefObject<HTMLAnchorElement>)?.current;
  
  

  if (currentTextWeb && currentWeb && scrollPosition >= currentWeb.offsetTop) {
    currentTextApp?.classList.remove('active');
    currentTextServer?.classList.remove('active');
    
    currentTextWeb.classList.add('active');
  } 

  if (currentTextApp && currentApp && scrollPosition >= currentApp.offsetTop) {
    currentTextWeb?.classList.remove('active');
    currentTextServer?.classList.remove('active');

    currentTextApp.classList.add('active');
  } 
  if (currentTextServer && currentServer && scrollPosition >= currentServer.offsetTop) {
    currentTextWeb?.classList.remove('active');
    currentTextApp?.classList.remove('active');
    currentTextOther?.classList.remove('active');


    currentTextServer.classList.add('active');
  } 
  if (currentTextOther && currentOther && scrollPosition >= currentOther.offsetTop) {
    currentTextWeb?.classList.remove('active');
    currentTextApp?.classList.remove('active');
    currentTextServer?.classList.remove('active');


    currentTextOther.classList.add('active');
  } 
  

    };



    // Attach the event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div data-scroll-section id="seven_frame"  className='flex items-center justify-center w-full h-[1870px] lg:h-[4800px]'>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]'/>
        <div className='w-[94%] lg:w-[94%] xs:w-[94%] bg-bg  h-full border-b-[0.5px] mid:w-[86%] border-border md:w-[90%] border-r-[0.5px]  mid:px-7'>
        <div className=' p-2  lg:hidden gap-1 flex items-center md:flex-row md:flex-wrap flex-col justify-center mid:gap-6 '>
        <WorkCard title='Khit Zay Ecommerce' description='Ecommerce with latest modren UI.' tools="React.js, Tailwind CSS, Cloudinary" img={Cart} link='kd' />            
        <WorkCard title='Awwwards Winning' description='Strongest UI design web.' tools="Next.js, TypeScript, Tailwind CSS, Framer Motion" img={Win} link='kd' />            
        <WorkCard title='API Keys and Permits ' description='Fullstack web app controls Restful API.' tools="Next.js, Next auth, TypeScript, Tailwind CSS, Node.js" img={Secure} link='kd' />            
        <WorkCard title='Android Application' description='Smart Home IoT app to control lights, fans and AC.' tools="React Native, TypeScript, Expo" img={Iot} link='kd' />            
        <WorkCard title='Microservices Architecture' description='Food ecommerce server with microservices.' tools="Node.js, TypeScript, Express.js, Swagger, API gateway, MongoDb" img={Micro} link='kd' />            
        <WorkCard title='Monolithic Architecture' description='Ecommerce API with Monolithic.' tools="Node.js, TypeScript, Express.js, MongoDb, Cloudinary, Swagger" img={cloud} link='kd' />            
        </div>
        <div className='lg:flex hidden '>
          <div className=''>
          <div className=' p-4 pt-[70px] text-textgray sticky top-[50px] right-0   flex flex-col justify-start items-start gap-[5px]   w-[270px] '>
           <a ref={webTextRef}  className='text-[1.9rem] duration-500   font-bold font-sans '>Frontend </a>
           <a ref={appTextRef}  className='text-[1.9rem] duration-500  font-bold font-sans'>Application</a>
           <a ref={serverTextRef}  className='text-[1.9rem] duration-500  font-bold font-sans'>Backend</a>
           <a ref={otherTextRef}  className='text-[1.9rem] duration-500  font-bold font-sans '>Others</a>
           {/* <p className='text-[1.9rem]   font-bold font-sans'>Full-stack</p> */}
              
          </div>
          </div>
          <div className=' pt-[50px]  '>
            {/* here */}
          <div ref={webRef} id='web'>
                <ProjectCard link='https://detfsmm.com'  title={"REAL TIME FUEL MANAGEMNT SYSTEM"} year='2023' description={ff} image={[fuel_1, fuel_7, fuel_5, fuel_4]} />
             <ProjectCard link='UNAUTHORIZED' title={"POS SET UP"} year='2023' description={ff} image={[installer_1,installer_2,installer_3,installer_4]}/>
          <ProjectCard link='https://thurakhitzay.netlify.app' title={"ECOMMERCE"} year='2023' description={ff} image={[ecommerce_1,ecommerce_2,ecommerce_3,ecommerce_4]} />
          </div>
         <div ref={appRef} id='app'>
          <ProjectCard link='READ APPLICATION GUIDE' title={"FMS (FUEL MANAGEMENT SYSTEM) APPLICATION "} year='2023' description={ff} image={[app_1,app_2,app_3,app_4]}/>
         </div>
         <div  ref={serverRef} id="server">
             <ProjectCard link='https://github.com/Thura69/Ecommerce_Backend' title={"ECOMMERCE SERVER REST API"} year='2023' description={ff} image={[server_1,server_2,server_3,server_4]}/>
         </div>
            <div ref={otherRef} id='others'>
                 <ProjectCard link='UNDEFINDED LINK' title={"RASPBERRY PI ,BANANA PI & POS HANDLE"} year='2023' description={ff} image={[hobby_1,hobby_4,hobby_3,hobby_8]}/>
         </div>

            {/* here */}

          </div>
       </div>
        </div>
        <Frames className='w-[3%] mid:w-[7%] xs:w-[5%] md:w-[5%] lg:w-[3%]'/>
    </div>
  )
}

export default SeventhFrame