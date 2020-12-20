import React from 'react';
import { ReleaseBody, Spinner, Lockbody } from './styles/loading';


export default function Loading({ ...restProps }){
    return <Spinner {...restProps}>
        <Lockbody />
    </Spinner>
}

Loading.ReleaseBody = function LoadingReleaseBody(){
    return <ReleaseBody />
}