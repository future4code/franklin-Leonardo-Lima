import React from "react";
import styled from "styled-components";

export function Final() {

    return(
        <Container>
        <H1>O FORMULÁRIO ACABOU</H1>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
        </Container>
    )
    
}

const Container = styled.div`
    display: grid;
    justify-content: center;
`;

const H1 = styled.h1`
    text-align: center;
`;
