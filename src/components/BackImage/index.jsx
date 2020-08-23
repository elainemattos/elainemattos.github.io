import React from 'react'
import styled from 'styled-components'
import back from '../../assets/images/back.svg'

const Image = styled.img`
  height: 25px;
  width: 25px;

  margin-right: 5px;
  filter: ${({ theme }) => theme.filter};

  @media (max-width: 768px) {
    position: relative;
    top: -15px;
  }
`

export const BackImage = () => <Image src={back} alt="go back home" />
