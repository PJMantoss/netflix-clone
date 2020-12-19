import React from 'react';
import {  } from './styles/form';

export default function Form({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}