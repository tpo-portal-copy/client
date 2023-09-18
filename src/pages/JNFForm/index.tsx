import { useState } from 'react'
import StepperComponent from '../../components/JNFcomponents/stepper/index'
import DrivesCard from '../../components/Cards/DrivesCard/index'
import MultiSelectDropDown from '../../components/MultiSelectDropDown'
import TprDrives from '../TprDrives'

function JNFForm() {
  const [currStep, setCurrStep] = useState(0)

  return (
    <div>
      {/* <JnfDrive /> */}
      {/* <TprDrives /> */}

      <StepperComponent activeStep={currStep} setCurrStep={setCurrStep} />
    </div>
  )
}

export default JNFForm
