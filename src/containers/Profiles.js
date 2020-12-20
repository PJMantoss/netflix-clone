import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from './constants/routes';


export function SelectProfileContainer({}){
    return(
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo></Header.Logo>
                </Header.Frame>
            </Header>

            <Profiles></Profiles>
        </>
    )
}