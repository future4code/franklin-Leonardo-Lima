import React from "react";
import axios from "axios";
import styled from "styled-components";
import AddMusic from "../AddMusic";

const Conteiner = styled.div`
  height: 100%;
`;

const ConteinerPlaylists = styled.div`
  height: 160vh;
  padding: 1rem;
  background-color: #515551ca;
`;

const ButtonBack = styled.button`
  width: 5rem;
  height: 2rem;
  margin-bottom: 4rem;
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

const TextPlaylist = styled.h1`
  color: white;
  margin: 0 0 1rem 0;
`;

const SearchField = styled.input`
  width: 15rem;
  height: 1.6rem;
  color: white;
  border-radius: 1rem;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #eeeeee;
  background-color: transparent;
  padding-left: 1rem;
  margin: 1rem 1rem 0 0;

  ::placeholder {
    color: #eeeeee;
  }
`;

const ButtonSearch = styled.button`
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

const ConteinerListPlaylist = styled.ul`
  padding: 0;
`;

const ListPlaylist = styled.li`
  list-style-type: none;
`;

const ConteinerNameEDelete = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PlaylistsNames = styled.p`
  cursor: pointer;
  line-height: 2.5rem;
  margin: 0;

  :hover {
    opacity: 0.9;
    color: #9d4edd;
  }
`;

const ButtonDelete = styled.p`
  cursor: pointer;
  color: red;
  margin: 0;

  :hover {
    opacity: 0.9;
  }
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const axiosConfig = {
  headers: {
    Authorization: "leonardo-santino-franklin",
  },
};

class Playlists extends React.Component {
  state = {
    playlists: [],
    title: "Suas Playlists",
    currentPage: "playlists",
    listId: "",
    name: "",
  };

  componentDidMount() {
    this.fetchPlaylists();
  }

  fetchPlaylists = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deletePlaylist = (listId) => {
    if (window.confirm("Você tem certeza que deseja deletar esta Playlist?")) {
      axios
        .delete(`${baseUrl}/${listId}`, axiosConfig)
        .then(() => {
          this.fetchPlaylists();
        })
        .catch((erro) => {
          alert("Erro ao deletar Playlist");
          console.log(erro.message);
        });
    }
  };

  changePage = (listId) => {
    if (this.state.currentPage === "playlists") {
      this.setState({
        currentPage: "playlistDetail",
        listId: listId,
      });
    } else {
      this.setState({ currentPage: "playlists", listId: "" });
    }
  };

  handleNameChange = (event) => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleSearchPlaylist = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.state.name}`,
        axiosConfig
      )
      .then((response) => {
        this.setState({ playlists: response.data.result.playlist });
      })
      .catch((error) => {
        alert("Erro ao buscar playlist");
        console.log(error);
      });
  };

  render() {
    return (
      <Conteiner>
        <ConteinerPlaylists>
          <ButtonBack onClick={this.props.changePage}>Home</ButtonBack>

          <TextPlaylist>Buscar Playlist</TextPlaylist>

          <SearchField
            placeholder="Nome da Playlist"
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />

          <ButtonSearch onClick={this.handleSearchPlaylist}>
            Buscar
          </ButtonSearch>

          {this.state.currentPage === "playlists" ? (
            <div>
              <ConteinerListPlaylist>
                <TextPlaylist>{this.state.title}</TextPlaylist>

                {this.state.playlists.length === 0 && (
                  <div>Não há nenhuma playlist adicionada :(</div>
                )}
                {this.state.playlists.map((list, index) => {
                  return (
                    <ListPlaylist key={index}>
                      <ConteinerNameEDelete>
                        <PlaylistsNames
                          onClick={() => this.changePage(list.id, list.name)}
                        >
                          {list.name}
                        </PlaylistsNames>

                        <ButtonDelete
                          onClick={() => this.deletePlaylist(list.id)}
                        >
                          x
                        </ButtonDelete>
                      </ConteinerNameEDelete>

                      <hr />
                    </ListPlaylist>
                  );
                })}
              </ConteinerListPlaylist>
            </div>
          ) : (
            <AddMusic listId={this.state.listId} changePage={this.changePage} />
          )}
        </ConteinerPlaylists>
      </Conteiner>
    );
  }
}
export default Playlists;
