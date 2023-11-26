import React from 'react'
import Frames from './Themes/Frames'


 const NinethFrame = () => {
  return (
     <div className='flex items-center justify-center w-full h-[10px] xs:h-[20px]'>
        <Frames className='w-[3%] xs:w-[5%]'/>
        <Frames className='w-[94%] xs:w-[90%]'/>
        <Frames className='w-[3%] xs:w-[5%]'/>
    </div>
  )
}

export default NinethFrame