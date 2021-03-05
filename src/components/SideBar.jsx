import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const SideBar = () =>{
    return(
    <div>
    <Button variant="outline-secondary" block>All</Button>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" href="#social">Social Innovation</Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#social">Social Innovation</Nav.Link>
            <Nav.Link href="#features">Template 1</Nav.Link>
            <Nav.Link href="#pricing">Template 2</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
    )
}

export default SideBar;