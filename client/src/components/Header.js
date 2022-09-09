import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../Store';


function BasicExample() {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn);
const dispatch = useDispatch();

  return (
    
    <Navbar bg="light" expand="lg" className='mt-2'>
      <Container fluid>
        <Navbar.Brand href="/">STUDYPLANNER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLoggedIn && <Nav.Link href="/">HOME</Nav.Link>}
            {isLoggedIn && <Nav.Link href="/studysessions">STUDYSESSIONS</Nav.Link>}
            {isLoggedIn && <Nav.Link href="/createsessions">CREATE SESSIONS</Nav.Link>}
            
      
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav >
          { !isLoggedIn && <Nav.Link href="/login">LOGIN</Nav.Link>}
          {isLoggedIn &&<Nav.Link onClick={()=>dispatch(authActions.logout())} >LOGOUT</Nav.Link> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
  );
}

export default BasicExample;