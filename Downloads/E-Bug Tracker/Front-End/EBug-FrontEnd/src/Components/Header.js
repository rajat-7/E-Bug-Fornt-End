import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">EBug Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link active" to="/about">About</Link>
                        <Link className="nav-link active" to="/ViewBugs">Admin</Link>
                        <Link className="nav-link active" to="/reportBugs">Customer</Link>
                        <Link className="nav-link active" to="/viewbugsStaff">staff</Link>

                    </Nav>
                    <Form className="d-flex">

                    <Link to="/login"> <Button variant="primary">Login</Button></Link>
                    <br></br>
                    <Link to="/signup"> <Button variant="primary">SignUp</Button></Link>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header