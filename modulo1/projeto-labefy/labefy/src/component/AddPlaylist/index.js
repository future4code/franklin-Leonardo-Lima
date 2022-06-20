import React from "react";
import axios from "axios";
import styled from "styled-components";

const Conteiner = styled.div`
  height: 100%;
`;

const ConteinerPlaylist = styled.div`
  height: 90.7vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #515551ca;
`;

const Title = styled.h3`
  padding: 3rem 0;
  margin: 0 1rem; ;
`;

const AddNamePlaylist = styled.input`
  width: 9rem;
  height: 1.6rem;
  color: white;
  border-radius: 1rem;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #eeeeee;
  background-color: transparent;
  padding-left: 1rem;

  ::placeholder {
    color: #eeeeee;
  }
`;

const ButtonSavePlaylist = styled.button`
  width: 10.2rem;
  height: 2rem;
  margin: 1rem 0;
  border-radius: 0.9rem;
  border: none;
  background: #9d4edd;
  font-size: 0.95rem;
  color: white;
  cursor: pointer;
  font-weight: 500;

  :hover {
    opacity: 0.9;
  }
`;

const ButtonViewPlaylists = styled.button`
  width: 10.2rem;
  height: 2rem;
  margin-bottom: 1rem;
  border-radius: 0.9rem;
  border: none;
  background: #9d4edd;
  font-size: 0.95rem;
  color: white;
  cursor: pointer;
  font-weight: 500;

  :hover {
    opacity: 0.9;
  }
`;

class AddPlaylist extends React.Component {
  state = {
    name: "",
  };

  createNewPlaylist = () => {
    const body = {
      name: this.state.name,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "leonardo-santino-franklin",
          },
        }
      )
      .then((response) => {
        alert(`Playlist ${this.state.name} criada com sucesso!`);
        this.setState({ name: "" });
      })
      .catch((error) => {
        console.log(error.message);
        alert("Não possível criar a playlist com este nome!");
      });
  };

  onChangeNameValue = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <Conteiner>
        <ConteinerPlaylist>
          <Title>Hey! Vamos curtir suas playlists?</Title>

          <p>Criar uma nova Playlist</p>

          <AddNamePlaylist
            value={this.state.name}
            onChange={this.onChangeNameValue}
            placeholder={"Nome da Playlist"}
          ></AddNamePlaylist>

          <ButtonSavePlaylist onClick={this.createNewPlaylist}>
            Salvar
          </ButtonSavePlaylist>

          <ButtonViewPlaylists onClick={this.props.changePage}>
            Ver Playlists
          </ButtonViewPlaylists>
        </ConteinerPlaylist>
      </Conteiner>
    );
  }
}

export default AddPlaylist;
