import React, { useState } from 'react';
import { Container, Inner, Body, Title, Header } from './styles/accordion';

export default function Accordion({ children, ...restProps }){
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }){
    return <Title>{children}</Title>
}

Accordion.Header = function AccordionHeader({ children, ...restProps }){
    return <Header>{children}</Header>
}

Accordion.Body = function AccordionBody({ children, ...restProps }){
    return <Body>{children}</Body>
}