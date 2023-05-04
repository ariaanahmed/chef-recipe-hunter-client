import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';
import { sendEmailVerification, updateProfile } from 'firebase/auth';

const Registration = () => {

    const [message, setMessage] = useState('')

    const { createUser } = useContext(AuthContext)

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, password, photoURL)

        if (password.length < 6) {
            console.log('at least 6 character')
        }

        createUser(email, password).then((result) => {
            const newUser = result.user;
            console.log(newUser)
            setMessage('Signed up successfully');
            updateUserProfile(result.user, name, email, photoURL);
            sendVerification(result.user)
            form.reset();
        }).catch((error) => {
            setMessage(error.message)
        })
    }

    const updateUserProfile = (user, name, email, photoURL) => {
        updateProfile(user, {
            displayName: name,
            email : email,
            photoURL : photoURL,
        }).then(()=> {}).catch((error) => {
            setMessage(error.message)
        })

    }

    const sendVerification = (user) => {
        sendEmailVerification(user).then(() => {
            alert('verify your email');
            return
        })
    }

    return (
        <Form onSubmit={handleRegistration} className='w-25 mx-auto border p-3 mt-5 rounded'>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" name='name' required placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" name='email' required placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Control type="text" name='photoURL' required placeholder="Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" name='password' required placeholder="Password" />
            </Form.Group>
            <Button variant="primary w-100" type="submit">Sign Up</Button>
            <small>Already have an account? <Link to="/login">Login</Link></small>
            <p className='fw-semibold text-secondary'>{message}</p>
        </Form>
    );
};

export default Registration;