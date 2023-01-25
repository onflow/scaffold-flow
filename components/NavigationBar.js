import * as fcl from '@onflow/fcl'
import useCurrentUser from '../hooks/useCurrentUser'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Button } from 'react-bootstrap'

export default function NavigationBar() {
  const user = useCurrentUser()
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">BlockTalk</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/mints">Mint</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {!user.loggedIn && <Button onClick={fcl.authenticate}>Log In With Wallet</Button>}
            {user.loggedIn && <Button onClick={fcl.unauthenticate}>Log Out Of Wallet</Button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}