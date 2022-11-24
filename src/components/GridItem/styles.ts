import styled from "styled-components";

type ContainerProps = {
    showBackGround: boolean;
};

type Opacidade = {
    opacity?: number,
};

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.showBackGround ? '#1550ff' : '#E2E3E3'};
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Icon = styled.img<Opacidade>`
    opacity: ${props=> props.opacity? props.opacity : 1};
    width: 40px;
    height: 40px;
`;