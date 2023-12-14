import React from 'react'
import Image from 'next/image'
import logo from '../../public/assets/64e2212a242e4af9b6eb6a2a_Icon.svg';
import com from '../../public/assets/det_logo-2.png';
import { RevealWrapper } from  'next-reveal'
import Frames from './Themes/Frames';
import About from '../../public/assets/647a301328e41c27c8484b60_About me page type script.svg';
import Dance from '../../public/assets/meme.jpg';
import Twikle from '../../public/assets/64e87d3109760d7f63115377_Animated star.svg';
import { GrWaypoint } from "react-icons/gr";
import { MdOutlineSimCardDownload } from "react-icons/md";
import AnimatedTextWord from './animation/AnimatedTextWord';
import School from '../../public/assets/ucsylogo.png';
import CareerPath from './CareerPath';
import ProjectsCard from './ProjectsCard';
import Category from './Category';
import StickyCursor from './animation/StickyCursor';
import { allprojects } from '@/language/allprojects';


const styles = {
};

 
 const Projects = () => {
  return (
      <>
       <StickyCursor/>
       <div data-scroll-section className='flex items-center mt-[60px] justify-center  w-full h-[550px] xs:h-[550px] sm:h-[600px] mid:h-[570px] lg:h-[1100px] md:h-[480px]'>
      <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.15%]'/>
      <div className='w-[94%] xs:w-[90%] mid:w-[86%] md:w-[90%] lg:w-[100%] bg-bg p-4 border-r-[0.5px] border-b-[0.5px]   border-border h-full mid:p-7 md:p-0  '>
      <div className='border-[0.5px] py-3 border-border px-10 flex gap-2'>
    <Category title="React.js"/>
    <Category active={true} title="Angular"/>
    <Category title="NExt.js"/>
    <Category title="Node.js"/>
    <Category title="React Native"/>
    <Category title="Frontend"/>
    <Category title="backend"/>
      </div>
      <h2 className='text-[2.2rem] text-text font-bold uppercase font-sans my-5  px-5'>All Projects</h2>
      <div className='flex flex-wrap gap-5  w-[90%] mx-auto'>
    {
        allprojects.map((e,index)=>(
            <ProjectsCard id={e.id} project_name={e.project_name} description={e.description} date={e.date} image={e.image} video={e.video} demo_link={e.demo_link} category={e.category} key={e.id}/>
        ))
    }
      </div>
        </div>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.16%]'/>
    </div>
      </>
  )
}

export default Projects;