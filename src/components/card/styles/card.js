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
    margin: 0 auto;
    padding: 10px;
`;

export const Meta = styled.div`
    display: flex;
    position: absolute;
    background: #0000008f;

`;

export const Image = styled.img`
    border: 0;
    width: 100%;
    height: auto;
    max-width: ;
    margin: 0;
    padding: 0;
    cursor: pointer;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-right: 5px;
    cursor: pointer;
    transition: transform 0.2;

    &:hover {
        transform: scale(1.3);
        z-index: 99;
    }

    @media(min-width: 1200px){
        &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
            display: block;
            z-index: 100;
        }
    }

    &:first-of-type {
        margin-left: 56px;

        @media(max-width: 1000px){
            margin-right: 30px;
        }
    }
`;

export const FeatureText = styled.p`
    color: #fff;
    font-size: 18px;
    font-weight: ${({ fontWeight }) => (fontWeight === "bold" ? "bold" : "normal")};
    margin: 0;

    @media(max-width: 800px){
        line-height: 22px;
    }
`;

export const Feature = styled.div`
    display: flex;
    flex-direction: row;
    background: url(${({ src }) => src});
    background-size: contain;
    background-color: #000;
    background-repeat: no-repeat;

    @media(max-width: 1000px){
        height: auto;
        background-size: auto;

        ${Title}{
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
        }

        ${FeatureText}{
            font-size: 14px;
        }
    }

`;

export const Content = styled.p`
    margin: 56px;
    max-width: 500px;
    line-height: normal;

    @media(max-width: 1000px){
        margin: 30px;
        max-width: none;
    }
`;

export const FeatureClose = styled.button`
    color: #fff;
    position: absolute;
    background: transparent;
    border: 0;
    top: 20px;
    right: 20px;
    cursor: pointer;

    img {
        filter: brightness(0) invert(1);
        width: 24px;
    }
`;

export const FeatureTitle = styled(Title)`
    margin-left: 0;
`;

export const Maturity = styled.div`
    background: ${({ rating }) => (rating => 15 ? "red" : "green")};
    border-radius: 15px;
    width: 20px;
    padding: 5px;
    margin-right: 10px;
    text-align: center;
    color: white;
    font-size: 12px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);

`;