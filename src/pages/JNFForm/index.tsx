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
    const jnfFormObject = {
      company: jnfFormOneData.companyName,
      session: jnfFormOneData.session,
      is_placement: jnfFormOneData.isPlacement,
      is_intern: jnfFormOneData.isSummerIntern,
      is_six_months_intern: jnfFormOneData.isSixMonIntern,
      pre_placement_talk: jnfFormOneData.prePlacementTalk,
      aptitude_test: jnfFormOneData.aptitudeTest,
      technical_test: jnfFormOneData.technicalTest,
      group_discussion: jnfFormOneData.groupDiscussion,
      presonal_interview: jnfFormOneData.personalInterview,
      mode_of_hiring: jnfFormOneData.modeOfHiring,
      job_location: jnfFormOneData.jobLocation,
      tentative_drive_date: jnfFormOneData.tentativeDriveDate,
      no_of_persons_visiting: jnfFormOneData.noOfPersonVisiting,
    }

    if (jnfFormOneData.isPlacement) {
      const newPlacementProfiles = placementJobProfiles.map((profile) => {
        return {
          job_profile: profile.jobProfile,
          tentative_start: profile.tentativeJoiningDate,
          job_desc_pdf: null,
          cgpi: profile.cgpi,
          ctc: profile.ctc,
          eligible_batches: profile.eligibleBatches,
          has_intern: profile.hasIntern,
        }
      })

      const placementObject = {
        jnf_placement: newPlacementProfiles,
      }

      Object.assign(jnfFormObject, placementObject)
    }

    if (jnfFormOneData.isSummerIntern) {
      const newsummerInternProfiles = summerInternJobProfiles.map((profile) => {
        return {
          job_profile: profile.jobProfile,
          tentative_start: profile.tentativeJoiningDate,
          job_desc_pdf: null,
          cgpi: profile.cgpi,
          ctc_after_ppo: profile.ctc,
          eligible_batches: profile.eligibleBatches,
          stipend: profile.stipend,
          has_ppo: profile.isPPO,
          duration: profile.duration,
        }
      })

      const summerInternProfilesObject = {
        jnf_intern: newsummerInternProfiles,
      }

      Object.assign(jnfFormObject, summerInternProfilesObject)
    }

    if (jnfFormOneData.isSixMonIntern) {
      const newSixMonInternProfiles = sixMonInternJobProfiles.map((profile) => {
        return {
          job_profile: profile.jobProfile,
          tentative_start: profile.tentativeJoiningDate,
          job_desc_pdf: null,
          cgpi: profile.cgpi,
          stipend: profile.stipend,
          ctc_after_intern: profile.ctcAfterIntern,
          eligible_batches: profile.eligibleBatches,
        }
      })

      const sixMonInternObject = {
        jnf_six_months_intern: newSixMonInternProfiles,
      }

      Object.assign(jnfFormObject, sixMonInternObject)
    }

    const hrDetails = {
      hr_details: hrListDetails,
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
          <>
            <h2 className={styles.heading}>Fill Your Details Here</h2>
            {getFormContent(step)}
          </>
        )}
      </div>
    </div>
  )
}
