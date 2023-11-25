import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Image from '../Image'
import mothel from '../../assets/banner.png'
import Paragraph from '../Paragraph'
import Button from '../Button'

const Banner = () => {
  return (
    <section className='bg-banner py-[130px]'>
        <Container>
            <Flex>
                <div className="w-1/2">
                <Heading  text='Find The Best Fashion Style For You' className="pe-32"/>
                <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. ' className='text-[22px] font-normal pe-32 mt-10'/>
                <Button className='bg-black py-[25px] px-[91px] text-white mt-[76px]' text='SHOP NOW'/>
                </div>
                <div className="w-1/2 text-end">
                    <Image src={mothel} className='inline-block'/>
                </div>
            </Flex>
        </Container>

    </section>  
  )
}

export default Banner