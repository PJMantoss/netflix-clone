import React from 'react';
import {Link as ReachRouterLink} from 'react-router-dom';
import {  } from './styles/header';

export default function Header({ bg = true, children, ...restProps }){
    return(
        bg ? <Background {...restProps}>{children}</Background> : children
    )
}