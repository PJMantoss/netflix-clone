import React, { useState } from 'react';
import { Header } from '../components';
import * as ROUTES from './constants/routes';
import { FirebaseContext } from './context/firebase';
import { FooterContainer } from '../containers/Footer';
import { selectProfileContainer } from './Profiles';

export function BrowseContainer(){
    const [profile, setProfile] = useState({});

    const user = {
        displayName: "Carl",
        photoURL: "1"
    }

    return profile.displayName ? (
        <>
           <p>Browse Container</p>
           <FooterContainer>
        </>
    ) : (<SelectProfileContainer />)
}