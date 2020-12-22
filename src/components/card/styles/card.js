import styled from 'styled-components';

export const Title = styled.p`
    font-size: 2px;
    font-weight: bold;
    color: #e5e5e5;
    margin: 0 56px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-bottom: 50px;

    > ${Title} {
        @media(max-width: 1000px){
            margin-left: 30px;
        }
    }

    &:last-of-type{
        margin-bottom: 0;
    }
`;

export const Text = styled.p``;

export const SubTitle = styled.p``;

export const Group = styled.div``;

export const Entities = styled.div``;

export const Meta = styled.div``;

export const Image = styled.img``;

export const Item = styled.div``;

export const FeatureText = styled.p``;

export const Feature = styled.div``;

export const Content = styled.p``;

export const FeatureClose = styled.button``;

export const Maturity = styled.div``;

export const FeatureTitle = styled(Title)``;