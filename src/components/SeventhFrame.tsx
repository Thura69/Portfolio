import React, { useEffect, useRef, useState } from 'react'
import Win from '../../public/assets/laurel-wreath.png';
import Cart from '../../public/assets/shopping-cart.png'
import Fuel from '../../public/assets/gas-station-fuel-svgrepo-com (2).png'
import Secure from '../../public/assets/protection.png';
import Iot from '../../public/assets/internet-of-things-2.png';
import cloud from '../../public/assets/cloud-storage-2.png';
import Micro from '../../public/assets/microservice-2.png';
import Rasp from '../../public/assets/raspberry-pi-svgrepo-com (1).png';
import Blue from '../../public/assets/floor-plan.png';
import Icons from '../../public/assets/64e2212a242e4af9b6eb6a2a_Icon.svg';
import Image from 'next/image';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { IoCartOutline} from 'react-icons/io5';

import ecommerce_1 from '../../public/assets/page11.png'
import ecommerce_2 from '../../public/assets/khitzay1.png'
import ecommerce_3 from '../../public/assets/khitzay2.png'
import ecommerce_4 from '../../public/assets/khitzay3.png'

import bank_1 from '../../public/assets/bank.png'
import bank_2 from '../../public/assets/bank2.png'

import bot_1 from '../../public/assets/bot.png'
import bot_2 from '../../public/assets/bot2.png'
import bot_3 from '../../public/assets/bot3.png'
import bot_4 from '../../public/assets/bot4.png'

import fuel_1 from '../../public/assets/fuel_1.png'
import fuel_2 from '../../public/assets/fuel.png'
import fuel_3 from '../../public/assets/fuel2.png'
import fuel_4 from '../../public/assets/fuel3.png'
import fuel_5 from '../../public/assets/fuel5.png'
import fuel_6 from '../../public/assets/fuel6.png'
import fuel_7 from '../../public/assets/server7.png'

import server_1 from '../../public/assets/ecommerce2.png'
import server_2 from '../../public/assets/ecommerce.png'
import server_3 from '../../public/assets/ecommerce1.png'
import server_4 from '../../public/assets/server2.png'

import youtube_1 from '../../public/assets/youtube4.png'
import youtube_2 from '../../public/assets/youtube.png'
import youtube_3 from '../../public/assets/youtube2.png'
import youtube_4 from '../../public/assets/youtube3.png'

import app_1 from '../../public/assets/app4.png'
import app_2 from '../../public/assets/app.png'
import app_3 from '../../public/assets/app2.png'
import app_4 from '../../public/assets/modren.png'

import drew_1 from '../../public/assets/drew4.png'
import drew_2 from '../../public/assets/drew.png'
import drew_3 from '../../public/assets/drew2.png'
import drew_4 from '../../public/assets/drew3.png'

import installer_1 from '../../public/assets/installer4.png'
import installer_2 from '../../public/assets/installer.png'
import installer_3 from '../../public/assets/installer5.png'
import installer_4 from '../../public/assets/installer3.png'

import micro_1 from '../../public/assets/server.png'
import micro_2 from '../../public/assets/micro.png'
import micro_3 from '../../public/assets/micro1.png'
import micro_4 from '../../public/assets/micro2.png'

import blog_1 from '../../public/assets/khitzayApi.png'
import blog_2 from '../../public/assets/khitzayApi1.png'
import blog_3 from '../../public/assets/khitzayApi2.png'
import blog_4 from '../../public/assets/blog2.png'

import hobby_1 from '../../public/assets/IMG_9284.png'
import hobby_2 from '../../public/assets/IMG_9285.png'
import hobby_3 from '../../public/assets/IMG_9286.png'
import hobby_4 from '../../public/assets/IMG_9287.png'
import hobby_5 from '../../public/assets/IMG_9288.png'
import hobby_6 from '../../public/assets/IMG_9289.png'
import hobby_7 from '../../public/assets/IMG_9291.png'
import hobby_8 from '../../public/assets/IMG_9292.png'
import WorkCard from './Themes/WorkCard';
import Text from './Themes/Text';
import Frames from './Themes/Frames';
import ProjectCard from './ProjectCard';
import { englishLanguage } from '@/language/english';
import svg from '../../public/assets/6469a18e29af2de5755caf00_Animated_rainbow_card.svg'
import Link from 'next/link';
import AnimatedTextWord from './animation/AnimatedTextWord';
import { BiLogoMastercard } from "react-icons/bi";

import KhitZay from '../../public/assets/khitzay4.png'
import PageForm from '../../public/assets/pageform3.png'
import { AndroidWorkCard } from './AndroidWorkCard';


const SeventhFrame: React.FC<any> = ({gg}) => {
  const [language, setLanguage] = useState(englishLanguage);
  const fullstackRef = useRef(null);
  const fullstackTextRef = useRef<HTMLAnchorElement>(null);
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

  const currenFullStack = (fullstackRef as React.RefObject<HTMLParagraphElement>)?.current;
  const currentTexFullStack = (fullstackTextRef as React.RefObject<HTMLAnchorElement>)?.current;
  const currentWeb = (webRef as React.RefObject<HTMLParagraphElement>)?.current;
  const currentTextWeb = (webTextRef as React.RefObject<HTMLAnchorElement>)?.current;
  const currentApp = (appRef as React.RefObject<HTMLParagraphElement>)?.current;
  const currentTextApp = (appTextRef as React.RefObject<HTMLAnchorElement>)?.current;
  const currentServer = (serverRef as React.RefObject<HTMLParagraphElement>)?.current;
  const currentTextServer = (serverTextRef as React.RefObject<HTMLAnchorElement>)?.current;
  const currentOther = (otherRef as React.RefObject<HTMLParagraphElement>)?.current;
  const currentTextOther = (otherTextRef as React.RefObject<HTMLAnchorElement>)?.current;
  

  if (currentTexFullStack && currenFullStack && scrollPosition >= currenFullStack.offsetTop) {
    currentTextApp?.classList.remove('active');
    currentTextServer?.classList.remove('active');
    currentTextOther?.classList.remove('active');
    currentTextWeb?.classList.remove('active');
    
    currentTexFullStack.classList.add('active');
  } 
  if (currentTextWeb && currentWeb && scrollPosition >= currentWeb.offsetTop + 500) {
    currentTextApp?.classList.remove('active');
    currentTextServer?.classList.remove('active');
    currentTexFullStack?.classList.remove('active');
    currentTextWeb?.classList.remove('active');
    currentTextWeb.classList.add('active');
  } 6

  if (currentTextApp && currentApp && scrollPosition >= currentApp.offsetTop + 500) {
    currentTextWeb?.classList.remove('active');
    currentTextServer?.classList.remove('active');
    currentTexFullStack?.classList.remove('active');


    currentTextApp.classList.add('active');
  } 
  if (currentTextServer && currentServer && scrollPosition >= currentServer.offsetTop + 500) {
    currentTextWeb?.classList.remove('active');
    currentTextApp?.classList.remove('active');
    currentTextOther?.classList.remove('active');
    currentTexFullStack?.classList.remove('active');



    currentTextServer.classList.add('active');
  } 
  if (currentTextOther && currentOther && scrollPosition >= currentOther.offsetTop + 500) {
    currentTextWeb?.classList.remove('active');
    currentTextApp?.classList.remove('active');
    currentTextServer?.classList.remove('active');
    currentTexFullStack?.classList.remove('active');



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
    <div  data-scroll-section id="seven_frame"  className='flex items-center justify-center w-full h-[1250px] mid:h-[2000px] md:h-[700px] sxs:h-[1300px] mxs:h-[1350px] msm:h-[1580px] sm:h-[1450px] xsm:h-[1500px] lsm:h-[1670px] plg:h-[800px] lg:h-[2700px] alg:h-[2700px] xl:h-[2600px]'>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]'/>
        <div className='w-[94%]   lg:w-[94%] xs:w-[94%] bg-bg  h-full border-b-[0.5px] mid:w-[86%] border-border relative md:w-[90%] border-r-[0.5px] overflow-clip  '>
           {/* <Image className='absolute right-[-270px] top-[-150px]' src={svg} alt='svg'/> */}
        <h3 className='text-text px-[30px]  my-[20px]  lg:translate-y-10  uppercase text-[1.5rem]  lg:text-[2.25rem] font-bold'>Selected Projects.</h3>
       
        <div className='lg:hidden grid gap-3  p-2 grid-cols-1  md:grid-cols-2 text-left items-start md:flex-row md:flex-wrap flex-col justify-start mid:gap-6 '>
          <AndroidWorkCard img={fuel_3} title='FUEL MANAGEMENT SYSTEM' />
          <AndroidWorkCard img={PageForm} title='Dnd PAGE FORM' />
          <AndroidWorkCard img={KhitZay} title='KHIT ZAY ECOMMERCE' />
          <AndroidWorkCard img={blog_1} title='KHIT ZAY API & DB DESIGN' />
        </div>
       
      <div ref={gg} className='lg:flex pt-[30px]   hidden '>
          <div className=''>
          <div className='flex  mx-[50px]  rounded    mt-[60px] text-[#212326] sticky top-[80px] right-0     flex-col justify-start items-start   gap-[20px]  '>
           <a ref={fullstackTextRef}  className='   uppercase category  text-[32px] font-bold font-sans'>
          Fullstack 
          </a>
           <a ref={webTextRef}  className='  uppercase  text-[32px] category font-bold font-sans '>Frontend </a>
           <a ref={serverTextRef}  className=' uppercase  text-[32px] category font-bold font-sans '>Backend</a>
           <Link  href='/projects' className=' uppercase hover:text-bg-blue text-[32px] font-bold font-sans category '>MORE +</Link>
          </div>
          </div>
          <div className=' pl-[30px]  mt-[30px] pt-[12px]'>
            {/* here */}
          <div ref={fullstackRef}>
          <ProjectCard toPage={'/projects/0'}  link='https://detfsmm.com' url='https://detfsmm.com'  title={"FMS MANAGEMNT SYSTEM"} year='2023' description={language.realtimefuelmanagementsystem} skills='React.js, Tailwind ,Framer Motion, React Rouder Dom, Redux, Redux Thunk, Custom Hooks,Prime React, Chart.js, Express, Node.js, Mongodb, TypeScript, Zod, EC2' image={[fuel_1, fuel_3, fuel_4, fuel_5]} account={true} vd={[false,false,false,false]} accountDetail='Username : user, Password : 12345678' />
          </div>
          <div ref={webRef} className='' id='web'>
          <ProjectCard toPage={'/projects/2'} link='https://github.com/Thura69/Drag-and-Drop-Forms-Management' skills='React.js, Redux, Reuseable Components' url='https://github.com/Thura69/Drag-and-Drop-Forms-Management' title={"Form Drag & Drop"} year='2023' description={language.ecommerce} image={['https://res.cloudinary.com/dbqyaigcg/video/upload/v1704097659/Screen_Recording_2023-12-30_at_19.44.29_h23x9p_2_rbgyxq.webm','https://res.cloudinary.com/dbqyaigcg/video/upload/v1704097566/Screen_Recording_2023-12-30_at_19.43.08_cvnpdz_e3wqeg.webm','https://res.cloudinary.com/dbqyaigcg/video/upload/v1704097255/Screen_Recording_2023-12-30_at_19.45.37_ut4elc_iilapm.webm',PageForm]} vd={[true,true,true,false]} account={false} />
          <ProjectCard toPage={'/projects/2'} link='https://github.com/Thura69/Khit_Zay_Next' skills='React.js, Redux, Reuseable Components' url='https://khit-zay-next.vercel.app/' title={"Khit Zay Ecommerce"} year='2023' description={language.khitzay} image={[KhitZay,ecommerce_2,ecommerce_3,ecommerce_4]} vd={[false,false,false,false]} account={false} />
          </div>
         <div  ref={serverRef} id="server">
              <ProjectCard toPage={'/projects/5'} link='https://github.com/Thura69/Khit_Zay_Next_API' skills='Express.js,Node.js,TypeScript,MongoDb,MVC Pattern,Cloudinary' url='https://github.com/Thura69/Ecommerce_Backend' title={"Khit Zay API & Database Design"} year='2023' description={language.ecommerceapi} image={[blog_1, blog_2,blog_2, blog_1]} account={false} />
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