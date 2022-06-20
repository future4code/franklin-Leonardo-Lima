import React from "react";
import axios from "axios";
import styled from "styled-components";

const ButtonBackPlaylists = styled.button`
  width: 10.2rem;
  height: 2rem;
  margin: 1rem 2rem 3rem 0;
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

const TracksContainer = styled.div`
  display: grid;
  text-align: left;
  margin: 0;
  line-height: 80px;
`;

const ButtonAddTracks = styled.button`
  width: 10.2rem;
  height: 2rem;
  margin: 1rem 2rem 3rem 0;
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

const DataTracksField = styled.input`
  width: 15rem;
  height: 1.8rem;
  color: black;
  border-radius: 1rem;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #eeeeee;
  background-color: #ffffffa5;
  padding-left: 1rem;
  margin: 0.5rem 0;

  ::placeholder {
    color: black;
  }
`;

const ButtonSaveDataTracks = styled.button`
  width: 10.2rem;
  height: 2rem;
  margin: 1rem 2rem 3rem 0;
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

const TextArtistMusic = styled.h5`
  height: 1.5rem;
  margin: 0;
`;

const TextNameMusic = styled.h5`
  height: 4rem;
  margin: 0 0 0.5rem 0;
`;

const axiosConfig = {
  headers: {
    Authorization: "leonardo-santino-franklin",
  },
};

class AddMusic extends React.Component {
  state = {
    playlistDetail: [],
    playlistEdition: "editButton",
    name: "",
    artist: "",
    url: "",
  };

  componentDidMount() {
    this.getPlaylistDetails();
  }

  getPlaylistDetails = (listId) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.listId}/tracks`,
        axiosConfig
      )
      .then((response) => {
        this.setState({ playlistDetail: response.data.result.tracks });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  changePlaylistEditonFiel = () => {
    if (this.state.playlistEdition === "editButton") {
      this.setState({ playlistEdition: "playlistEditForm" });
    } else {
      this.setState({ playlistEdition: "editButton" });
    }
  };

  handleNameChange = (event) => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleArtistChange = (event) => {
    const newArtistValue = event.target.value;

    this.setState({ artist: newArtistValue });
  };

  handleUrlChange = (event) => {
    const newUrlValue = event.target.value;

    this.setState({ url: newUrlValue });
  };

  handleCreatePlaylist = (listId) => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.listId}/tracks`,
        body,
        axiosConfig
      )
      .then((response) => {
        this.setState({ name: "", artist: "", url: "" });
        this.getPlaylistDetails();
        this.changePlaylistEditonFiel();
        alert("Playlist editada com sucesso!");
        console.log(response);
      })
      .catch((error) => {
        alert("Erro ao editar Playlist!");
        console.log(error.message);
      });
  };

  render() {
    const renderedDetails = this.state.playlistDetail.map((playlist) => {
      return (
        <div key={playlist.id}>
          <TextArtistMusic>Artista: {playlist.artist}</TextArtistMusic>
          <TextNameMusic>Música: {playlist.name}</TextNameMusic>
          <audio src={playlist.url} value={playlist.url} controls></audio>
        </div>
      );
    });

    const playlistEdition =
      this.state.playlistEdition === "editButton" ? (
        <ButtonAddTracks onClick={this.changePlaylistEditonFiel}>
          Adicionar uma Música
        </ButtonAddTracks>
      ) : (
        <div>
          <p>Adicionar tracks a playlist</p>

          <DataTracksField
            placeholder="Nome da música"
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <br />

          <DataTracksField
            placeholder="Artista"
            type="text"
            value={this.state.artist}
            onChange={this.handleArtistChange}
          />
          <br />

          <DataTracksField
            placeholder="Url"
            type="url"
            value={this.state.url}
            onChange={this.handleUrlChange}
          />
          <br />

          <ButtonSaveDataTracks onClick={this.handleCreatePlaylist}>
            Adicionar
          </ButtonSaveDataTracks>
        </div>
      );

    return (
      <div>
        <div>
          <ButtonBackPlaylists onClick={this.props.changePage}>
            Voltar as Playlists
          </ButtonBackPlaylists>

          <TracksContainer>{renderedDetails}</TracksContainer>

          <hr />
        </div>

        <div>{playlistEdition}</div>
      </div>
    );
  }
}

export default AddMusic;
