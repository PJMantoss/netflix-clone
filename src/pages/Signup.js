import React, { useState } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import * as ROUTES from '../constants/routes';

export default function Signup(){
    //states
    const [firstName, setFirstName] = useSate('');
    const [emailAddress, setEmailAddress] = useSate('');
    const [firstName, setFirstName] = useSate('');
    const [firstName, setFirstName] = useSate('');

    //form validation
    const isInvalid = firstName === '' | emailAddress === '' | password === '';
    return(
        <>
            <HeaderContainer></HeaderContainer>
        </>
    )
}