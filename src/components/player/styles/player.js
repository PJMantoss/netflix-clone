import styled from 'styled-components';

export const Container = styled.div``;

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    margin: 0 20px;
`;

export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: auto;

    video {
        height: 100%;
        width: 100%;
    }
`;

export const Close = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 22px;
    height: 22px;
    opacity: 0.3;
    
`;

export const Button = styled.button``;