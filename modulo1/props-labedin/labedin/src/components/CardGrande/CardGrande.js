import React from 'react';
import styled from 'styled-components';

const BigCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;

const BigCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;

`;


const Img = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

const H4 = styled.h4`
    margin-bottom: 15px;
`;

function CardGrande(props) {
    return (
        <BigCard>
            <Img src={ props.imagem } alt=""/>
            <BigCardDiv>
                <H4>{ props.nome }</H4>
                <p>{ props.descricao }</p>
            </BigCardDiv>
        </BigCard>
    )
}

export default CardGrande;