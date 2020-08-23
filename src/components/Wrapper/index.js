import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import Work from '../Work'

const StyledContainer = styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  height: 100vh;
`

const Wrapper = () => {
  return (
    <StyledContainer>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </StyledContainer>
  )
}

export default Wrapper
