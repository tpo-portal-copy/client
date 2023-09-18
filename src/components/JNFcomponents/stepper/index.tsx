import './index.scss'
import { Stepper, Step, StepLabel } from '@material-ui/core'
import { Internship, Placement } from '../RecruitmentProcess/index'
import JnfHome from '../First'
import Dekstop1 from '../JNFForm'
import NavbarJNF from '../Navbar_JNF'

type Steps = {
  label: string
  id: number
}

export default function StepperComponent({
  activeStep,
  setCurrStep,
}: {
  activeStep: number
  setCurrStep: (number: number) => void
}) {
  const steps: Steps[] = [
    { label: 'Company details', id: 1 },
    { label: 'Streams offered', id: 2 },
    { label: 'Placements', id: 3 },
    { label: 'Internships', id: 4 },
  ]

  const getFormContent = () => {
    switch (activeStep) {
      case 0:
        return <JnfHome />
      case 1:
        return <Dekstop1 />
      case 2:
        return <Placement />
      case 3:
        return <Internship />
      default:
        return null
    }
  }

  function Next() {
    if (activeStep === steps.length - 1) {
      return null
    }
    setCurrStep(activeStep + 1)
    return activeStep
  }
  function Back() {
    if (activeStep === 0) {
      return null
    }
    setCurrStep(activeStep - 1)
    return activeStep
  }

  return (
    <>
      <NavbarJNF />
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step.id}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div className="">
        <div>{getFormContent()}</div>
        <div className="stepper-footer">
          <div className="button-wrap">
            <div className="back">
              <button
                type="button"
                disabled={activeStep === 0}
                className="btn"
                onClick={() => Back()}
              >
                Back
              </button>
            </div>
            <div className="next">
              <button className="btn" onClick={() => Next()}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
