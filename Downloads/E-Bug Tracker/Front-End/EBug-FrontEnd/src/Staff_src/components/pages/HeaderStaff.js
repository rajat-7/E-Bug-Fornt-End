import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap';
import '../../../Components/FooterPage.css';

const HeaderStaff = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home"><h3>Staff Portal</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <Form className="d-flex">
              <Link className="nav-link active link" to="/remedyStaff"><h5>Send Remedy</h5></Link>

              <Link className="nav-link active link" to="/viewbugsStaff"><h5>View Assigned Bugs</h5></Link>
              <Link className="nav-link active link" to="/assigntaskStaff"><h5>Assign Task</h5></Link>

              <Link className="nav-link active link" to="/login">
                <button className="btn btn-outline-danger" type="submit"><h5>Log Out</h5></button>
              </Link>

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <form className="d-flex">


      </form>
    </div>



  );
}

export default HeaderStaff;