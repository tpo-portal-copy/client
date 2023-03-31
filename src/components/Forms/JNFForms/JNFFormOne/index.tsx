import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { JNFFormOneProps } from '../../../../utils/types'
import styles from './JNFFormOne.module.scss'
import { Input, Select, RadioSelect, Error } from '../../../index'

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
      companyName: Yup.string().required('Company Name is Required'),
      session: Yup.string().required('Session is required'),
      isPlacement: Yup.string(),
      isIntern: Yup.string(),
      modeOfHiring: Yup.string().required('Mode of hiring is required'),
      prePlacementTalk: Yup.string(),
      aptitudeTest: Yup.string(),
      technicalTest: Yup.string(),
      groupDiscussion: Yup.string(),
      personalInterview: Yup.string(),
      noOfPersonVisiting: Yup.number().positive('Number of person visiting should be positive'),
      jobLocation: Yup.string().required('Job Location is required'),
      tentativeDriveDate: Yup.date().required('Drive Date is required'),
    }),
    onSubmit: (values) => {
      onNext(values)
    },
  })

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>JNF Form</h2>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.field}>
          <Input
            name="companyName"
            placeholder="Company Name"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.companyName && formik.errors.companyName ? (
            <Error errorMessage={formik.errors.companyName} />
          ) : null}
        </div>
        <div className={styles.field}>
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
            <Error errorMessage={formik.errors.session} />
          ) : null}
        </div>
        <div className={styles.field}>
          <RadioSelect
            name="isPlacement"
            placeholder="Placement"
            value={placement}
            onChange={handlePlacementRadioButton}
            onBlur={formik.handleBlur}
          />
          {formik.touched.isPlacement && formik.errors.isPlacement ? (
            <Error errorMessage={formik.errors.isPlacement} />
          ) : null}
        </div>
        <div className={styles.field}>
          <RadioSelect
            name="isIntern"
            placeholder="Intern"
            value={intern}
            onChange={handleInternRadioButton}
            onBlur={formik.handleBlur}
          />
          {formik.touched.isIntern && formik.errors.isIntern ? (
            <Error errorMessage={formik.errors.isIntern} />
          ) : null}
        </div>

        <div className={styles.field}>
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
            <Error errorMessage={formik.errors.modeOfHiring} />
          ) : null}
        </div>

        <div className={styles.field}>
          <RadioSelect
            name="prePlacementTalk"
            placeholder="Pre Placement Talk"
            value={prePlacementTalk}
            onChange={handlePrePlacementTalkRadioButton}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className={styles.field}>
          <RadioSelect
            name="aptitudeTest"
            placeholder="Aptitude Test"
            value={aptitudeTest}
            onChange={handleAptitudeRadioButton}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className={styles.field}>
          <RadioSelect
            name="technicalTest"
            placeholder="Technical Test"
            value={technicalTest}
            onChange={handleTechnicalTestRadioButton}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className={styles.field}>
          <RadioSelect
            name="groupDiscussion"
            placeholder="Group Disscusion"
            value={groupDiscussion}
            onChange={handleGroupDiscussionRadioButton}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className={styles.field}>
          <RadioSelect
            name="personalInterview"
            placeholder="Personal Interview"
            value={personalInterview}
            onChange={handlePersonalInterviewRadioButton}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className={styles.field}>
          <Input
            name="noOfPersonVisiting"
            placeholder="Number of person Visitng"
            value={formik.values.noOfPersonVisiting || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.noOfPersonVisiting && formik.errors.noOfPersonVisiting ? (
            <Error errorMessage={formik.errors.noOfPersonVisiting} />
          ) : null}
        </div>

        <div className={styles.field}>
          <Input
            name="jobLocation"
            placeholder="Job Locations"
            value={formik.values.jobLocation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className={styles.field}>
          <Input
            name="tentativeDriveDate"
            type="date"
            placeholder="Tentative Drive Date"
            value={formik.values.tentativeDriveDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.tentativeDriveDate && formik.errors.tentativeDriveDate ? (
            <Error errorMessage={formik.errors.tentativeDriveDate} />
          ) : null}
        </div>

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
      </form>
    </div>
  )
}
