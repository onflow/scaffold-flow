import * as fcl from '@onflow/fcl'
import useCurrentUser from '../hooks/useCurrentUser'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useSession, signOut } from 'next-auth/react'

export default function NavigationBar() {
  const user = useCurrentUser()
  const session = useSession()
  const twitterUser = session?.data?.user

  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">BlockTalk</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/mints">Mint / Post</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <span>{user.loggedIn ? user?.addr : 'Login'}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {!user.loggedIn && <Dropdown.Item onClick={fcl.authenticate}>Log In With Wallet</Dropdown.Item>}
              {user.loggedIn && <Dropdown.Item onClick={fcl.unauthenticate}>Log Out Of Wallet</Dropdown.Item>}
              {twitterUser && 
                <>
                  <NavDropdown.Divider />
                  <Dropdown.Item onClick={signOut}>Log Out Of Twitter</Dropdown.Item>
                </>
              }
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}