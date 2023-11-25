import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Subheading from '../Subheading'
import Paragraph from '../Paragraph'
import Button from '../Button'
import Card from '../Card'
import sweter from '../../assets/sweter.png'
import pant from '../../assets/pant.png'

const BestSeller = () => {
  return (
    <section className='bg-[#CFA485] pt-[56px] pb-[191px]'>
        <Container>
            <Flex>
                <div className="w-1/2">
                    <Subheading className='text-white font-frank mb-[43px]' text='Best Seller Product'/>
                    <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus." className='text-[24px] font-bold text-white pe-[180px] mb-[40px]'/>
                    <Button className='bg-black py-[25px] px-[91px] text-white mt-[76px]' text='Learn MORE'/>
                </div>
                <div className="flex gap-5">
                    <Card src={sweter} text1='Sweater Shirt'text2="$45.99" text3="$35.99"/>
                    <Card src={pant} text1='Pants fashion' text2="$55" text3="$44.99"/>
                </div>
            </Flex>
        </Container>

    </section>
  )
}

export default BestSeller