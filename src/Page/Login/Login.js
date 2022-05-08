import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import googleLogo from '../../Images/Logo/googleLogo.png';
import loginPng from '../../Images/Login/loginPng.png'
import auth from '../../firebase.init';
import './login.css';

const Login = () => {
    const [authUser, loading,] = useAuthState(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();


    const [
        signInWithEmailAndPassword,
        user

    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth)


    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const navigateToRegister = () => {
        navigate('/register')
    }
    const handleToSubmit = event => {
        event.preventDefault();
        if (!authUser) {
            setError('Email & Password are not match')
        }

        signInWithEmailAndPassword(email, password);
    }
    if (authUser) {
        

        navigate(from, { replace: true });
    }
    const resetPassword = async (event) => {
        await sendPasswordResetEmail(email)
        toast('Sent email');
    }
    return (
        <div className='d-flex item-container'>
            <div>
                <img className='m-5' height={350} src={loginPng} alt="" />
            </div>
            <div  className='w-50 mx-auto login-container'>
                <h2 className='text-success mt-2 text-center'>Please Login!</h2>
                <Form onSubmit={handleToSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='input-field' onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='input-field' onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p style={{ color: 'red' }}>{error}</p>
                    <Button className='input-field field-color' style={{ width: '100%', padding: '10px' }} variant="primary" type="submit">
                        Login
                    </Button>
                </Form>

                <p className='text-center mt-2'>Forget Password? <button to={"/register"} className='text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
                <ToastContainer></ToastContainer>
                <p>New to Unload Warehouse? <Link to={'/signup'} className='text-primary text-decoration-none' onClick={navigateToRegister}>Please Register</Link></p>
                <div className='w-50 mx-auto'>
                    <p onClick={() => signInWithGoogle()} className='social-media-container'><img height={32} src={googleLogo} alt="" /> <small>Continue With Google</small></p>

                </div>

            </div>
        </div>
    );
};

export default Login;