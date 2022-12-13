import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
           </Nav>
      <Link className='btn btn-outline-primary' to="/users/add">Add User</Link>

        </Container>
      </Navbar>
      
      </div>
  )
}

export default Header;