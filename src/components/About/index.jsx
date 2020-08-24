import React from 'react'
import {
  SpacedTitle,
  StyledLink,
  StyledText,
  StyledParagraph,
  GradientText,
} from '../shared'
import SubMenu from '../SubMenu'
import { BackImage } from '../BackImage'
import { Highlights } from '../Highlights'
import { LastSong } from '../LastSong'

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
          Hi, I am
          <GradientText> Elaine Mattos </GradientText>, web developer and
          computer science student from Sorocaba/Brazil.
        </StyledParagraph>
        <StyledParagraph>
          The greatest pleasure of my life is listen to music so I listen as
          much as I can, that's why coding is so fun to me.
        </StyledParagraph>
        <StyledParagraph>
          I also have aphantasia, so it's self explanatory my bad design :x
        </StyledParagraph>

        <Highlights
          userName={process.env.REACT_APP_API_USER}
          apiKey={process.env.REACT_APP_API_KEY}
        />

        <LastSong
          userName={process.env.REACT_APP_API_USER}
          apiKey={process.env.REACT_APP_API_KEY}
        />
      </StyledText>
    </>
  )
}

export default About
