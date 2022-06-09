import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

function App() {
  const [tarefas, setTarefa] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro] = useState("")

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('todo'))
    if (local)
      setTarefa(local)

  },[])

  console.log(tarefas)

  const onChangeInput = (event) => {

    setInputValue(event.target.value)
  }

  const criaTarefa = () => {

    const t = [
      ...tarefas,
      {
        id: Date.now(),
        texto: inputValue,
        completa: false
      }
    ]
    localStorage.setItem("todo", JSON.stringify(t))
    setTarefa(t)
  }

  const selectTarefa = (id) => {
      tarefas.forEach(element => {
        if(element.id === id)
          if(element.completa)
            element.completa = false
          else
            element.completa = true
      });
      console.log(tarefas)
      localStorage.setItem("todo", JSON.stringify(tarefas))
      setTarefa([...tarefas])
  }

  const onChangeFilter = (event) => {
      setFiltro(event.target.value)
  }


  const listaFiltrada = tarefas.filter(tarefa => {
    switch (filtro) {
      case 'pendentes':
        return !tarefa.completa
      case 'completas':
        return tarefa.completa
      default:
        return true
    }
  });


  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input value={inputValue} onChange={onChangeInput} />
        <button onClick={criaTarefa}>Adicionar</button>
      </InputsContainer>
      <br />

      <InputsContainer>
        <label>Filtro</label>
        <select value={filtro} onChange={onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <TarefaList>
        {listaFiltrada.map((tarefa, index) => {
          return (
            <Tarefa key={index}
              completa={tarefa?.completa}
              onClick={() => selectTarefa(tarefa?.id)}
            >
              {tarefa?.texto}
            </Tarefa>
          )
        })}
      </TarefaList>
    </div>
  )
}


export default App
