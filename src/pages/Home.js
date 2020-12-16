import React from 'react';
import Jumbotron from '../components/jumbotron';

export default function Home(){
    return(
        <Jumbotron.Container>
            <Jumbotron.Title>Big Hello</Jumbotron.Title>
            <Jumbotron.SubTitle>Small Hello</Jumbotron.SubTitle>
        </Jumbotron.Container>
    )
}