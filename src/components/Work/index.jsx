import React from 'react'
import styled from 'styled-components'
import { SpacedTitle, StyledLink, StyledText, StyledParagraph } from '../shared'
import SubMenu from '../SubMenu'
import { BackImage } from '../BackImage'

const StyledTitle = styled(StyledParagraph)`
  font-weight: bold;
`

const Date = styled(StyledParagraph)`
  font-weight: thin;
  font-size: 12px;
`

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

      <StyledText>
        <StyledTitle>BrainBoss</StyledTitle>
        <Date>AUGUST/2020 - CURRENT</Date>
        <StyledParagraph>Research and Development</StyledParagraph>
      </StyledText>

      <StyledText>
        <StyledTitle>Proativa</StyledTitle>
        <Date>AUGUST/2019 - APRIL/2020</Date>
        <StyledParagraph>Web Developer</StyledParagraph>
      </StyledText>

      <StyledText>
        <StyledTitle>Prognosys</StyledTitle>
        <Date>JULY/2019 - AUGUST/2019</Date>
        <StyledParagraph>Front-end / UX Intern</StyledParagraph>
      </StyledText>

      <StyledText>
        <StyledTitle>Codeminer42</StyledTitle>
        <Date>MARCH/2019 - MAY/2019</Date>
        <StyledParagraph>Front-end Intern</StyledParagraph>
      </StyledText>

      <StyledText>
        <StyledTitle>Woopi - Stefanini</StyledTitle>
        <Date>FEBRUARY/2018 -FEBRUARY/2019</Date>
        <StyledParagraph>Software Tester Intern</StyledParagraph>
      </StyledText>
    </>
  )
}

export default Work
