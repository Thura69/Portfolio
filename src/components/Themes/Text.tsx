import React from 'react'

 const Text:React.FC<textProps> = ({fontSize,color,context,absolute,bold}) => {
  return (
    <h3 className={`${fontSize} ${color} ${bold} font-sans my-[16.8px] ${absolute}`}>{context}</h3>
  )
}
export default Text;