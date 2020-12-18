import React from 'react';
import {  } from './styles/opt-form';

export function OptForm({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}