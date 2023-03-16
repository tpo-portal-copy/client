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
  const [formOneData, setFormOneData] = useState<FormOneData>({
    first_name: '',
    middle_name: '',
    last_name: '',
    dob: '',
    state: '',
    city: '',
    pincode: undefined,
    personal_email: '',
    gender: '',
    category: '',
    pnumber: '',
    linkedin: '',
    pwd: false,
    disability_type: 'Others',
  })

  const [formTwoData, setFormTwoData] = useState<FormTwoData>({
    class_10_year: undefined,
    class_10_school: '',
    class_10_board: '',
    class_10_perc: undefined,
    class_12_year: undefined,
    class_12_school: '',
    class_12_board: '',
    class_12_perc: undefined,
    jee_mains_rank: undefined,
  })

  const [formThreeData, setFormThreeData] = useState<FormThreeData>({
    course: '',
    branch: '',
    cgpi: undefined,
    active_backlog: undefined,
    total_backlog: undefined,
    gate_score: undefined,
    cat_score: undefined,
    batch_year: undefined,
    passing_year: undefined,
    current_year: undefined,
    gap_12_ug: undefined,
    gap_ug_pg: undefined,
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
            <Text className={styles.tag_line}>You have successfully submitted your details.</Text>{' '}
          </div>
        ) : (
          <>{getFormContent(step)}</>
        )}
      </div>
    </div>
  )
}
