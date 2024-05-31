import { Container, Nav, Navbar } from 'react-bootstrap'
import './Header.css'

export const Header = () => {
  return (
    <header data-testid='header' id='header'>
      <Navbar expand="lg" className="bg-body-tertiary" >
        <Container fluid>
          <Navbar.Brand href="#home">M|A Architecs</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#service">Services</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#ourteams">Our-Team</Nav.Link>
              <Nav.Link href="#testimonials">Our-Clients</Nav.Link>
              <Nav.Link href="#contact-us">Contact-us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
