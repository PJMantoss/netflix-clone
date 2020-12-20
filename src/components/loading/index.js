import React from 'react';
import { ReleaseBody, Spinner, Lockbody, Picture } from './styles/loading';


export default function Loading({ src, ...restProps }){
    return <Spinner {...restProps}>
            <Lockbody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
}

Loading.ReleaseBody = function LoadingReleaseBody(){
    return <ReleaseBody />
}