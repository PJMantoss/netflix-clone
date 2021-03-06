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
    opacity: 1;
    background: transparent;
    border: 0;
    cursor: pointer;

    &:before,
    &:after {
        position: absolute;
        left: 10px;
        top: 0;
        content: ' ';
        height: 22px;
        width: 2px;
        background: #fff;
    }

    &:hover {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e50914;
    color: #fff;
    border-color: #ff0a16;
    width: 115px;
    height: 45px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    padding-left: 0;

    &:hover {
        transform: scale(1.05);
        background: #ff0a16;
    }
`;