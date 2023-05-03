import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <Container>
            <Navbar expand="lg" className='border-bottom mb-lg-5'>
                <Navbar.Brand>Assignment 10</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-lg-5 gap-3 d-lg-flex align-items-lg-center">
                        <NavLink to='/' className={({isActive }) => isActive ? 'active fw-bold text-decoration-none text-danger' : 'fw-bold text-decoration-none' }>Home</NavLink>
                        <NavLink to='/blogs' className={({isActive }) => isActive ? 'active fw-bold text-decoration-none text-danger' : 'fw-bold text-decoration-none'}>Blogs</NavLink>
                        <NavLink to='/about' className={({isActive }) => isActive ? 'active fw-bold text-decoration-none text-danger' : 'fw-bold text-decoration-none' }>About</NavLink>
                        <NavLink className='text-decoration-none' to='/login'>
                            <Button className='fw-bold'>Login</Button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </Container>
    );
};

export default Header;