import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 80%;
`;

export const Title = styled.h1`
    font-size: 48px;
    font-weight: 500;
    color: #fff;
    text-align: center;
    width: 100%;
`;

export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
`;

export const Item = styled.li``;

export const Name = styled.p`
    font-size: 16px;
    color: #808080;
    text-overflow: ellipsis;

    &:hover {
        font-weight: bold;
        color: #e5e5e5;
    }
`;

export const Picture = styled.img``;