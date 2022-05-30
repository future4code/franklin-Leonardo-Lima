import styled from "styled-components";

export const Message = styled.div`
    height: 100vh;
    background-image: url("images/Background.png");
`;

export const TopBar = styled.nav`
    /* Top Bar */
    box-sizing: border-box;
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px 16px;
    gap: 8px;

    position: relative;
    width: 916px;
    height: 56px;

    background: #FFFFFF;
    border-bottom: 1px solid #D9DCE0;
`;

export const UserDetails = styled.div`
    /* (Other User) */
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 0px;
    gap: 16px;

    width: 740px;
    height: 40px;

    background: #FFFFFF;
    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
`;

export const Avatar = styled.img`
    /* Avatar */
    width: 40px;
    height: 40px;

    border-radius: 100px;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Texts = styled.div`
    /* Texts */
    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;

    width: 684px;
    height: 42px;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 1;
`;

export const Name = styled.div`
    /* Name */
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    width: 684px;
    height: 20px;
    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

export const LastSeen = styled.div`
    /* last seen 5 mins ago */
    width: 136px;
    height: 18px;
    /* 14-Reg */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 129% */
    /* Navy Grey */
    color: #707991;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const SearchMessage = styled.div`
    /* Search Messages */
    width: 40px;
    height: 40px;

    border-radius: 100px;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const Search = styled.div`
    /* search icon */
    position: absolute;
    left: 20%;
    right: 20%;
    top: 20%;
    bottom: 20%;

`;

export const IconSearch = styled.img`

position: absolute;
left: 10.42%;
right: 12.51%;
top: 10.42%;
bottom: 12.5%;
`;

export const Call = styled.div`
/* call icon */
position: absolute;
left: 20%;
right: 20%;
top: 20%;
bottom: 20%;
`;

export const IconCall = styled.img`
/* Vector */


position: absolute;
left: 22.54%;
right: 19.13%;
top: 8.33%;
bottom: 8.33%;
`;

export const More = styled.div`
    /* more icon */


position: absolute;
left: 20%;
right: 20%;
top: 20%;
bottom: 20%;

`;

export const IconMore = styled.img`

position: absolute;
left: 41.67%;
right: 41.67%;
top: 16.67%;
bottom: 16.67%;

`;

export const MessageOther = styled.div`
/* Message(Other User) */
/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
margin: 50px 0;

width: 646px;
height: 70px;
/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
`;

export const Other = styled.div`
/* Message */
/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
padding: 4px 12px;
/* margin: 50px; */
gap: 4px;

width: 402px;
height: 70px;

background: #FFFFFF;
border-radius: 12px;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
`;

export const MessageYou = styled.div`

    /* Message(You) */


/* Auto layout */

display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 0px;

width: 646px;
height: 48px;


/* Inside auto layout */

flex: none;
order: 3;
align-self: stretch;
flex-grow: 0;
`;

export const You = styled.div`

    /* Message */


/* Auto layout */

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
padding: 4px 12px;
gap: 4px;

width: 243px;
height: 48px;

/* Light Green */

background: #78E378;
border-radius: 12px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`;