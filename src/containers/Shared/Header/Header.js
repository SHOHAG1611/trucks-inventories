import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const SignOutHandler = () => {
        signOut(auth);
    }
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
                            <Link to={'/addItem'}>Add Item</Link>
                            <Link to={'/myItems'}>My Items</Link>
                        </Nav>
                        <Nav>
                            <Link to={'/blogs'}>Blogs</Link>
                            {
                                user ?
                                    <button className='btn btn-outline-primary' onClick={SignOutHandler}>SignOut</button>
                                    :
                                    <Link to='/login'>Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;