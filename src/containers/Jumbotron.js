import React from 'react';
import jumboData from '../fixtures/jumbo.json';
import Jumbotron from '../components/jumbotron';

export default JumbotronContainer(){
    return(
        <Jumbotron.Container>
            <Jumbotron.Title>Big Hello</Jumbotron.Title>
            <Jumbotron.SubTitle>Small Hello</Jumbotron.SubTitle>
        </Jumbotron.Container>
    )
}