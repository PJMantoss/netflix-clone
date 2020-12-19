import React, { useState } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/Header';

export default function Signin(){
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = (e) => {
        e.preventDefault();
        //call in firebase to handle authentication
        //if there's an error, populate the error state
    }

    const handleChange = () => {}

    return(
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignin} method="POST">
                    <Form.Input
                        type="email" 
                        onChange={({ target }) => setEmailAddress(target.value)} 
                        value={emailAddress} 
                        placeholder="Email" 
                    />

                    <Form.Input
                        type="password" 
                        onChange={({ target }) => setPassword(target.value)} 
                        value={password} 
                        autocomplete="off"
                        placeholder="Password" 
                    />

                    <Form.Submit disabled={false} type="submit">
                        Sign In
                    </Form.Submit>

                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign Up Now!</Form.Link>
                    </Form.Text>

                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
    )
}