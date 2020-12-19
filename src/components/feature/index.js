import React from 'react';
import {  } from './styles/feature';
import { SubTitle } from '../jumbotron/styles/jumbotron';

export default function Feature({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Feature.Title = function FeatureTitle({ children, ...restProps }){
    return <Title {...restProps}>{children}</Title>
}

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }){
    return <SubTitle {...restProps}>{children}</SubTitle>
}