import logo from './logo.svg';
import './App.css';
import Carouselos from "./components/Carouselos"
import Cardos from "./components/Cardos"
import Footeros from "./components/Footeros"
import './bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

function App() {
  return (
    <div className="">
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo} className="App-logo" style={{width: '100px', height: '30px'}} alt="logo" />
          Princewill Blog
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link eventKey={2} href="#contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carouselos />
    <Cardos />
    <Footeros />
    </div>
  );
}

export default App;
