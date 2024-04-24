import React from 'react';
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Button } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';
export default function Header() {
  return (
    <StyledHeader>
        <div>
            <Nav>
                <Logo  src='./images/logo.jpeg' alt="" />
                <Button bg="#fff" color="black">Try it for free</Button>
            </Nav>

            <Flex>
                <div>
                <h1>Hello world guys</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos saepe distinctio porro ea numquam temporibus doloribus consectetur debitis harum quibusdam iste earum praesentium nobis nam sint cum illo eligendi laboriosam, quos eum dolores! Rem iusto quam cum officia beatae eum aliquam, repellat ea voluptatum id eveniet? Eveniet, doloribus. Dolorum, natus.</p>
                
                <Button bg="#ff0099" color='#fff'>
                    Get started for free
                </Button>

                <Image src="./images/logo.jpeg"/>
                </div>
            </Flex>
        </div>
    </StyledHeader>
  )
}
