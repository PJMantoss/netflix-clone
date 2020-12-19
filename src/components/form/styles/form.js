import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 660px;
    background: rgba(0,0,0,0.75);
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    max-width: 450px;
    margin: auto auto 100px auto;
    padding: 60px 68px 40px;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
`;

export const Input = styled.input``;

export const Title = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 28px;
`;

export const Text = styled.h1`
    color: #737373;
    font-size: 16px;
    font-weight: 500;
`;

export const TextSmall = styled.h2``;

export const Link = styled(ReachRouterLink)``;

export const Submit = styled.button``;

export const Error = styled.div`
    background: #e87c03;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    margin: 0 0 16px;
    padding: 15px 20px;
`;