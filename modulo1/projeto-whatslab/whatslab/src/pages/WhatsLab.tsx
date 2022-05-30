import React from 'react';
import { Avatar, Texts, TopBar, Message, UserDetails, Name, LastSeen, Search, IconSearch, Call, IconCall, More, IconMore, MessageOther, Other, MessageYou, You } from './style';

export function WhatsLab() {
    return (
        <>
            <Message>
                <TopBar>
                    <UserDetails>
                        <Avatar src="images/Avatar.png" alt=""/>
                        <Texts>
                            <Name>Leonardo Santino</Name>
                            <LastSeen>last seen 5 mins ago</LastSeen>
                        </Texts>
                    </UserDetails>
                    
                        <Search>
                            <IconSearch src="images/Search.png" alt="" />
                        </Search>
                        <Call>
                            <IconCall src="images/Call.png" alt="" />
                        </Call>
                        <More>
                            <IconMore src="images/More.png" alt="" />
                        </More>
                </TopBar>
                <MessageOther>
                    <Other>
                        OMG 😲 do you remember what you did last night at the work night out?
                    </Other>
                    
                </MessageOther>
                <MessageYou>
                    <You>
                        I don't remember anything 😄
                    </You>
                </MessageYou>
            </Message>
        </>
    );
}