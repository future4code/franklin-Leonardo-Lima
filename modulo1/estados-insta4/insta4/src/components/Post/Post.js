import React, { useState } from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import bookmark from '../../img/bookmark.png'
import bookmarkSave from '../../img/bookmark-save.png'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { Share } from '../share/Share'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

function Post(props) {

  const [state, setState] = useState({
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  })

  const [numeroCurtidas, setnumeroCurtidas] = useState(0)
  const [curtido, setCurtido] = useState(false)
  const [save, setSave] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [comentario, setComentario] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)

  const onClickCurtida = () => {
    console.log('Curtiu!')
    if (curtido) {
      setCurtido(false)
      setnumeroCurtidas(0)
      return
    }
    setCurtido(true)
    setnumeroCurtidas(1)
  }

  const onClickSave = () => {
    console.log('Salvou!')
    if (save) {
      setSave(false)
      return
    }
    setSave(true)
  }

  const onClickComentario = () => {
    setComentando(!comentando)
    if (comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} />
    }
    console.log(comentando)
  }

  const aoEnviarComentario = (e) => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  function aoAlterarComentario(e) {
    setComentario(e.target.value)
    console.log(e.target.value)
  }

  let iconeCurtida

  if (curtido) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }

  let iconBookmark

  if (save) {
    iconBookmark = bookmarkSave
  } else {
    iconBookmark = bookmark
  }

  let componenteComentario

  if (comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} onChangeComentario={aoAlterarComentario} />
  }

  return (
    <PostContainer>

      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconBookmark}
          onClickIcone={onClickSave}
        />
        <Share />
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  )
}


export default Post