import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from './image.png';
import BootstrapCarousel from './BootstrapCarousel'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>

<Navbar.Brand>
          <img src={logo} width="40px" height="40px" />{' '}
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
          <Nav.Link href="#about-us">About Us</Nav.Link>
            <NavDropdown title="Academics">
              <NavDropdown.Item href="#academics/results">Results</NavDropdown.Item>
              <NavDropdown.Item href="#academics/scheduler">Schedule</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#blog">Blog</Nav.Link>

            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <BootstrapCarousel/>
    </div>
  );
}

export default App;

