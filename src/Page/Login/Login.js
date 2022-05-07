import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Login = () => {
    const [authUser, loading, ] = useAuthState(auth);

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
        if(!authUser){
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
        <div className='w-50 mx-auto'>
            <h2 className='text-success mt-2 text-center'>Please Login!</h2>
            <Form onSubmit>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='input-field'  type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='input-field'  type="password" placeholder="Password" required />
                </Form.Group>
                
                <Button className='input-field field-color' style={{ width: '100%', padding: '10px' }} variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            
           
           
        </div>
    );
};

export default Login;