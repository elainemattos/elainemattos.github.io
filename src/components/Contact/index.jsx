import React from 'react'
import { SpacedTitle, StyledLink } from '../shared'
import SubMenu from '../SubMenu'
import { BackImage } from '../BackImage'

const Contact = () => {
  return (
    <>
      <SpacedTitle>
        <StyledLink to="/">
          <BackImage />
        </StyledLink>
        Contact
      </SpacedTitle>
      <SubMenu />
    </>
  )
}

export default Contact
