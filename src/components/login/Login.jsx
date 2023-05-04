import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';

const Login = () => {

    const [message, setMessage] = useState('')
    const {signIn} = useContext(AuthContext);

    const hanldeLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password).then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
            setMessage('logged in successfully')
        }).catch((error) => {
            setMessage(error.message)
        })

    }

    return (
        <div>
            <Form onSubmit={hanldeLogIn} className='w-25 mx-auto border p-3 mt-5 rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Button variant="primary w-100" type="submit">Login</Button>
                <small>New to site? <Link to="/registration">Register</Link></small>
                <p className='fw-semibold text-secondary'>{message}</p>
            </Form>
        </div>
    );
};

export default Login;