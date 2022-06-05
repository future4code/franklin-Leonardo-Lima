import React from "react";
import styled from "styled-components";

export function MessageOther(props: { message?: string }) {

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
    margin: 3rem .25rem;
`;

const Message = styled.div`

    padding: 1rem;
    word-wrap: break-word;

    max-width: 50%;

    background: #FFFFFF;
    border-radius: 12px;
`;
