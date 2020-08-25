import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { darken } from 'polished'

const LittleLink = styled(NavLink)`
  height: 10px;
  padding: 0 5px;
  background-color: ${props => props.color};
  font-family: 'Arimo', sans-serif;
  color: #f1f1f1;

  .selected {
    background-color: ${props => darken(0.5, props.color)};
    font-size: 100px;
  }

  &[aria-current] {
    background-color: ${props => darken(0.3, props.color)};
  }
  :hover {
    background-color: ${props => darken(0.3, props.color)};
  }
`

const Container = styled.div`
  padding-left: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`

const SubMenu = () => {
  return (
    <Container>
      <LittleLink activeClassName="selected" to="/about" color={'#eec535'}>
        about
      </LittleLink>
      <LittleLink activeClassName="selected" to="/work" color={'#cd292a'}>
        work
      </LittleLink>
      <LittleLink activeClassName="selected" to="/contact" color={'#32287e'}>
        contact
      </LittleLink>
    </Container>
  )
}

export default SubMenu
