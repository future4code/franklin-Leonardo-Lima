import React from 'react';
import styled from 'styled-components';

const SmallCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    padding: 20px 10px;
    font-size: 1rem !important;
    margin-bottom: 10px;
    background-color: #c3fbff;
    height: 100px;
`;

const Img = styled.img`
    width: 80px;
    margin-right: 10px;
`;

const A = styled.a`
    text-decoration: none;
`;

export function CardGitHub(props) {

    return (
        <>
            <A href="https://github.com/leonardosantino" target="_blank">
                <SmallCard>
                    <Img src={props.imagem} alt="" />
                    <h5>{props.titulo}</h5>
                </SmallCard>
            </A>
        </>
    );
}
