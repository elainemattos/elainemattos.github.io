import React from 'react'
import { SpacedTitle, StyledLink, StyledText, StyledParagraph } from '../shared'
import SubMenu from '../SubMenu'
import { BackImage } from '../BackImage'

const About = () => {
  return (
    <>
      <SpacedTitle>
        <StyledLink to="/">
          <BackImage />
        </StyledLink>
        About
      </SpacedTitle>
      <SubMenu />

      <StyledText>
        <StyledParagraph>
          Hi, I am Elaine Mattos, a web developer from Sorocaba/Brazil.
        </StyledParagraph>
        <StyledParagraph>
          The greatest pleasure of my life is listen to music so I listen as
          much as I can, that's why coding is so fun to me.
        </StyledParagraph>
        <StyledParagraph>
          I also have aphantasia, so it's self explanatory my bad design :x
        </StyledParagraph>
        <StyledParagraph>
          Anyways... here's what got me going during this week!
        </StyledParagraph>
      </StyledText>
    </>
  )
}

export default About
