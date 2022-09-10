import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../Store';
import { useNavigate } from 'react-router-dom';


function BasicExample() {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn);
const dispatch = useDispatch();
const navigate = useNavigate();

  return (
    <div  >
    <Navbar  expand="lg" className='pt-3'   >
      <Container fluid >
        <Navbar.Brand href="/" style={{color:"#324e8f"}}>STUDY-PLANNER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            {isLoggedIn && <Nav.Link href="/" style={{color:"#324e8f"}}>HOME</Nav.Link>}
            {isLoggedIn && <Nav.Link href="/studysessions" style={{color:"#324e8f"}}>STUDY-SESSIONS</Nav.Link>}
            {isLoggedIn && <Nav.Link href="/createsessions" style={{color:"#324e8f"}}>CREATE-SESSIONS</Nav.Link>}
    
          </Nav>
          <Nav >
          { !isLoggedIn && <Nav.Link href="/login" style={{color:"#324e8f"}}>LOGIN</Nav.Link>}
          {isLoggedIn &&<Nav.Link onClick={()=>{dispatch(authActions.logout());
            navigate("/");}} style={{color:"#324e8f"}}>LOGOUT</Nav.Link> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default BasicExample;