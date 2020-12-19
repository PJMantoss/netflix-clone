import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
    margin-top: 20px;

    @media(max-width: 1000px){
        flex-direction: column;
        align-items: center;
    }
`;

export const Input = styled.input``;

export const Button = styled.input``;

export const Text = styled.p``;