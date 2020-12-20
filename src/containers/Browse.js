import React, { useState, useContext } from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from './Footer';
import { SelectProfileContainer } from './Profiles';

export function BrowseContainer(){
    //initialize state
    const [category, setCategory] = useState(series)
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

    const user = {
        displayName: "Carl",
        photoURL: "1"
    }

    return profile.displayName ? (
          <><p>Browse Container</p>
          <FooterContainer />
          </>) 
          : (<SelectProfileContainer user={user} setProfile={setProfile} />)
}