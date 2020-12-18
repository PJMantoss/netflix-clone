import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`;

export const Item = styled.div`
    color: white;
    margin-bottom: 10px;

    &:first-of-type {
        margin-top: 3em;
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin: 0 0 8px 0;
    color: white;
    text-align: center;

    @media (max-width: 600px){
        font-size: 35px;
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 26px;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em;
    user-select: none;
    align-items: center;
`;

export const Body = styled.body`
    max-width: 1200px;
    font-size: 26px;
    line-height: normal;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em;
    user-select: none;
    align-items: center;

    @media(max-width: 600px){
        font-size: 16px;
        line-height: 22px;
    }
`;