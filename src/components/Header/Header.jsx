import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Navbar expand="lg" className='border-bottom mb-lg-5'>
                <Navbar.Brand>Assignment 10</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-lg-5 gap-3 d-lg-flex align-items-lg-center">
                        <Link className='text-decoration-none fw-bold' to='/'>Home</Link>
                        <Link className='text-decoration-none fw-bold' to='/blogs'>Blogs</Link>
                        <Link className='text-decoration-none' to='/login'>
                            <Button className='fw-bold'>Login</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </Container>
    );
};

export default Header;