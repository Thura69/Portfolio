import React from 'react'


 const Category:React.FC<any> = ({title,active}) => {
  return (
      <div className={`cursor-pointer inline-block  hover:gap-2 items-center gap-1 bottom-2 right-2 rounded-full uppercase font-sans  p-[7px] border-[1px]   text-[14px] my-2 duration-700 ${active?"text-bg bg-textgray":"text-textgray border-textgray"}`}>
    {title}
</div>
  )
}

export default Category;