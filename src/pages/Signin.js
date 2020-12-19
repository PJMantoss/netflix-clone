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
                        placeholder={} 
                    />
                </Form.Base>
            </Form>
        </HeaderContainer>
    )
}