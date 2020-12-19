import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` :
    '../images/misc/home-bg.jpg')}) top left / cover no-repeat;
`;

export const Container = styled.div``;

export const Link = styled.p``;

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