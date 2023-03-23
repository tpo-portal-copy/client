import { useState } from 'react'
import { VStack, Alert, AlertIcon, Button } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { JNFFormOneProps } from '../../../../utils/types'
import styles from './JNFFormOne.module.scss'
import { Input, Select, RadioSelect } from '../../../index'

const sessionData = [
  { id: 0, value: '2020 - 2021' },
  { id: 1, value: '2021 - 2022' },
  { id: 2, value: '2022 - 2023' },
]

const ModeOfHiringData = [
  { id: 0, value: 'Virtual' },
  { id: 1, value: 'On Site' },
]

export default function JNFFormOne({ onNext, data }: JNFFormOneProps) {
  const [placement, setPlacement] = useState('')
  const [intern, setIntern] = useState('')
  const [prePlacementTalk, setPrePlacementTalk] = useState('')
  const [technicalTest, setTechnicalTest] = useState('')
  const [aptitudeTest, setAptitudeTest] = useState('')
  const [groupDiscussion, setGroupDiscussionTest] = useState('')
  const [personalInterview, setPersonalInterview] = useState('')

  const handlePlacementRadioButton = (value: string) => {
    setPlacement(value)
  }

  const handleInternRadioButton = (value: string) => {
    setIntern(value)
  }

  const handlePrePlacementTalkRadioButton = (value: string) => {
    setPrePlacementTalk(value)
  }

  const handleAptitudeRadioButton = (value: string) => {
    setAptitudeTest(value)
  }

  const handleTechnicalTestRadioButton = (value: string) => {
    setTechnicalTest(value)
  }

  const handleGroupDiscussionRadioButton = (value: string) => {
    setGroupDiscussionTest(value)
  }

  const handlePersonalInterviewRadioButton = (value: string) => {
    setPersonalInterview(value)
  }

  const formik = useFormik({
    initialValues: {
      ...data,
    },
    validationSchema: Yup.object().shape({
      companyName: Yup.string().required('*Required'),
      session: Yup.string().required('*Required'),
      isPlacement: Yup.string(),
      isIntern: Yup.string(),
      modeOfHiring: Yup.string().required('*Required'),
      prePlacementTalk: Yup.string(),
      aptitudeTest: Yup.string(),
      technicalTest: Yup.string(),
      groupDiscussion: Yup.string(),
      personalInterview: Yup.string(),
      noOfPersonVisiting: Yup.number().positive().required('*Required'),
      jobLocation: Yup.string().required('*Required'),
      tentativeDriveDate: Yup.date().required('Date is required'),
    }),
    onSubmit: (values) => {
      onNext(values)
    },
  })
  return (
    <div className={styles.container}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onSubmit={formik.handleSubmit}
      >
        <VStack w="100%" maxW="700px">
          <Input
            name="companyName"
            placeholder="Company Name"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.companyName && formik.errors.companyName ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.companyName}
            </Alert>
          ) : null}
          <Select
            value={formik.values.session}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="session"
            placeholder="Session"
          >
            {sessionData.map((session) => (
              <option key={session.id}>{session.value}</option>
            ))}
          </Select>
          {formik.touched.session && formik.errors.session ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.session}
            </Alert>
          ) : null}

          <RadioSelect
            name="isPlacement"
            placeholder="Placement"
            value={placement}
            onChange={handlePlacementRadioButton}
            onBlur={formik.handleBlur}
          />
          {formik.touched.isPlacement && formik.errors.isPlacement ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.isPlacement}
            </Alert>
          ) : null}

          <RadioSelect
            name="isIntern"
            placeholder="Intern"
            value={intern}
            onChange={handleInternRadioButton}
            onBlur={formik.handleBlur}
          />

          {formik.touched.isIntern && formik.errors.isIntern ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.isIntern}
            </Alert>
          ) : null}

          <Select
            value={formik.values.modeOfHiring}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="modeOfHiring"
            placeholder="Mode of Hiring"
          >
            {ModeOfHiringData.map((ModeOfHiring) => (
              <option key={ModeOfHiring.id}>{ModeOfHiring.value}</option>
            ))}
          </Select>

          {formik.touched.modeOfHiring && formik.errors.modeOfHiring ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.modeOfHiring}
            </Alert>
          ) : null}

          <RadioSelect
            name="prePlacementTalk"
            placeholder="Pre Placement Talk"
            value={prePlacementTalk}
            onChange={handlePrePlacementTalkRadioButton}
            onBlur={formik.handleBlur}
          />

          <RadioSelect
            name="aptitudeTest"
            placeholder="Aptitude Test"
            value={aptitudeTest}
            onChange={handleAptitudeRadioButton}
            onBlur={formik.handleBlur}
          />

          <RadioSelect
            name="technicalTest"
            placeholder="Technical Test"
            value={technicalTest}
            onChange={handleTechnicalTestRadioButton}
            onBlur={formik.handleBlur}
          />

          <RadioSelect
            name="groupDiscussion"
            placeholder="Group Disscusion"
            value={groupDiscussion}
            onChange={handleGroupDiscussionRadioButton}
            onBlur={formik.handleBlur}
          />

          <RadioSelect
            name="personalInterview"
            placeholder="Personal Interview"
            value={personalInterview}
            onChange={handlePersonalInterviewRadioButton}
            onBlur={formik.handleBlur}
          />

          <Input
            name="noOfPersonVisiting"
            placeholder="Number of person Visitng"
            value={formik.values.noOfPersonVisiting || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.noOfPersonVisiting && formik.errors.noOfPersonVisiting ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.noOfPersonVisiting}
            </Alert>
          ) : null}

          <Input
            name="jobLocation"
            placeholder="Job Locations"
            value={formik.values.jobLocation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            name="tentativeDriveDate"
            type="date"
            placeholder="Tentative Drive Date"
            value={formik.values.tentativeDriveDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className={styles.btn_container}>
            <Button
              background="linear-gradient(40deg,#45cafc,#303f9f)"
              color="white"
              _hover={{ background: 'linear-gradient(90deg,#45cafc,#303f9f)' }}
              className={styles.btn}
              isDisabled
              type="submit"
            >
              Back
            </Button>
            <Button
              background="linear-gradient(40deg,#45cafc,#303f9f)"
              color="white"
              _hover={{ background: 'linear-gradient(90deg,#45cafc,#303f9f)' }}
              className={styles.btn}
              isDisabled={!formik.isValid}
              type="submit"
            >
              Next
            </Button>
          </div>
        </VStack>
      </form>
    </div>
  )
}
