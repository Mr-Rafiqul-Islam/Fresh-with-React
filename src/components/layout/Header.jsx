import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/Fresh.png'
import List from '../List'
import Button from '../Button'


const Header = () => {
  return (
    <nav className='bg-banner py-10'>
        <Container>
            <Flex>
                <div className="w-1/4">
                    <Image src={Logo} alt={Logo}/>
                </div>
                <div className="w-1/2">
                    <ul>
                        <Flex className='justify-evenly'>
                            <List menu_name='Man' href='#'/>
                            <List menu_name='Women' href='#'/>
                            <List menu_name='Kids' href='#'/>
                            <List menu_name='Collection' href='#'/>
                            <List menu_name='Trends' href='#'/>
                        </Flex>
                    </ul>
                </div>
                <div className="w-1/4">
                    <Flex className="justify-end gap-3">
                    <Button text="Login" className="px-[27px] py-[5px] border-[#FFD687] hover:border-[#FDBB57] duration-300 border-2 shadow-xl hover:bg-[#FDBB57]"/>
                    <Button text="Sign Up" className="px-[27px] py-[5px] border-[#FFD687] hover:border-[#FDBB57] border-2 hover:bg-[#FDBB57] duration-300 shadow-xl"/>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Header