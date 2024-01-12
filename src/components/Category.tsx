import React from 'react'


 const Category:React.FC<any> = ({title,active,setSelectedCategory}) => {
  return (
      <div  onClick={()=>setSelectedCategory(title)}  className={`cursor-pointer  flex   hover:gap-2 items-center gap-1 bottom-2 right-2 rounded-full uppercase font-sans px-[15px] mid:px-[15px] lg:px-[15px] lg:p-[10px] p-[4px] border-[1.5px]   text-[11px] mid:text-[12px] duration-700 ${active?"text-bg bg-textgray":"text-textgray border-textgray"}`}>
    <p>{title}</p>
</div>
  )
}

export default Category;