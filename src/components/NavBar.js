import React from 'react'
import FilterLink from './FilterLink'
import { Navbar, NavItem } from 'react-materialize'

const NavBar = () => (
  <div>
    <h1>Postele</h1>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet" />
    <div class="nav-wrapper" className="container">
      <Navbar>
        <a class="left" fontSize="large">Postele invites a premium digital Post-it experience</a>
        <div id="nav-mobile" class="right hide-on-med-and-down">
          <NavItem><FilterLink>The Lot</FilterLink></NavItem>
          <NavItem><FilterLink>Concluded</FilterLink></NavItem>
          <NavItem><FilterLink>Underway</FilterLink></NavItem>
        </div>
      </Navbar>
    </div>
  </div>
)

export default NavBar
