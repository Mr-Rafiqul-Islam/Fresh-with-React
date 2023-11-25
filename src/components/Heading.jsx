import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h1 className={`${className} font-poppins font-semibold text-[64px]`}>{text}</h1>
  )
}

export default Heading