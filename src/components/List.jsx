import React from 'react'

const List = ({href,menu_name,className}) => {
  return (
    <li><a href={href} className={`${className} text-black	font-poppins font-semibold text-[24px] leading-10`}>{menu_name}</a></li>
  )
}

export default List