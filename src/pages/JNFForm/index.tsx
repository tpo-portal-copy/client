import { useState } from 'react'
import StepperComponent from '../../components/JNFcomponents/stepper'

function JNFForm() {
  const [currStep, setCurrStep] = useState(1)

  return (
    <div>
      {/* <JnfDrive /> */}
      <StepperComponent activeStep={currStep} setCurrStep={setCurrStep} />
    </div>
  )
}

export default JNFForm
