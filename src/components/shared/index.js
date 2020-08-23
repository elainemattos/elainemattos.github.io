import styled, { keyframes } from 'styled-components'
import { Title } from '../Title'
import { NavLink } from 'react-router-dom'

export const Fade = keyframes`  
  from { opacity: 0.2; }
  to { opacity: 1; }
`

export const SpacedTitle = styled(Title)`
  padding: 10px 0;
  animation: ${Fade} 1s linear;
`
export const StyledLink = styled(NavLink)`
  font-size: 25px;
  font-family: 'Arimo', sans-serif;
  padding-left: 20px;
  color: #f1f1f1;

  @media (max-width: 768px) {
    position: relative;
    top: 15px;
    padding-left: 0px;
  }
`

export const MenuLinks = styled.div`
  font-size: 25px;
  font-family: 'Arimo', sans-serif;
  padding-left: 20px;
  color: #f1f1f1;

  @media (max-width: 768px) {
    position: relative;
    top: 15px;
  }
`

export const StyledThemeBtn = styled.button`
  position: absolute;
  bottom: 20px;
  right: 10px;
  padding: 10px;
  background-color: inherit;
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.text};
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
`

export const StyledText = styled.div`
  margin: 50px 20px;
  width: 60vw;
  font-size: 18px;

  @media (max-width: 768px) {
    margin: 20px;
    width: 80vw;
    font-size: 16px;
  }
`

export const StyledParagraph = styled.p`
  font-family: 'Karla', sans-serif;
  line-height: 1.4;
`
