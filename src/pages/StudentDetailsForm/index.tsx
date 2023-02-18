import { useState } from 'react'
import { Text } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import ProgressBar from '../../components/ProgressBar'
import Animation from '../../assets/animations/136670-space.json'
import styles from './StudentDetailsForm.module.scss'
import { FormFour, FormOne, FormThree, FormTwo } from '../../components/Forms/StudentDetailForms'
import Loading from '../../assets/animations/81544-rolling-check-mark.json'
import { FormOneData, FormThreeData, FormTwoData } from '../../utils/types'

export default function StudentDetailsForm() {
  const [value, setValue] = useState(0)
  const [step, setStep] = useState(0)
  const [formOneData, setFormOneData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    state: '',
    city: '',
    pincode: 0,
    personalEmail: '',
    gender: '',
    category: '',
    phone: 0,
    linkedin: '',
    isPwd: false,
    disabilityTypes: '',
  })

  const [formTwoData, setFormTwoData] = useState({
    tenthYear: 0,
    tenthSchool: '',
    tenthBoard: '',
    tenthPercentage: 0,
    twelfthYear: 0,
    twelfthSchool: '',
    twelfthBoard: '',
    twelfthPercentage: 0,
    jeeRank: 0,
  })

  const [formThreeData, setFormThreeData] = useState({
    course: '',
    branch: '',
    cgpi: 0,
    activeBacklog: 0,
    totalBacklog: 0,
    gateScore: 0,
    catScore: 0,
    batchYear: 0,
    passingYear: 0,
    currentYear: 0,
    gapYear12: 0,
    gapYearUG: 0,
  })

  const [show, setShow] = useState(false)

  const handleOneNext = (values: FormOneData) => {
    setStep((prevStep) => prevStep + 1)
    setValue((prevValue) => prevValue + 25)
    setFormOneData(values)
  }

  const handleTwoNext = (values: FormTwoData) => {
    setStep((prevStep) => prevStep + 1)
    setValue((prevValue) => prevValue + 25)
    setFormTwoData(values)
  }

  const handleThreeNext = (values: FormThreeData) => {
    setStep((prevStep) => prevStep + 1)
    setValue((prevValue) => prevValue + 25)
    setFormThreeData(values)
  }

  const handleTwoBack = (values: FormTwoData) => {
    setStep((prevStep) => prevStep - 1)
    setValue((prevValue) => prevValue - 25)
    setFormTwoData({ ...values })
  }

  const handleThreeBack = (values: FormThreeData) => {
    setStep((prevStep) => prevStep - 1)
    setValue((prevValue) => prevValue - 25)
    setFormThreeData({ ...values })
  }

  const handleSubmit = () => {
    setStep((prevStep) => prevStep + 1)
    setValue((prevValue) => prevValue + 25)
    setShow(true)
  }

  const getFormContent = (currStep: number) => {
    switch (currStep) {
      case 0:
        return <FormOne data={formOneData} onNext={(values) => handleOneNext(values)} />
      case 1:
        return (
          <FormTwo
            data={formTwoData}
            onNext={(values) => handleTwoNext(values)}
            onBack={(values) => handleTwoBack(values)}
          />
        )
      case 2:
        return (
          <FormThree
            data={formThreeData}
            onNext={(values) => handleThreeNext(values)}
            onBack={(values) => handleThreeBack(values)}
          />
        )
      case 3:
        return <FormFour onSubmit={() => handleSubmit()} />
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
