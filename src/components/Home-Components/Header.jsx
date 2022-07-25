import React, { useState } from 'react'
import {Navbar, 
        NavbarBrand, 
        NavbarToggler, 
        Collapse, 
        Nav,
        NavItem, 
        // NavLink, 
        
     
      } from 'reactstrap'

import {  NavLink } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
  <Navbar
    color="dark"
    dark
    expand="md"
    fixed="top"
    full
    light
  >
    <NavbarBrand className='dk pl' href="/">
      Heart<span className='sec-name'>Fashion</span>
    </NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav
        className="ml-auto"
        navbar
      >
        <NavItem>
          <NavLink className='nav-link' to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='nav-link' to="/about">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='nav-link' to="/catalog">
            Catalog
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>
  )
}



export default Header