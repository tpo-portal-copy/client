/* eslint-disable no-param-reassign */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Text } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import ProgressBar from '../../components/ProgressBar'
import Animation from '../../assets/animations/136670-space.json'
import styles from './StudentDetailsForm.module.scss'
import { FormFour, FormOne, FormThree, FormTwo } from '../../components/Forms/StudentDetailForms'
import Loading from '../../assets/animations/81544-rolling-check-mark.json'
import { FormOneData, FormThreeData, FormTwoData } from '../../utils/types'
import { data } from '../../utils/Data/coursesAllowedData'
import { getDataFromLocalStorage } from '../../utils/functions'

export default function StudentDetailsForm() {
  const [value, setValue] = useState(0)
  const [step, setStep] = useState(0)
  const [formOneData, setFormOneData] = useState<FormOneData>({
    first_name: '',
    middle_name: '',
    last_name: '',
    dob: '',
    state: '',
    city_write: '',
    pincode: undefined,
    personal_email: '',
    gender: '',
    category: '',
    pnumber: '',
    linkedin: '',
    pwd: false,
    disability_type: 'Others',
    disability_percentage: undefined,
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
    class_12_domicile: '',
  })

  const [formThreeData, setFormThreeData] = useState<FormThreeData>({
    course: '',
    branch_write: '',
    cgpi: undefined,
    active_backlog: undefined,
    total_backlog: undefined,
    gate_score: undefined,
    cat_score: undefined,
    batch_year: undefined,
    passing_year: undefined,
    current_year: '',
    gap_12_ug: undefined,
    gap_ug_pg: undefined,
  })

  interface DataThreeProps {
    course: string
    year: number | undefined
  }

  const [show, setShow] = useState(false)
  const [dataUptoThree, setDataUptoThree] = useState<DataThreeProps>({ course: '', year: 0 })
  const navigate = useNavigate()

  const extractGender = (gender: string) => {
    switch (gender) {
      case 'Male':
        return 'm'
      case 'Female':
        return 'f'
      default:
        return 'o'
    }
  }

  const extractDisabilityType = (disability: string) => {
    switch (disability) {
      case 'Hearing Impairment':
        return 'HEARING_IMPAIRMENT'
      case 'Visual Impairment':
        return 'VISUAL_IMPAIRMENT'
      case 'Mobility Impairment':
        return 'MOBILITY_IMPAIRMENT'
      case 'Speech Impairment':
        return 'SPEECH_IMPAIRMENT'
      case 'Cognitive Impairment':
        return 'COGNITIVE_IMPAIRMENT'
      default:
        return 'OTHER'
    }
  }

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

  const handleThreeNext = async (values: FormThreeData) => {
    if (values.gap_12_ug === undefined) {
      delete values.gap_12_ug
    }

    if (values.gap_ug_pg === undefined) {
      delete values.gap_ug_pg
    }
    setValue((prevValue) => prevValue + 25)
    setFormThreeData(values)

    try {
      const parsedObj = JSON.parse(values.course)

      setDataUptoThree({
        course: parsedObj.name,
        year: parseInt(values.current_year, 10),
      })
      setStep((prevStep) => prevStep + 1)

      await axios.post('http://sakhanithnith.pagekite.me/student/', {
        ...formOneData,
        ...formTwoData,
        ...values,
        roll: '193092',
        gender: extractGender(formOneData.gender),
        disability_type: extractDisabilityType(formOneData.disability_type),
        course: parsedObj.id,
        current_year: parseInt(values.current_year, 10),
      })
    } catch (err) {
      console.log(err)
    }
  }

  const idx = data.findIndex(
    (i) => i.course === dataUptoThree.course && i.year === dataUptoThree.year,
  )

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

  const handleSubmit = async (values: any) => {
    const clusterObj = {}
    let i = 1
    let j = 1
    Object.entries(values).forEach(([key, entryValue]) => {
      if (key.includes('cluster')) {
        if (entryValue) {
          Object.assign(clusterObj, { [`cluster_${j}`]: i })
          j += 1
        }
        i += 1
      }
    })

    const placementObj = {
      roll: '193092',
      student: '193092',
      cluster: {
        ...clusterObj,
      },
      resume: values.resume,
      undertaking: values.undertaking,
    }

    const internObj = {
      roll: '21mcs001',
      student: '21mcs001',
      resume: values.resume,
    }

    const notSittingObj = {
      roll: '21mcs004',
      student: '21mcs004',
      reason: values.reason,
    }

    try {
      if (data[idx].type_allowed === 'intern') {
        await axios.post('https://sakhanithnith.pagekite.me/student/detailintern/', {
          ...internObj,
        })
      } else if (data[idx].type_allowed === 'placement') {
        if (values.interested === 'yes') {
          await axios.post('https://sakhanithnith.pagekite.me/student/detailplacement/', {
            ...placementObj,
          })
        } else {
          await axios.post('https://sakhanithnith.pagekite.me/student/detailnotsitting/', {
            ...notSittingObj,
          })
        }
      }

      const res = await axios.post('https://sakhanithnith.pagekite.me/api/login/refresh/', {
        refresh: getDataFromLocalStorage('refresh_token'),
      })

      console.log(res)

      setStep((prevStep) => prevStep + 1)
      setValue((prevValue) => prevValue + 25)
      setShow(true)
      setTimeout(() => {
        navigate('/dashboard')
      }, 2000)
    } catch (err) {
      console.log(err)
    }
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
        return (
          <FormFour
            course={dataUptoThree.course}
            year={dataUptoThree.year}
            onSubmit={(values) => handleSubmit(values)}
          />
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
            <Text className={styles.tag_line}>You have successfully submitted your details.</Text>{' '}
          </div>
        ) : (
          <>{getFormContent(step)}</>
        )}
      </div>
    </div>
  )
}
