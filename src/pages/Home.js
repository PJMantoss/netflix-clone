import React from 'react';
import {JumbotronContainer} from '../containers/Jumbotron';
import { FooterContainer } from '../containers/Footer';
import { FaqsContainer } from '../containers/Faqs';
import { HeaderContainer } from '../containers/Header';

export default function Home(){
    return(
        <>
            <HeaderContainer>
                <p>Hello</p>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}