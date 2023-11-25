import React from 'react'
import Image from './Image'
import star from './../assets/Stars.png'

const Card = ({src,alt,text1,text2,text3}) => {
  return (
    <div>
        <img src={src} alt={alt} />
        <div className="bg-white pt-[14px] ps-[23px]">
            <Image src={star}/>
            <h5 className='font-poppins tex-[22px] font-semibold text-black mt-[12px] mb-1'>{text1}</h5>
            <div className="grid grid-cols-2 gap-1 mb-2">
                <h6 className='text-[#C4C4C4] text-[24px] font-poppins font-normal'>{text2}</h6>
                <h6 className='text-black text-[24px] font-poppins font-normal'>{text3}</h6>
            </div>
        </div>
    </div>
  )
}

export default Card