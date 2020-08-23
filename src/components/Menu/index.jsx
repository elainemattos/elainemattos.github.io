import styled from 'styled-components'
import { darken } from 'polished'

export const Menu = styled.div`
  height: 40px;
  padding-top: 5px;
  width: 80vw;
  background-color: ${props => props.color};

  &:hover {
    background-color: ${props => darken(0.1, props.color)};
  }
`
