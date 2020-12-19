import React from "react";
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export function HeaderContainer({}){
    return(
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} />
                <Header.ButtonLink></Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}