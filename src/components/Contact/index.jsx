import React from 'react'
import styled from 'styled-components'
import {
  SpacedTitle,
  StyledLink,
  StyledText,
  StyledParagraph,
  GradientText,
} from '../shared'
import SubMenu from '../SubMenu'
import { BackImage } from '../BackImage'
import { MediaImages } from '../../assets/images/Images'

const Icons = styled.img`
  height: 45px;
  width: 45px;
  margin-right: 10px;
`

const ImageBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`

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
      <StyledText>
        <StyledParagraph>
          Let's have a chat, You can find me at:
        </StyledParagraph>
      </StyledText>
      <ImageBox>
        {MediaImages.map(({ image, link, description }) => {
          return (
            <span key={description}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Icons className="home__images" src={image} alt={description} />
              </a>
            </span>
          )
        })}
      </ImageBox>
      <StyledText style={{ marginTop: '0px' }}>
        <StyledParagraph>
          Or send me an
          <a href="mailto:elainecmmattos@gmail.com">
            <GradientText> email.</GradientText>
          </a>
        </StyledParagraph>
      </StyledText>
    </>
  )
}

export default Contact
