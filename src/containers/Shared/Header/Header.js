import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='header-style' >
                    <Link to={'/home'}>Home</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={'/details'}>Details</Link>
                            <Link to={'/manageInventories'}>ManageInventories</Link>
                            <Link to={'/addItems'}>Add Items</Link>
                            <Link  to={'/myItems'}>My Items</Link>
                        </Nav>
                        <Nav>
                            <Link to={'/blogs'}>Blogs</Link>
                            <Link to={'/login'}>Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;