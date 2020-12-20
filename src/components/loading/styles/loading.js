import styled from 'styled-components';

export const Spinner = styled.div``;

export const Lockbody = createGlobalStyle`
    overflow: hidden;
`;

export const ReleaseBody = createGlobalStyle`
    overflow: visible;
`;

export const Picture = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -22px;
`;