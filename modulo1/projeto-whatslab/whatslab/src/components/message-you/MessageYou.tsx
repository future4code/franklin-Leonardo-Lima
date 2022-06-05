import React from "react";
import styled from "styled-components";

export function MessageYou(props: { message?: string }) {

    return (
        <Container>
            <Message>
                {props.message}
            </Message>
        </Container>
    )

}

const Container = styled.div`

    display: flex;
    justify-content: flex-end;
    margin: 3rem .25rem;
`;

const Message = styled.div`

    padding: 1rem;
    word-wrap: break-word;

    max-width: 50%;

    background: #78E378;
    border-radius: 12px;
`;
