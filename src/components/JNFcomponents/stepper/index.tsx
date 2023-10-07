import './index.scss'
import { Stepper, Step, StepLabel } from '@material-ui/core'
import { useState } from 'react'
import { Internship, Placement } from '../RecruitmentProcess/index'
import JnfHome from '../OrgansationDetails'
import EligibleBatches from '../EligibleBatches'
import NavbarJNF from '../Navbar_JNF'
import HRForm from '../HRForm'
import { HR, Steps, OfferedDrive } from '../../../utils/types'

export default function StepperComponent({
  setCurrStep,
  currStep,
  offeredDrive,
  setOfferedDrive,
  steps,
}: {
  setCurrStep: (number: number) => void
  currStep: number
  offeredDrive: OfferedDrive
  setOfferedDrive: (offeredDrive: OfferedDrive) => void
  steps: Steps[]
}) {
  const [hrList, setHrList] = useState<Array<HR>>([])
  const handleSubmit = () => {}
  const handleFiveBack = () => {}
  const getFormContent = () => {
    switch (currStep) {
      case 0:
        return <JnfHome setOfferedDrive={setOfferedDrive} />
      case 1:
        return <EligibleBatches />
      case 2:
        return <Placement />
      case 3:
        return <Internship />
      case 4:
        return <HRForm data={hrList} onSubmit={handleSubmit} onBack={handleFiveBack} />
      default:
        return null
    }
  }

  function Next() {
    if (currStep === steps.length - 1) {
      return null
    }
    if (steps[currStep + 1].isValid === false) {
      setCurrStep(currStep + 2)
    } else {
      setCurrStep(currStep + 1)
    }
    // return Active
  }
  function Back() {
    if (currStep === 0) {
      return null
    }
    if (steps[currStep - 1].isValid === false) {
      setCurrStep(currStep - 2)
    } else setCurrStep(currStep - 1)
    // return Active
  }

  return (
    <>
      <NavbarJNF />
      <Stepper activeStep={currStep} alternativeLabel>
        {steps.map(
          (step) =>
            step.isValid && (
              <Step key={step.id}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ),
        )}
      </Stepper>

      <div className="">
        <div>{getFormContent()}</div>
        <div className="stepper-footer">
          <div className="button-wrap">
            <button type="button" disabled={currStep === 0} className="btn" onClick={() => Back()}>
              Back
            </button>
            <button className="btn" onClick={() => Next()}>
              {currStep === steps.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
