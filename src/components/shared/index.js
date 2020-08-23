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
  color: ${({ theme }) => theme.text};
`
