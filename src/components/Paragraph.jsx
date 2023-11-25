import React from 'react'

const Paragraph = ({text,className}) => {
  return (
    <p className={`${className} font-poppins`}>{text}</p>
  )
}

export default Paragraph