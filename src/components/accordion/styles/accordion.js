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
`;

export const Header = styled.header``;

export const Body = styled.body``;