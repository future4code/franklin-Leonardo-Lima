import React from 'react';
import styled from 'styled-components';

const SmallCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    font-size: 1rem !important;
    margin-bottom: 10px;
    height: 100px;
`;

const Img = styled.img`
    width: 40px;
    margin-right: 10px;
    border-radius: 50%;
`;

const P = styled.p`
    margin-left: 0.25rem;
`;

export function CardPequeno(props) {

    return (
        <>
            <SmallCard>
                <Img src={props.imagem} alt="" />
                <h5>{props.titulo}:</h5>
                <P>{props.descricao}</P>
            </SmallCard>

        </>
    );
}
