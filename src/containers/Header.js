import React from "react";
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export function HeaderContainer({}){
    return(
        <Header>
            <Header.Frame></Header.Frame>
            {children}
        </Header>
    )
}