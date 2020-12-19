import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` :
    '../images/misc/home-bg.jpg')}) top left / cover no-repeat;

    @media(max-width: 1100px){
        ${({ dontShowOnSmallViewport }) => dontShowOnSmallViewport && `background: none`}
    }
`;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px){
        margin: 0 30px;
    }
`;

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
`;

export const ButtonLink = styled(ReachRouterLink)``;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media(min-width: 1449px){
        height: 45px;
        width: 167px;
    }
`;