import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import LinkContainer from 'react-router-bootstrap/LinkContainer'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = (e) => {
    e.preventDefault()
    console.log('logout')
  }
  return (
    <header>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Proshop</Navbar.Brand>
          </LinkContainer>

          <Nav className='ms-auto'>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <FaShoppingCart /> Cart
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link>
                  <FaUserAlt /> Signin
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
