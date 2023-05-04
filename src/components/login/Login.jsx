import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, signInWithPopup, getAuth, GithubAuthProvider } from 'firebase/auth';
import app from '../../firebase/firebase.config';
const auth = getAuth(app)

const Login = () => {

    const [message, setMessage] = useState('')
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

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
            navigate(from, {replace: true});
        }).catch((error) => {
            setMessage(error.message)
        })

    }

const provider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const signInGoogle = () => {

    signInWithPopup(auth, provider).then((result) => {
        const loggedUserPopPup = result.user;
        console.log(loggedUserPopPup)
    }).catch((error) => {
        setMessage(error.message)
    })
}

const signInGitHub = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser)
    }).catch((error) => {
        console.log(error.message)
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

                <div className='d-flex gap-2'>
                    <Button onClick={signInGoogle} variant='outline border border-1 border-dark'><FaGoogle /> Google SignIn </Button>
                    <Button onClick={signInGitHub} variant='outline border border-1 border-dark'><FaGithub /> GitHub SignIn </Button>
                </div>
            </Form>
        </div>
    );
};

export default Login;