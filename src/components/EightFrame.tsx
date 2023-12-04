import React from 'react'
import Frames from './Themes/Frames'


 const EightFrame = () => {
  return (
   <div data-scroll-section className='flex items-center justify-center w-full h-[200px]'>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]'/>
        <div className='w-[94%] lg:w-[94%] xs:w-[90%] flex mid:w-[86%] md:w-[90%] experience flex-col items-center justify-center gap-4 p-4 border-r-[0.5px] border-b-[0.5px] border-border h-full text-center'>
              <p className='text-textgray'>Have an interesting, stupid or crazy idea you&#39;d like some help building?</p>
              <span className='text-text border-b-[0.5px] border-active font-bold'>Let&#39;s talk.</span>
              <h3 className='text-textgray'>2023 © Thura Nyi</h3>
        </div>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]'/>
    </div>
  )
}

export default EightFrame