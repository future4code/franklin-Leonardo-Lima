import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { InputBar } from '../components/input-bar/InputBar';
import { MessageOther } from '../components/message-other/MessageOther';
import { MessageYou } from '../components/message-you/MessageYou';
import { TopBar } from '../components/top-bar/TopBar';

export function WhatsLab() {

    const [state, setState] = useState(
        ["OMG 😲 do you remember what you did last night at the work night out?", "I don't remember anything 😄"]
    );

    return (
        <Container>
            <TopBar />
            <Messages id='message-scroll'>
                {state.map((message, index) => {
                    if (index % 2)
                        return <MessageYou message={message} key={"you" + index} />;
                    return <MessageOther message={message} key={"other" + index} />
                })}
            </Messages>
            <InputBar state={state} setState={setState} />
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    font-family: 'Poppins', sans-serif;
    background-image: url("images/Background.png");
`;

const Messages = styled.div`
    height: 75%;
    overflow: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        width: 11px;
        border: 1px solid none;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ffffff75;
        border-radius: 5px;
    }
`;
