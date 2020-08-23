import React from 'react'
import { SpacedTitle, StyledLink } from '../shared'
import SubMenu from '../SubMenu'
import { BackImage } from '../BackImage'

const Work = () => {
  return (
    <>
      <SpacedTitle>
        <StyledLink to="/">
          <BackImage />
        </StyledLink>
        Work
      </SpacedTitle>
      <SubMenu />
    </>
  )
}

export default Work
