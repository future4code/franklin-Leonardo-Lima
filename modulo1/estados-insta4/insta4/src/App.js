import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={'Paulinha'}
        fotoUsuario={'https://picsum.photos/id/1005/200/150'}
        fotoPost={'https://picsum.photos/id/1005/200/150'}
      />

      <Post
        nomeUsuario={'Leonardo'}
        fotoUsuario={'https://picsum.photos/id/1001/200/150'}
        fotoPost={'https://picsum.photos/id/1001/200/150'}
      />

      <Post
        nomeUsuario={'Naiara'}
        fotoUsuario={'https://picsum.photos/id/1011/200/150'}
        fotoPost={'https://picsum.photos/id/1011/200/150'}
      />

    </MainContainer>
  )

}


export default App;
