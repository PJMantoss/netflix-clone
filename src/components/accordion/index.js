import React, { useState } from 'react';
import { Container, Inner, Body, Title, Header } from './styles/accordion';

export default function Accordion({ children, ...restProps }){
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({}){
    return <Title></Title>
}