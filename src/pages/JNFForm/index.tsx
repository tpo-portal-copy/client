import { useState } from 'react'
import { Text, useToast } from '@chakra-ui/react'
import Lottie from 'lottie-react'
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
  PlacementJobProfile,
  SummerInternJobProfile,
  SixMonInternJobProfile,
  HR,
} from '../../utils/types'
import { getCurrentSession } from '../../utils/functions'
import { BooleanValue } from '../../utils/constants'
import { addJnfAPI } from '../../utils/apis'

export default function JNFForm() {
  const [step, setStep] = useState(0)
  const toast = useToast()
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
    noOfPersonVisiting: 0,
    jobLocation: '',
    tentativeDriveDate: '',
  })

  const [placementJobProfiles, setPlacementJobProfiles] = useState<Array<PlacementJobProfile>>([])
  const [summerInternJobProfiles, setSummerInternJobProfiles] = useState<
    Array<SummerInternJobProfile>
  >([])
  const [sixMonInternJobProfiles, setSixMonInternJobProfiles] = useState<
    Array<SixMonInternJobProfile>
  >([])

  const [hrList, setHrList] = useState<Array<HR>>([])

  const [show, setShow] = useState(false)

  const handleOneNext = (values: JNFFormOneData) => {
    if (values.isPlacement === BooleanValue.TRUE) {
      setStep((prevStep) => prevStep + 1)
    } else if (values.isSummerIntern === BooleanValue.TRUE) {
      setStep((prevStep) => prevStep + 2)
    } else if (values.isSixMonIntern === BooleanValue.TRUE) {
      setStep((prevStep) => prevStep + 3)
    } else {
      setStep((prevStep) => prevStep + 4)
    }

    setJNFFormOneData(values)
  }

  const handleTwoNext = (jobProfilesData: PlacementJobProfile[]) => {
    if (jnfFormOneData.isSummerIntern === BooleanValue.TRUE) {
      setStep((prevStep) => prevStep + 1)
    } else if (jnfFormOneData.isSixMonIntern === BooleanValue.TRUE) {
      setStep((prevStep) => prevStep + 2)
    } else {
      setStep((prevStep) => prevStep + 3)
    }

    setPlacementJobProfiles(jobProfilesData)
  }

  const handleThreeNext = (jobProfilesData: SummerInternJobProfile[]) => {
    if (jnfFormOneData.isSixMonIntern === BooleanValue.TRUE) {
      setStep((prevStep) => prevStep + 1)
    } else {
      setStep((prevStep) => prevStep + 2)
    }

    setSummerInternJobProfiles(jobProfilesData)
  }

  const handleFourNext = (jobProfilesData: SixMonInternJobProfile[]) => {
    setStep((prevStep) => prevStep + 1)

    setSixMonInternJobProfiles(jobProfilesData)
  }

  const handleTwoBack = (jobProfilesData: PlacementJobProfile[]) => {
    setStep((prevStep) => prevStep - 1)

    setPlacementJobProfiles(jobProfilesData)
  }

  const handleThreeBack = (jobProfilesData: SummerInternJobProfile[]) => {
    if (jnfFormOneData.isPlacement === BooleanValue.TRUE) {
      setStep((prevStep) => prevStep - 1)
    } else {
      setStep((prevStep) => prevStep - 2)
    }

    setSummerInternJobProfiles(jobProfilesData)
  }

  const handleFourBack = (jobProfilesData: SixMonInternJobProfile[]) => {
    if (jnfFormOneData.isSummerIntern === BooleanValue.TRUE) {
      setStep((prevStep) => prevStep - 1)
    } else if (jnfFormOneData.isPlacement === BooleanValue.TRUE) {
      setStep((prevStep) => prevStep - 2)
    } else {
      setStep((prevStep) => prevStep - 3)
    }

    setSixMonInternJobProfiles(jobProfilesData)
  }

  const handleFiveBack = (hrListDetails: Array<HR>) => {
    if (jnfFormOneData.isSixMonIntern === BooleanValue.TRUE) {
      setStep((prevStep) => prevStep - 1)
    } else if (jnfFormOneData.isSummerIntern === BooleanValue.TRUE) {
      setStep((prevStep) => prevStep - 2)
    } else if (jnfFormOneData.isPlacement === BooleanValue.TRUE) {
      setStep((prevStep) => prevStep - 3)
    } else {
      setStep((prevStep) => prevStep - 4)
    }

    setHrList(hrListDetails)
  }

  const handleSubmit = async (hrListDetails: Array<HR>) => {
    const jnfFormObject = { ...jnfFormOneData }

    if (jnfFormOneData.isPlacement) {
      const placementObject = {
        jnfPlacement: placementJobProfiles,
      }

      Object.assign(jnfFormObject, placementObject)
    }

    if (jnfFormOneData.isSummerIntern) {
      const summerInternProfilesObject = {
        jnfIntern: summerInternJobProfiles,
      }

      Object.assign(jnfFormObject, summerInternProfilesObject)
    }

    if (jnfFormOneData.isSixMonIntern) {
      const sixMonInternObject = {
        jnfSixMonthsIntern: sixMonInternJobProfiles,
      }

      Object.assign(jnfFormObject, sixMonInternObject)
    }

    const hrDetails = {
      hrDetails: hrListDetails,
    }

    Object.assign(jnfFormObject, hrDetails)

    try {
      await addJnfAPI.post('/', jnfFormObject)
      setStep((prevStep) => prevStep + 1)
      setShow(true)
    } catch (err) {
      toast({
        title: 'Something went wrong...',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const getFormContent = (currStep: number) => {
    switch (currStep) {
      case 0:
        return <JNFFormOne data={jnfFormOneData} onNext={handleOneNext} />
      case 1:
        return (
          <JNFFormTwo data={placementJobProfiles} onNext={handleTwoNext} onBack={handleTwoBack} />
        )
      case 2:
        return (
          <JNFFormThree
            data={summerInternJobProfiles}
            onNext={handleThreeNext}
            onBack={handleThreeBack}
          />
        )
      case 3:
        return (
          <JNFFormFour
            data={sixMonInternJobProfiles}
            onNext={handleFourNext}
            onBack={handleFourBack}
          />
        )
      case 4:
        return <JNFFormFive data={hrList} onSubmit={handleSubmit} onBack={handleFiveBack} />
      default:
        return null
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {show ? (
          <div className={styles.animation_container}>
            <Lottie
              loop={false}
              autoPlay={false}
              animationData={Loading}
              className={styles.animation}
            />
            <Text className={styles.tag_line}>You have successfully submitted your details</Text>
          </div>
        ) : (
          <>{getFormContent(step)}</>
        )}
      </div>
    </div>
  )
}
