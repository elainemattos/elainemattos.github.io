import React from 'react'
import { SpacedTitle, StyledLink } from '../shared'
import SubMenu from '../SubMenu'

const About = () => {
  return (
    <>
      <SpacedTitle>
        <StyledLink to="/">🡠</StyledLink> Sobre
      </SpacedTitle>
      <SubMenu />
    </>
  )
}

export default About
