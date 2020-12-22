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

export const Text = styled.p`
    font-size: 10px;
    font-weight: bold;
    display: none;
    color: white;
    margin: 0 auto;
    line-height: normal;
`;

export const SubTitle = styled.p`
    font-size: 12px;
    font-weight: bold;
    display: none;
    color: white;
    margin: 0 auto;
    user-select: none;
`;

export const Group = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection === "row" ? "row" : "column")};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}` };
    ${({ margin }) => margin && `margin: ${alignItems}` };

    > ${Container}:first-of-type{
        @media(min-width: 1100px){
            margin-top: -150px;
        }
    }
`;

export const Entities = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Meta = styled.div``;

export const Image = styled.img``;

export const Item = styled.div``;

export const FeatureText = styled.p``;

export const Feature = styled.div``;

export const Content = styled.p``;

export const FeatureClose = styled.button``;

export const Maturity = styled.div``;

export const FeatureTitle = styled(Title)``;