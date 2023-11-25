import React from 'react'
import Container from '../Container'
import Subheading from '../Subheading'
import Flex from '../Flex'
import Image from '../Image'
import model from '../../assets/c1.png'
import model2 from '../../assets/c2.png'
import model3 from '../../assets/c3.png'

const Collection = () => {
  return (
    <section className='pt-52 pb-24'>
        <Container>
            <Subheading className='text-center font-frank mb-[130px]' text='New Collection'/>
            <Flex className='justify-between'>
                <div className="relative">
                    <Image src={model}/>
                    <div className="absolute bg-white rounded-[10px] bottom-12 left-1/2 translate-x-[-50%] py-[10px] px-[110px] font-poppins text-[24px] font-normal">Sweater</div>
                </div>
                <div className="relative">
                    <Image src={model2}/>
                    <div className="absolute bg-white rounded-[10px] bottom-12 left-1/2 translate-x-[-50%] py-[10px] px-[110px] font-poppins text-[24px] font-normal">Jeans</div>
                </div>
                <div className="relative">
                    <Image src={model3}/>
                    <div className="absolute bg-white rounded-[10px] bottom-12 left-1/2 translate-x-[-50%] py-[10px] px-[110px] font-poppins text-[24px] font-normal">Basket</div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Collection