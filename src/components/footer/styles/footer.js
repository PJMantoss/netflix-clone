import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-width: 1000px;
    flex-direction: column;
    padding: 70px 56px;
    margin: auto;

    @media(max-width: 600px){
        padding: 60px 30px;
    }
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 15px;

    @media(max-width: 660px){
        
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Link = styled.a``;

export const Title = styled.p``;

export const Text = styled.p``;

export const Break = styled.div``;