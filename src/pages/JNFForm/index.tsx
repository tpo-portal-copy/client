import { useState } from 'react'
import StepperComponent from '../../components/JNFcomponents/stepper/index'
import DrivesCard from '../../components/Cards/DrivesCard/index'
import MultiSelectDropDown from '../../components/MultiSelectDropDown'

function JNFForm() {
  const [currStep, setCurrStep] = useState(0)

  return (
    <div>
      {/* <JnfDrive /> */}
      <MultiSelectDropDown />
      {/* <StepperComponent activeStep={currStep} setCurrStep={setCurrStep} /> */}
    </div>
  )
}

export default JNFForm
