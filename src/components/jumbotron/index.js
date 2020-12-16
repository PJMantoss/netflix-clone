import React from 'react';
import { Inner, Item, Container, Title, SubTitle, Image } from './styles/jumbotron'

export default function Jumbotron({children, direction = "row", ...restProps}){
    return(
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}