import React from 'react'
import Container from '../Container'
import Image from '../Image'
import dhongi from '../../assets/dhongi.png'
import Flex from '../Flex'
import Subheading from '../Subheading'
import Paragraph from '../Paragraph'
import Counter from '../Counter'

const BestFashion = () => {
  return (
    <section className='pt-[130px] pb-[335px]'>
        <Container>
           <Flex>
            <div className="relative w-1/2">
            <Image src={dhongi} />
            <Counter className='absolute  z-[-1] bottom-[-250px] right-[-105%]'/>
            </div>
           <div className='pt-[71px] ps-[124px] w-1/2'>
                <Subheading text="Best Fashion Since 2010" className="font-frank mb-[63px]"/>
                <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. " className="text-[24px] font-semibold pe-[80px]"/>
                
           </div>
           </Flex>
        </Container>

    </section>
  )
}

export default BestFashion