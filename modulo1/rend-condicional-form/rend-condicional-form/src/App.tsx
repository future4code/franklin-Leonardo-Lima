import React, { useState } from 'react';
import { Step1 } from './components/forms/Step1';

function App() {

  const [state, setState] = useState("")

  function handleClick() {
    console.log(state)
  }

  return (
    <>
    <Step1 state={state} setState={setState} />
    <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
    </>
  );
}

export default App;
