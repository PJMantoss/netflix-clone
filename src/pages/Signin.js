import React, { useState } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/Header';

export default function Signin(){
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');

    const handleChange = () => {
        //call in firebase to handle authentication
        //if there's an error, populate the error state
    }

    return(
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleChange}>
                    <Form.Input 
                        onChange={() => setEmailAddress(target.value)} 
                        value={emailAddress} 
                        placeholder={} 
                    />
                </Form.Base>
            </Form>
        </HeaderContainer>
    )
}