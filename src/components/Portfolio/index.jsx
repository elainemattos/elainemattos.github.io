import React from 'react'
import { SpacedTitle, StyledLink } from '../shared'
import SubMenu from '../SubMenu'

const Portfolio = () => {
  return (
    <>
      <SpacedTitle>
        <StyledLink to="/">🡠</StyledLink> Portfolio
      </SpacedTitle>
      <SubMenu />
    </>
  )
}

export default Portfolio
