import React from 'react'
import styled from 'styled-components'
import { Fade, MenuLinks } from '../shared'

import { Title } from '../Title'
import { Menu } from '../Menu'
import { Link } from 'react-router-dom'

const Container = styled.div`
  transform: rotate(-30deg);
  transition: transform 300ms ease-in-out;
  animation: ${Fade} 1s linear;
  width: 75vw;
  margin-left: 10vw;

  @media (max-width: 768px) {
    padding-top: 100px;
    margin-left: 10vw;
  }
`

const Home = () => {
  return (
    <Container>
      <Title>ELAINE MATTOS</Title>
      <div>
        <Link to="/about">
          <Menu color={'#eec535'}>
            <MenuLinks to="/about"> About</MenuLinks>
          </Menu>
        </Link>
        <Link to="/work">
          <Menu color={'#cd292a'}>
            <MenuLinks> Work</MenuLinks>
          </Menu>
        </Link>
        <Link to="/contact">
          <Menu color={'#32287e'}>
            <MenuLinks> Contact</MenuLinks>
          </Menu>
        </Link>
      </div>
    </Container>
  )
}

export default Home
