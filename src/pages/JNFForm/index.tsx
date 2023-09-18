import { useState } from 'react'
import StepperComponent from '../../components/JNFcomponents/stepper/index'

function JNFForm() {
  const [currStep, setCurrStep] = useState(0)

  return (
    <div>
      {/* <JnfDrive /> */}
      <StepperComponent activeStep={currStep} setCurrStep={setCurrStep} />
    </div>
  )
}

export default JNFForm
