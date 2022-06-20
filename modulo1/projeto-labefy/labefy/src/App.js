import React from "react";
import styled from "styled-components";
import AddPlaylist from "./component/AddPlaylist";
import Playlists from "./component/Playlists";

const AppConteiner = styled.div`
  height: 100%;
  margin: 0;
`;

const HeaderPage = styled.header`
  background-color: #333533;
  height: 2.5rem;
  color: black;
  padding-left: 1rem;
`;

const Logo = styled.h2`
  color: #9d4edd;
  margin: 0;
`;

const BodyPage = styled.div`
  color: white;
  height: 100%;
  background-image: url(https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80);
  background-position: center;
  background-size: 100%;
  background-attachment: fixed;
`;

const FooterPage = styled.footer`
  background-color: #333533;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  bottom: 0;
  position: fixed;
  width: 100%;
  text-align: center;
`;

const TextFooter = styled.h4`
  color: #515551;
  margin: 0;
`;

class App extends React.Component {
  state = {
    currentPage: "addPlaylist",
  };

  changePage = () => {
    if (this.state.currentPage === "addPlaylist") {
      this.setState({ currentPage: "playlists" });
    } else {
      this.setState({ currentPage: "addPlaylist" });
    }
  };

  render() {
    return (
      <AppConteiner>
        <HeaderPage>
          <Logo>Labefy</Logo>
        </HeaderPage>

        <BodyPage>
          {this.state.currentPage === "addPlaylist" ? (
            <AddPlaylist changePage={this.changePage} />
          ) : (
            <Playlists changePage={this.changePage} />
          )}
        </BodyPage>

        <FooterPage>
          <TextFooter>By Leonardo Santino</TextFooter>
        </FooterPage>
      </AppConteiner>
    );
  }
}

export default App;
