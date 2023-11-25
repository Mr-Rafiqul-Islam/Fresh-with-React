import React from 'react'

const Subheading = ({text,className}) => {
  return (
    <h4 className={`${className} font-bold text-[64px]`}>{text}</h4>
  )
}

export default Subheading