import React from 'react'
import styled from 'styled-components'
import { StyledLink, Fade } from '../shared'

import { Title } from '../Title'
import { Menu } from '../Menu'

const Container = styled.div`
  transform: rotate(-30deg);
  transition: transform 300ms ease-in-out;
  animation: ${Fade} 1s linear;
`

const Home = () => {
  return (
    <Container>
      <Title>ELAINE M.</Title>
      <div>
        <Menu color={'#d72e34'}>
          <StyledLink to="/about"> Sobre</StyledLink>
        </Menu>
        <Menu color={'#6fb32e'}>
          <StyledLink to="/portfolio"> Portfolio</StyledLink>
        </Menu>
        <Menu color={'#1b87a9'}>
          <StyledLink to="/contact"> Contato</StyledLink>
        </Menu>
      </div>
    </Container>
  )
}

export default Home
