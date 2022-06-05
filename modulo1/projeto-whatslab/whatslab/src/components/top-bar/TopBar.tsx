import React from "react";
import styled from "styled-components";

export function TopBar() {

    return (
        <Container>

            <UserDetails>
                <Avatar src="images/Avatar.png" alt="" />
                <Texts>
                    <Name>Leonardo Santino</Name>
                    <LastSeen>Last seen 5 mins ago</LastSeen>
                </Texts>
            </UserDetails>

            <OptionsIcons>
                <IconSearch src="images/Search.png" alt="" />
                <IconCall src="images/Call.png" alt="" />
                <IconMore src="images/More.png" alt="" />
            </OptionsIcons>

        </Container>
    )
}

const Container = styled.nav`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 1rem;

    background: #FFFFFF;
    border-end-start-radius: 1rem;
    border-end-end-radius: 1rem;
    border-bottom: 1px solid #D9DCE0;
`;

const UserDetails = styled.div`

    display: flex;
    gap: 1rem;

    background: #FFFFFF;
`;

const Avatar = styled.img`

    width: 45px;
    height: 45px;
    border: 1px solid lightgray;

    border-radius: 50rem;
`;

const Texts = styled.div`

    display: grid;
`;

const Name = styled.div`

    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.25rem;

    color: #011627;
`;

const LastSeen = styled.div`

    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 18px;
    color: #707991;
`;

const OptionsIcons = styled.div`

    display: flex;
    gap: 2rem;
`;

const IconSearch = styled.img`

`;

const IconCall = styled.img`

`;

const IconMore = styled.img`

`;
