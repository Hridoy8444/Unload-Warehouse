import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Unload Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/manage">Manage Item</Nav.Link>
                            <Nav.Link as={Link}  to="/additem">Add Item</Nav.Link>
                            <Nav.Link as={Link} to="/myitem">My Item</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            {
                                user ? 
                                <Nav.Link as={Link} onClick={handleLogOut} to="/login">logout</Nav.Link>
                                :
                                <Nav.Link as={Link} to="/login">login</Nav.Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;