import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleLogo from '../../../Images/Logo/googleLogo.png';

const SignUp = () => {
    const [authUser, loading, ] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const [
        createUserWithEmailAndPassword,
        user,
        
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    

    


   
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    if (authUser) {
        navigate(from, { replace: true });
    }
    const handleToSubmit = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your Password are not match');
            return;
        }
        if(password.length < 6){
            setError('Your password is short');
            return;
        }
        
        createUserWithEmailAndPassword(email, password);
         alert('send email')
    }
    const navigateToLogin = () => {
        navigate('/register')
    }    
    return (
        <div>

            <div className='w-50 mx-auto'>
                <h2 className='text-success mt-2 text-center'>Please Register!</h2>
                <Form onSubmit={handleToSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control className='input-field' type="text" name='name' placeholder="name " required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='input-field' onBlur={handleEmailBlur} type="email" name='email' placeholder="Enter email" required/>
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='input-field' onBlur={handlePasswordBlur} type="password" name='password' placeholder="Password"required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control className='input-field' onBlur={handleConfirmPasswordBlur} type="password" name='confirmPassword' placeholder="confirmPassword" required/>
                    </Form.Group>

                    <p style={{color: 'red'}}>{error}</p>
                    <Button className='input-field field-color' style={{width:  '100%', padding: '10px'}} variant="primary" type="Register">
                        Register
                    </Button>
                </Form>
                <p>Already have an account? <Link to={'/login'} className='text-primary text-decoration-none' onClick={navigateToLogin}>Please Login</Link></p>
                <div>
                    <p onClick={() => signInWithGoogle()} className='social-media-container'><img  height={32} src={googleLogo} alt="" /> <small>Continue With Google</small></p>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;