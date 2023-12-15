import React, { useEffect, useState } from 'react'
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
import { title } from 'process';


const styles = {
};

 
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [data, setData] = useState(allprojects);

  useEffect(() => {
    if (selectedCategory !== "ALL") {
     
      const fakeData = data;
      const filteredProjects = allprojects.filter((project) =>
      project.category.includes(selectedCategory)
      );
      setData(filteredProjects);
    } else {
      setData(allprojects);
    }
  }, [selectedCategory]);

  return (
      <>
       <StickyCursor/>
       <div data-scroll-section className='flex items-center mt-[50px] justify-center  w-full h-[2650px] xs:h-[2550px] sm:h-[2700px] msm:h-[3000px] lmid:h-[3600px] mid:h-[3800] lg:h-[1800px] md:h-[1500px] xl:h-[1300px]'>
      <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.15%]'/>
      <div className='w-[94%] xs:w-[90%] mid:w-[86%] md:w-[90%] lg:w-[100%] bg-bg p-4 border-r-[0.5px] border-b-[0.5px]   border-border h-full mid:p-7 md:p-0  '>
      <div className='border-[0.5px] md:p-7 mdh:border-border category_container justify-start  flex-wrap    flex gap-2'>
    <Category  setSelectedCategory={setSelectedCategory} active={selectedCategory === "REACT.JS"?true:false} title="REACT.JS"/>
    <Category  setSelectedCategory={setSelectedCategory} active={selectedCategory === "ANGULAR"?true:false} title="ANGULAR"/>
    <Category  setSelectedCategory={setSelectedCategory} active={selectedCategory === "NEXT.JS"?true:false} title="NEXT.JS"/>
    <Category  setSelectedCategory={setSelectedCategory} active={selectedCategory === "NODE.JS"?true:false} title="NODE.JS"/>
    <Category  setSelectedCategory={setSelectedCategory} active={selectedCategory === "REACTNATIVE"?true:false} title="REACTNATIVE"/>
    <Category  setSelectedCategory={setSelectedCategory} active={selectedCategory === "FRONTEND"?true:false} title="FRONTEND"/>
    <Category  setSelectedCategory={setSelectedCategory} active={selectedCategory === "BACKEND"?true:false} title="BACKEND"/>
    <Category  setSelectedCategory={setSelectedCategory} active={selectedCategory === "FULLSTACK"?true:false} title="FULLSTACK"/>
    <Category  setSelectedCategory={setSelectedCategory} active={selectedCategory === "ALL"?true:false} title="ALL"/>
      </div>
     <div className='lg:px-[30px]'>
       <h2 className='text-[2rem] text-text font-bold md:mx-[30px]  uppercase font-sans my-[20px]'>All Projects</h2>
      <div className='flex flex-col md:flex-row  flex-wrap items-center justify-start  gap-7  w-[100%] mx-auto'>
    {
        data.map((e,index)=>(
            <ProjectsCard id={e.id} project_name={e.project_name} description={e.description} date={e.date} image={e.image} video={e.video} demo_link={e.demo_link} category={e.category} key={e.id}/>
        ))
    }
      </div>
     </div>
        </div>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.16%]'/>
    </div>
      </>
  )
}

export default Projects;