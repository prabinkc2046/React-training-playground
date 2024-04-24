import React from 'react';
import SocialIcons from './SocialIcons';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';
export default function Footer() {
  return (
    <StyledFooter>
       <Container>
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates?
            </li>
            <li>
              +61-473-654-956
            </li>
            <li>
              pkmiracle36@gmail.com
            </li>
          </ul>

          <ul>
            <li>
              About us
            </li>
            <li>
              What we do
            </li>
            <li>
              FAQ
            </li>
          </ul>

          <ul>
            <li>
              Career
            </li>
            <li>
              Blog
            </li>
            <li>
              Contat Us
            </li>
          </ul>

          <ul>
            {/* social icons */}
          </ul>

          <SocialIcons />

        </Flex>

        
        <p>&copy; 2021 Hurdel, All Right Reserved</p>
       </Container>
    </StyledFooter>
  )
}
