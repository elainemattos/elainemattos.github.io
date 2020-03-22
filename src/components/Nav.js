import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => (
  <nav className="header">
    <NavLink activeClassName="active" exact to="/" className="header-home">
      HOME
    </NavLink>
    <NavLink activeClassName="active" to="/about" className="header-items">
      ABOUT
    </NavLink>
    <NavLink activeClassName="active" to="/contact" className="header-items">
      CONTACT
    </NavLink>
  </nav>
)
