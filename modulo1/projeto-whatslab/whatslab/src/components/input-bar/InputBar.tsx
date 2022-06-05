import React, { FormEvent } from "react";
import styled from "styled-components";

export function InputBar(props: { state: string[], setState: Function }) {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const scrollMessage = document.getElementById("message-scroll") as HTMLDivElement;
        const inputMessage = (event.currentTarget.elements.namedItem('message') as HTMLInputElement).value.trim()

        if (inputMessage)
            props.setState([...props.state, inputMessage]);

        setTimeout(() => {
            scrollMessage.scrollTo(0, scrollMessage.scrollHeight);
        }, 100);
        
        event.currentTarget.reset();
    }

    return (
        <Container onSubmit={handleSubmit}>

            <IconEmoji src="images/IconEmoji.png" alt="" />
            <Typing type="text" name="message" placeholder="Message" />
            <ButtonSubmit type="submit" >
                <IconSend src="images/IconSend.png" alt="" />
            </ButtonSubmit>

        </Container>
    )
}

const Container = styled.form`

    display: flex;

    align-items: center;

    padding: 1rem;
    gap: 1rem;

    height: 4rem;
    margin: 2rem 0;

    position:fixed;
    bottom:0;
    left: 1rem;
    right: 1rem;
    background: #FFFFFF;
    border-radius: 1rem;
`;

const IconEmoji = styled.img`

`;

const Typing = styled.input`

    width: 100%;
    border: none;
    &:focus {
        outline: none;
    }
`;

const ButtonSubmit = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`;

const IconSend = styled.img`

`;
