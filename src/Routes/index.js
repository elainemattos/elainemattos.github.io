import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'
import Home from '../components/Home'
import { Nav } from '../components/Nav'

const Routes = () => (
  <HashRouter basename="/">
    <div>
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </HashRouter>
)
export default Routes
