import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";


const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut().then(() => { }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <Container fluid>
            <Navbar expand="lg" className='border-bottom bg-light'>
                <Navbar.Brand>Assignment 10</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-lg-5 gap-3 d-lg-flex align-items-lg-center">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'active fw-bold text-decoration-none text-danger' : 'fw-bold text-decoration-none'}>Home</NavLink>
                        <NavLink to='/blogs' className={({ isActive }) => isActive ? 'active fw-bold text-decoration-none text-danger' : 'fw-bold text-decoration-none'}>Blogs</NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'active fw-bold text-decoration-none text-danger' : 'fw-bold text-decoration-none'}>About</NavLink>
                        <NavLink className='text-decoration-none' to='/login'>
                            <Button className='fw-bold'>Login</Button>
                        </NavLink>

                        {
                        user ?
                            <div>
                                <img title={user.displayName} style={{width: '40px', height: '40px', borderRadius: '50%'}} className='w-25 img-fluid rouned-circle' src={user.photoURL} alt="profile-pic" />
                                
                                <Button variant='btn btn-danger' style={{marginLeft: '10px'}} onClick={handleLogOut}>Logout</Button>
                            </div>
                            :
                            <span> <FaUserCircle style={{width: '40px', height:'40px'}} /> </span>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </Container>
    );
};

export default Header;