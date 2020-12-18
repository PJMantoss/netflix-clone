import React from 'react';
import {  } from './styles/opt-form';

export function OptForm({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

OptForm.Input = function OptFormInput({ ...restProps }){
    return <Input {...restProps} />
}

OptForm.Button = function OptFormButton({ children, ...restProps }){
    return(
        <Button {...restProps}>
            {children} <img src="./images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    )
}