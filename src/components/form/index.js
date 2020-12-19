import React from 'react';
import { Container, Input, Button } from './styles/form';

export default function Form({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Form.Input = function FormInput({ ...restProps }){
    return <Input {...restProps}/>
}

Form.Button = function FormButton({ children, ...restProps }){
    return <Button {...restProps}>{}</Button>
}