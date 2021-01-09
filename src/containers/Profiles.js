import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';


export function SelectProfileContainer({ user, setProfile }){
    return(
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo 
                        to={ROUTES.HOME} 
                        src={process.env.PUBLIC_URL + "/images/misc/logo.svg"} 
                        alt="Netflix" 
                    />
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title>Who is watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.Item 
                       onClick={() => setProfile({
                           displayName: user.displayName,
                           photoURL: user.photoURL
                       })} 
                    >
                        <Profiles.Picture src={process.env.PUBLIC_URL + user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.Item>
                </Profiles.List>
            </Profiles>
        </>
    )
}