import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../Store';
import { useNavigate } from 'react-router-dom';



function BasicExample() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div  >
      <Navbar expand="lg" className='pt-3'  i  >
        <Container fluid >
          <Navbar.Brand href="/"  id="navcolors" >STUDY-PLANNER</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto" >
              {isLoggedIn && <Nav.Link href="/"  id="navcolors" >HOME</Nav.Link>}
              {
                isLoggedIn &&
                <NavDropdown title="STUDY-SESSIONS" id="navcolors"  >
              <NavDropdown.Item  id="navcolors"  href="/curstudysessions">CURRENT</NavDropdown.Item>
              <NavDropdown.Divider  id="navcolors"  />
              <NavDropdown.Item  id="navcolors"  href="/upcomstudysessions">UPCOMING</NavDropdown.Item>
              <NavDropdown.Divider  id="navcolors"  />
              <NavDropdown.Item  id="navcolors"  href="/prevstudysessions">COMPLETED</NavDropdown.Item>
              
            </NavDropdown>
              }
              {isLoggedIn && <Nav.Link href="/createsessions"  id="navcolors" >CREATE-SESSIONS</Nav.Link>}

            </Nav>
            <Nav >
              {!isLoggedIn && <Nav.Link href="/login"  id="navcolors" >LOGIN</Nav.Link>}
              {isLoggedIn && <Nav.Link onClick={() => {
                dispatch(authActions.logout());
                navigate("/");
              }}  id="navcolors" >LOGOUT</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;