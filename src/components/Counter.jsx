import React from 'react'
import Container from './Container'
import Subheading from './Subheading'

const Counter = ({className}) => {
  return (
    <div className={`${className}`}>
        <div className='bg-banner py-[72px] w-[793px] grid grid-cols-3 gap-3 rounded-[20px]'>
            <div className='text-center'>
                <Subheading className='font-poppins mb-[28px]' text='2010'/>
                <h6 className='font-poppins text-[28px] font-medium'>Founded</h6>
            </div>
            <div className='border-x-2 border-black text-center'>
                <Subheading className='font-poppins mb-[28px]' text='5000+'/>
                <h6 className='font-poppins text-[28px] font-medium'>Product Sold</h6>
            </div>
            <div className='text-center'>
                <Subheading className='font-poppins mb-[28px]' text='4500+'/>
                <h6 className='font-poppins text-[28px] font-medium'>Best Reviews</h6>
            </div>
        </div>
    </div>
  )
}

export default Counter