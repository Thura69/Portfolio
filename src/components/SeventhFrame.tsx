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

import ecommerce_1 from '../../public/assets/screen.png'
import ecommerce_2 from '../../public/assets/screen2.png'
import ecommerce_3 from '../../public/assets/screen3.png'
import ecommerce_4 from '../../public/assets/screen4.png'

import bank_1 from '../../public/assets/bank.png'
import bank_2 from '../../public/assets/bank2.png'

import bot_1 from '../../public/assets/bot.png'
import bot_2 from '../../public/assets/bot2.png'
import bot_3 from '../../public/assets/bot3.png'
import bot_4 from '../../public/assets/bot4.png'

import fuel_1 from '../../public/assets/fuel4.png'
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
import app_4 from '../../public/assets/app3.png'

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

import blog_1 from '../../public/assets/server3.png'
import blog_2 from '../../public/assets/blog.png'
import blog_3 from '../../public/assets/server4.png'
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
    <div ref={gg} data-scroll-section id="seven_frame"  className='flex items-center justify-center w-full h-[4900px] mid:h-[4360px] md:h-[3600px] lg:h-[3450px]'>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]'/>
        <div className='w-[94%] p-2  lg:w-[94%] xs:w-[94%] bg-bg  h-full border-b-[0.5px] mid:w-[86%] border-border relative md:w-[90%] border-r-[0.5px] overflow-clip   mid:px-7'>
           <Image className='absolute right-[-270px] top-[-150px]' src={svg} alt='svg'/>
        <h3 className='text-text px-2 mt-[100px]   uppercase text-[1.5rem]  lg:text-[3.2rem] font-bold'>SELECTED PROJECTS.</h3>
       
        <div className='lg:hidden gap-1   flex text-left items-start md:flex-row md:flex-wrap flex-col justify-start mid:gap-6 '>
            <h3 className=' text-text text-xl  uppercase mb-2  font-bold '>Full Stack Development</h3>
       <div className=' border-text w-full gap-2 flex-wrap flex justify-between'>
         <WorkCard id={0} real={true}  no='01' title='Real Time Fuel Management System' description='The real-time fuel management website is currently operational, with hundreds of users, including the Ministry of Electricity and Energy (MOEE) and fuel station companies, actively monitoring it. On the default website, 10 stations are running, providing detailed sales information. Many managers use this website for their stations to generate daily reports, manage accounts, and check profits and other staff details from their individual dashboards.' tools="React.js, Tailwind ,Framer Motion, React Rouder Dom, Redux, Redux Thunk, Custom Hooks,Prime React, Chart.js,Nginx, Express, Node.js, Mongodb,Redis, TypeScript, Zod, EC2" img={Fuel} link='/project' />            
         <WorkCard id={1} real={true} no="02" title='FMS (Fuel Management System) Set up Application' description='The FMS application is currently operational across nine stations in Natogyi, Ohn Chaw, Kyawe Tat Sone, Kyein Pin Sel, Nawng Kio, Muse, Sittwe, Gwa, and Taunggyi. Fuel station employees are using this application with satisfaction, utilizing it to permit dispensers and adjust dispenser prices. They frequently use the app to monitor the fuel balance in the tanks.The application features two modes: auto permit and default permit. In auto permit mode, employees can add car numbers and customer information without requiring manual permission.' tools="React Native, Expo, React Navigation, Redux, Express.js, Node.js, TypeScript, Zod, Mongodb" img={Iot} link='kd' />
       </div>
        <h3 className=' text-text text-xl  uppercase my-4 mt-6  font-bold '>Frontend Development</h3>
        <div className=' border-text w-full gap-2 flex-wrap flex justify-between'>
          <WorkCard id={2} real={true} no="03" title='POS Setup' description='The POS setup website serves as an installer platform, widely utilized by installers to configure POS servers for various stations. Dispensers, nozzles, initial data, and account controls all originate from this POS setup web. Emphasizing simplicity, ease of use, and lightweight design, I aim to make the setup process straightforward for users, offering a plug-and-play experience through installers. This setup web has successfully configured 10 stations with ease. I designed it using Figma and developed it using React.js, Redux, React Router Dom, and Framermotion. Git and GitHub are utilized for version control.' tools="Next.js, TypeScript, Tailwind CSS, Framer Motion" img={Win} link='kd' />            
        <WorkCard id={3} real={false} no="04" title='Ecommerce' description='The UI for this ecommerce website is ready for interaction with the API that I developed during my free time. The features include displaying products based on categories, special products, sale products, and popular products determined by user preferences. Additionally, there will be a blog section for advertising. On the products page, users can utilize filters based on prices, categories, color, and stock availability.' tools="Next.js, Next auth, TypeScript, Tailwind CSS, Node.js" img={Cart} link='kd' />        
        </div>
           <h3 className=' text-text text-xl  uppercase my-4 mt-6  font-bold '>Application Development</h3>    
        <div  className=' border-text gap-2 w-full flex-wrap flex justify-between'> <WorkCard id={4} real={true} no="05" title='FMS (Fuel Management System) Application' description='The FMS application is currently operational across nine stations in Natogyi, Ohn Chaw, Kyawe Tat Sone, Kyein Pin Sel, Nawng Kio, Muse, Sittwe, Gwa, and Taunggyi. Fuel station employees are using this application with satisfaction, utilizing it to permit dispensers and adjust dispenser prices. They frequently use the app to monitor the fuel balance in the tanks.The application features two modes: auto permit and default permit. In auto permit mode, employees can add car numbers and customer information without requiring manual permission.' tools="React Native, Expo, React Navigation, Expo Print, Redux" img={Iot} link='kd' /> </div>
             
         <h3 className=' text-text text-xl  uppercase my-4 mt-6  font-bold '>Backend Development</h3>           
        <div className=' border-text w-full flex-wrap gap-2 flex justify-between'>
        <WorkCard id={5} real={false} no="06" title='Ecommerce Backend Rest API' description='For API development, I designed with the MVC control pattern, a significant pattern for maintaining and identifying errors. I implemented thorough error handling to ensure the stability of the API and prevent crashes. Multiple middlewares are utilized for enhanced functionality.To efficiently handle images and videos, I integrated Cloudinary to store these media files, ensuring optimal API performance. The API includes a password recovery feature with email recovery and password reset functionalities, and I implemented Jsonweb token for security measures.' tools="Node.js, TypeScript,Express.js, JsonWebToken, Cloudinary, MongoDb" img={Micro} link='kd' />            
        <WorkCard id={6} real={false} no="07" title='Youtube Backend Rest api' description='YouTube Rest API is implemented using the MVC pattern with Node.js and MongoDB. I utilize Zod for type validation, JSON Web Token for account control and security, and TypeScript for robust development, incorporating multiple middlewares. MongoDB is employed as the database.YouTube Rest API is implemented using the MVC pattern with Node.js and MongoDB. I utilize Zod for type validation, JSON Web Token for account control and security, and TypeScript for robust development, incorporating multiple middlewares. MongoDB is employed as the database.' tools="Node.js,JsonWebToken, TypeScript,Zod, Express.js, MongoDb" img={cloud} link='kd' /> 
        </div> 
         <h3 className=' text-text text-xl  uppercase my-4 mt-6  font-bold '>Local Server Development</h3>           
        <div className=' border-text w-full flex-wrap flex justify-between'>  <WorkCard id={7} real={true} no="08" title='Raspberry pi, Banana pi and Pos Handle' description='I learned to connect my web and hardware devices for further improvement in my development. I am familiar with SSH technology, Raspbian OS, Linux, and server logic. Similar configurations apply to the Banana Pi. The server logic is the same as on a cloud server, such as EC2. Additionally, for the POS handler, I developed a printing application on Android, which proves to be highly beneficial for POS software.' tools="Raspberry pi, Banana Pi, SSH, Nginx, Pm2, Linux, Ubuntu" img={Rasp} link='kd' />   </div>            
        </div>
       
        <div className='lg:flex hidden '>
          <div className=''>
          <div className=' p-4 pt-[60px] text-[#212326] sticky top-[50px] right-0   flex flex-col justify-start items-start gap-[20px]   w-[280px] '>
           <a ref={fullstackTextRef}  className='text-[2.2rem] active duration-500 category   font-bold font-sans '>Fullstack </a>
           {/* <AnimatedTextWord text='Fullstack' classname='text-[2.2rem] duration-500 category  text-text font-bold font-sans'/> */}
           <a ref={webTextRef}  className='text-[2.2rem] duration-500  category  font-bold font-sans '>Frontend </a>
           <a ref={appTextRef}  className='text-[2.2rem] duration-500   category  font-bold font-sans'>Application</a>
           <a ref={serverTextRef}  className='text-[2.2rem] duration-500 category   font-bold font-sans'>Backend</a>
           <a ref={otherTextRef}  className='text-[2.2rem] duration-500  category  font-bold font-sans '>Others</a>
           {/* <p className='text-[1.9rem]   font-bold font-sans'>Full-stack</p> */}
          </div>
          </div>
          <div className=' pt-[40px]  '>
            {/* here */}
          <div ref={fullstackRef}>
          <ProjectCard toPage={'/projects/0'}  link='https://detfsmm.com' url='https://detfsmm.com'  title={"FMS MANAGEMNT SYSTEM"} year='2023' description={language.realtimefuelmanagementsystem} skills='React.js, Tailwind ,Framer Motion, React Rouder Dom, Redux, Redux Thunk, Custom Hooks,Prime React, Chart.js, Express, Node.js, Mongodb, TypeScript, Zod, EC2' image={[fuel_1, fuel_7, fuel_5, fuel_4]} account={true} accountDetail='Username : user, Password : 12345678' />
          </div>
          <div ref={webRef} className='' id='web'>
          {/* <ProjectCard toPage={'/projects/1'} link='UNAUTHORIZED' url={''} title={"POS SET UP"} year='2023' description={language.possetup} image={[installer_1, installer_2, installer_3, installer_4]} skills='React.js, Tailwind, TypeScript, Redux, Framer Motion' account={false} /> */}
          <ProjectCard toPage={'/projects/2'} link='https://thurakhitzay.netlify.app' skills='React.js, Redux, Reuseable Components' url='https://thurakhitzay.netlify.app' title={"ECOMMERCE"} year='2023' description={language.ecommerce} image={[ecommerce_1,ecommerce_2,ecommerce_3,ecommerce_4]} account={false} />
          {/* <ProjectCard toPage={'/projects/3'} link='https://thura69.github.io/foreverBots/' url='https://thura69.github.io/foreverBots/' title={"FOREVER BOT (PURE VANILLA)"} year='2022' description={language.bot} skills='HTM, CSS, JavaScript' image={[bot_1,bot_2,bot_3,bot_4]} account={false} /> */}
          {/* <ProjectCard link='https://thura69.github.io/drewhouse/'  url='https://thura69.github.io/drewhouse/' title={"DREW HOUSE (PURE VANILLA)"} year='2022' description={language.drewhouse} skills='HTML, CSS, JavaScript' image={[drew_1,drew_2,drew_3,drew_4]} account={false} /> */}
          </div>
         <div ref={appRef} id='app'>
          <ProjectCard toPage={'/projects/4'} url='https://drive.google.com/file/d/15NQDfyogA01TvzT2dz9qv_8cEdl7pLjJ/view?usp=drive_link' link='READ APPLICATION GUIDE ( USER MANUAL ) ' title={"FMS (FUEL MANAGEMENT SYSTEM) APPLICATION "} skills='ReactNative, Expo, Reuseable Components, React Navigation, Async Storage, Redux, Expo Print ' year='2022' description={language.fmsapplication} image={[app_1,app_2,app_3,app_4]} account={false}/>
         </div>
         <div  ref={serverRef} id="server">
              <ProjectCard toPage={'/projects/5'} link='https://github.com/Thura69/Ecommerce_Backend' skills='Express.js,Node.js,TypeScript,MongoDb,MVC Pattern,Cloudinary' url='https://github.com/Thura69/Ecommerce_Backend' title={"ECOMMERCE SERVER REST API"} year='2023' description={language.ecommerceapi} image={[server_1, server_2, server_3, server_4]} account={false} />
              {/* <ProjectCard toPage={'/projects/6'} link='https://github.com/Thura69/Youtube_backend' skills='Express.js,Node.js,TypeScript,Mongodb' url='https://github.com/Thura69/Youtube_backend' title={"YOUTUBE REST API"} year='2023' description={language.youtube} image={[youtube_1, youtube_2, youtube_3, youtube_4]} account={false} /> */}
              {/* <ProjectCard toPage={'/projects/7'} link='https://github.com/Thura69/Youtube_backend' skills='Express.js,Node.js,TypeScript,Mongodb,Swagger' url='https://github.com/Thura69/Youtube_backend' title={"BLOG REST API"} year='2023' description={language.blog} image={[blog_1, blog_2, blog_3, blog_4]} account={false} /> */}
              {/* <ProjectCard toPage={`/projects/8`} link='https://github.com/Thura69/Youtube_backend' url='https://github.com/Thura69/Youtube_backend' title={"MICROSERVICES ARCHITECTURE"} year='2023' description={language.microservice} skills='MicroServices,Api GateWay,Express.js,Node.js,Mongodb' image={[micro_1, micro_2, micro_3, micro_4]} account={false} /> */}
         </div>
            <div ref={otherRef} id='others'>
                 <ProjectCard link='UNDEFINDED LINK' title={"RASPBERRY PI ,BANANA PI & POS HANDLE"} year='2023' description={language.hobby} image={[hobby_1,hobby_4,hobby_3,hobby_8]} account={false}/>
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