import { useState } from 'react'
import { Text } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import ProgressBar from '../../components/ProgressBar'
import Animation from '../../assets/animations/136670-space.json'
import styles from './JNFForm.module.scss'
import {
  JNFFormOne,
  JNFFormTwo,
  JNFFormThree,
  JNFFormFour,
  JNFFormFive,
} from '../../components/Forms/JNFForms'
import Loading from '../../assets/animations/81544-rolling-check-mark.json'
import {
  JNFFormOneData,
  JNFFormTwoData,
  JNFFormThreeData,
  JNFFormFiveData,
  JNFFormFourData,
} from '../../utils/types'
import { getCurrentSession } from '../../utils/functions'

export default function JNFForm() {
  const [value, setValue] = useState(0)
  const [step, setStep] = useState(0)
  const [jnfFormOneData, setJNFFormOneData] = useState<JNFFormOneData>({
    companyName: '',
    session: getCurrentSession(),
    isPlacement: '',
    isSummerIntern: '',
    isSixMonIntern: '',
    modeOfHiring: '',
    prePlacementTalk: '',
    aptitudeTest: '',
    technicalTest: '',
    groupDiscussion: '',
    personalInterview: '',
    noOfPersonVisiting: undefined,
    jobLocation: '',
    tentativeDriveDate: '',
  })

  const [jnfFormTwoData, setJNFFormTwoData] = useState<JNFFormTwoData>({
    tentativeJoiningDate: '',
    jobProfile: '',
    ctc: undefined,
    jobDescription: '',
    cgpi: undefined,
    eligibleBatches: '',
    course: '',
    branch: '',
    hasIntern: false,
  })

  const [jnfFormThreeData, setJNFFormThreeData] = useState<JNFFormThreeData>({
    isPPO: false,
    tentativeJoiningDate: '',
    jobProfile: '',
    stipend: undefined,
    duration: undefined,
    ctc: undefined,
    jobDescription: '',
    cgpi: undefined,
    eligibleBatches: '',
    course: '',
    branch: '',
  })

  const [jnfFormFourData, setJNFFormFourData] = useState<JNFFormFourData>({
    tentativeJoiningDate: '',
    jobProfile: '',
    stipend: undefined,
    ctcAfterIntern: undefined,
    jobDescription: '',
    cgpi: undefined,
    eligibleBatches: '',
    course: '',
    branch: '',
  })

  const [jnfFormFiveData, setJNFFormFiveData] = useState<JNFFormFiveData>({
    type: '',
    name: '',
    mobileNumber: undefined,
    email: '',
  })

  const [show, setShow] = useState(false)

  const getProgressBarPercentageIncrease = () => {
    let numOfFormsShowed = 0
    if (jnfFormOneData.isPlacement === 'true') numOfFormsShowed += 1
    if (jnfFormOneData.isSummerIntern === 'true') numOfFormsShowed += 1
    if (jnfFormOneData.isSixMonIntern === 'true') numOfFormsShowed += 1
    const percentageIncrease = 100 / numOfFormsShowed
    return percentageIncrease
  }

  const handleOneNext = (values: JNFFormOneData) => {
    const percentageIncrease = getProgressBarPercentageIncrease()

    if (jnfFormOneData.isPlacement === 'true') {
      setStep((prevStep) => prevStep + 1)
    } else {
      setStep((prevStep) => prevStep + 2)
    }
    setValue((prevValue) => prevValue + percentageIncrease)

    setJNFFormOneData(values)
  }

  const handleTwoNext = (values: JNFFormTwoData) => {
    const percentageIncrease = getProgressBarPercentageIncrease()

    if (jnfFormOneData.isPlacement === 'true') {
      setStep((prevStep) => prevStep + 1)
    } else {
      setStep((prevStep) => prevStep + 2)
    }
    setValue((prevValue) => prevValue + percentageIncrease)
    setJNFFormTwoData(values)
  }

  const handleThreeNext = (values: JNFFormThreeData) => {
    setStep((prevStep) => prevStep + 1)
    setValue((prevValue) => prevValue + 25)
    setJNFFormThreeData(values)
  }

  const handleFourNext = (values: JNFFormFourData) => {
    setStep((prevStep) => prevStep + 1)
    setValue((prevValue) => prevValue + 25)
    setJNFFormFourData(values)
  }

  const handleTwoBack = (values: JNFFormTwoData) => {
    setStep((prevStep) => prevStep - 1)
    setValue((prevValue) => prevValue - 25)
    setJNFFormTwoData({ ...values })
  }

  const handleThreeBack = (values: JNFFormThreeData) => {
    setStep((prevStep) => prevStep - 1)
    setValue((prevValue) => prevValue - 25)
    setJNFFormThreeData({ ...values })
  }

  const handleFourBack = (values: JNFFormFourData) => {
    setStep((prevStep) => prevStep - 1)
    setValue((prevValue) => prevValue - 25)
    setJNFFormFourData({ ...values })
  }

  const handleFiveBack = (values: JNFFormFiveData) => {
    setStep((prevStep) => prevStep - 1)
    setValue((prevValue) => prevValue - 25)
    setJNFFormFiveData({ ...values })
  }

  const handleSubmit = (values: any) => {
    setStep((prevStep) => prevStep + 1)
    setValue((prevValue) => prevValue + 25)
    setShow(true)
  }

  const getFormContent = (currStep: number) => {
    switch (currStep) {
      case 0:
        return <JNFFormOne data={jnfFormOneData} onNext={(values) => handleOneNext(values)} />
      case 1:
        return <JNFFormTwo data={jnfFormTwoData} onNext={handleTwoNext} onBack={handleTwoBack} />
      case 2:
        return (
          <JNFFormThree data={jnfFormThreeData} onNext={handleThreeNext} onBack={handleThreeBack} />
        )
      case 3:
        return (
          <JNFFormFour data={jnfFormFourData} onNext={handleFourNext} onBack={handleFourBack} />
        )
      case 4:
        return (
          <JNFFormFive data={jnfFormFiveData} onSubmit={handleSubmit} onBack={handleFiveBack} />
        )
      default:
        return null
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.heading}>Fill Your Details Here</h2>
        <Lottie animationData={Animation} />
        <ProgressBar step={step} completed={value} />
      </div>
      <div className={styles.content}>
        {show ? (
          <div className={styles.animation_container}>
            <Lottie
              loop={false}
              autoPlay={false}
              animationData={Loading}
              className={styles.animation}
            />
            <Text className={styles.tag_line}>You have successfully submitted your details</Text>{' '}
          </div>
        ) : (
          <>
            <h2 className={styles.heading}>Fill Your Details Here</h2>
            {getFormContent(step)}
          </>
        )}
      </div>
    </div>
  )
}
