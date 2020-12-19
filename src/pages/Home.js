import React from 'react';
import { OptForm, Feature } from '../components'
import {JumbotronContainer} from '../containers/Jumbotron';
import { FooterContainer } from '../containers/Footer';
import { FaqsContainer } from '../containers/Faqs';
import { HeaderContainer } from '../containers/Header';

export default function Home(){
    return(
        <>
            <HeaderContainer>
                <OptForm>
                    <Feature>
                        <Feature.Title>Unlimited Films, TV Programmes and More.</Feature.Title>
                        <Feature.SubTitle>Watch anywhere. Cancel at anytime</Feature.SubTitle>
                    </Feature>
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