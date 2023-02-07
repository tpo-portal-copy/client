/* eslint-disable react/no-children-prop */

import { useState } from 'react'

import styles from './StudentDetailsForm.module.scss'

import Profile from '../Profile'
import FormOne from '../../components/StudentDetailForms/FormOne'
import FormTwo from '../../components/StudentDetailForms/FormTwo'
import FormThree from '../../components/StudentDetailForms/FormThree'
import FormFour from '../../components/StudentDetailForms/FormFour'

function Stepper() {
  const [currentStep, setCurrentStep] = useState(0)
  const [currentAnimationStep, setCurrentAnimationStep] = useState(0)

  const isStepActive = (stepNumber: number) => {
    if (stepNumber <= currentStep) return true
    return false
  }

  const goToNextStep = () => {
    setCurrentAnimationStep((step) => step + 1)
    setTimeout(() => {
      setCurrentStep((step) => step + 1)
    }, 1100)
  }

  const getCorrectForm = () => {
    if (currentStep === 0) return <FormOne onsubmit={goToNextStep} />
    if (currentStep === 1) return <FormTwo onsubmit={goToNextStep} />
    if (currentStep === 2) return <FormThree onsubmit={goToNextStep} />
    if (currentStep === 3) return <FormFour onsubmit={goToNextStep} />

    return <FormOne onsubmit={goToNextStep} />
  }

  return (
    <div className={styles.container}>
      <div className={styles.steps_container}>
        <div className={styles.progress_bar}>
          <div className={styles.hollow_line} />
          <div className={styles.filled_line} data-step={currentAnimationStep} />
        </div>
        <div className={`${styles.step} ${isStepActive(0) ? styles.active : ''}`}>
          <div className={styles.icon_container}>1</div>
          <p>Basic Info</p>
        </div>
        <div className={`${styles.step} ${isStepActive(1) ? styles.active : ''}`}>
          <div className={styles.icon_container}>
            {/* <Bag isFilled={isStepActive(1) ? '#fff' : '#ABB5C2'} /> */}2
          </div>
          <p>Education</p>
        </div>
        <div className={`${styles.step} ${isStepActive(2) ? styles.active : ''}`}>
          <div className={styles.icon_container}>
            {/* <Appointments isFilled={isStepActive(2) ? '#fff' : '#ABB5C2'} /> */}3
          </div>
          <p>College</p>
        </div>
        <div className={`${styles.step} ${isStepActive(3) ? styles.active : ''}`}>
          <div className={styles.icon_container}>
            {/* <Ready isFilled={isStepActive(3) ? '#fff' : '#ABB5C2'} /> */}4
          </div>
          <p>Choose Clusters</p>
        </div>
      </div>
      {getCorrectForm()}
    </div>
  )
}

export default function StudentDetailsForm() {
  return (
    <div className={styles.container}>
      <Stepper />
    </div>
  )
}
