import React from 'react';
import { Container, Title, User, List, Picture, Name } from './styles/profiles';

export default function Profiles({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }){
    return <Title {...restProps}>{children}</Title>
}

Profiles.User = function ProfilesUser({ children, ...restProps }){
    return <User {...restProps}>{children}</User>
}