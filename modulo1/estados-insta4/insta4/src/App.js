import React, { useState } from 'react';
import styled from 'styled-components'
import { PostForm } from './components/forms/PostForm';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  /* flex-direction: column; */
  align-items: center;
`
function App() {

  const [usersPost, setUserPost] = useState(
    [{
      name: 'Joana',
      photo: 'https://picsum.photos/id/1027/200/150',
      post: 'https://picsum.photos/id/1027/200/150'
    },
    {
      name: 'Marcelo',
      photo: 'https://picsum.photos/id/661/200/150',
      post: 'https://picsum.photos/id/661/200/150'
    },
    {
      name: 'Renata',
      photo: 'https://picsum.photos/id/550/200/150',
      post: 'https://picsum.photos/id/550/200/150'
    }]
  )

  return (

    <>
      <PostForm state={usersPost} setState={setUserPost}/>
      <MainContainer>
        {usersPost.map((user, index) => {
          return <Post key={index}
            nomeUsuario={user.name}
            fotoUsuario={user.photo}
            fotoPost={user.post}
          />
        })}
      </MainContainer>
    </>
  )
}

export default App;
