import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
    margin-top: 20px;

    @media(max-width: 900px){
        flex-direction: column;
        align-items: center;
    }
`;

export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    border: 0;
    box-sizing: border-box;
    padding: 10px;
    height: 70px;
`;

export const Button = styled.input`
    display: flex;
    align-items: center;
    height: 70px;
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0 32px;
    font-size: 26px;
    border: 0;
    cursor: pointer;

    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 24px;

        @media(max-width: 900px){
            width: 16px;
        }
    }

    &:hover{
        background: #f40612;
    }
`;

export const Text = styled.p``;