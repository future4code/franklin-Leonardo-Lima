import React, { useState } from 'react';
import { Final } from './components/forms/Final';
import { Step1 } from './components/forms/Step1';
import { Step2 } from './components/forms/Step2';
import { Step3 } from './components/forms/Step3';

function App() {

  const [state, setState] = useState("")
  const [nextStep, setNextStep] = useState(false)
  const [finalStep, setFinalStep] = useState(false)

  function handleClick() {

    setNextStep(!nextStep);

    if (!nextStep)
      setFinalStep(!finalStep);
  }

  return (
    <>
      {
        (state === '1' || state === '3') && nextStep ? <Step3 /> :
          (state === '2' || state === '4') && nextStep ? <Step2 /> :
            state !== '' && finalStep ? <Final /> : <Step1 setState={setState} />
      }
      <div className='d-flex justify-content-center'>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
      </div>
    </>
  );
}

export default App;
