import React from 'react';
import {JumbotronContainer} from '../containers/Jumbotron';
import { FooterContainer } from '../containers/Footer';
import { FaqsContainer } from '../containers/Faqs';
import { HeaderContainer } from '../containers/Header';

export default function Home(){
    return(
        <>
            <HeaderContainer>
                <OptForm>
                    <OptForm.Input placeholder="E-mail Address" />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Text>Ready to watch? Enter your e-mail to create or re-start your membership.</OptForm.Text>
                </OptForm>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}