import React, { useState } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/Header';

export default function Signin(){
    const [] = useState('');
    return(
        <HeaderContainer>
            <Form>
                <Form.Title></Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
            </Form>
        </HeaderContainer>
    )
}