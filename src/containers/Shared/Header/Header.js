import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='header-style' >
                    <Link className='link-title' to={'/home'}>Item Details</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='link-title' to={'/home'}>Item Details</Link>
                            <Link className='link-title' to={'/home'}>Item Details</Link>
                            <Link className='link-title' to={'/home'}>Item Details</Link>
                            <Link className='link-title' to={'/home'}>Item Details</Link>
                        </Nav>
                        <Nav>
                            <Link className='link-title' to={'/home'}>Item Details</Link>
                            <Link className='link-title' to={'/home'}>Item Details</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;