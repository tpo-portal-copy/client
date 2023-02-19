import { useState } from 'react'
import { VStack, Alert, AlertIcon, Button, Checkbox } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FormOneProps } from '../../../../utils/types'
import ImgUploader from '../../../ImgUploader'
import styles from './FormOne.module.scss'
import { Input, Select } from '../../../index'

const genderData = [
  { id: 1, value: 'Male' },
  { id: 2, value: 'Female' },
  { id: 3, value: 'Other' },
]

const categoryData = [
  { id: 1, value: 'Gen' },
  { id: 2, value: 'Gen-EWS' },
  { id: 3, value: 'OBC' },
  { id: 4, value: 'SC/ST' },
]

const disabilityTypes = [
  { id: 1, value: 'Hearing Impairment' },
  { id: 2, value: 'Visual Impairment' },
  { id: 3, value: 'Mobility Impairment' },
  {
    id: 4,
    value: 'Speech Impairment',
  },
  {
    id: 5,
    value: 'Cognitive Impairment',
  },
  {
    id: 6,
    value: 'Others',
  },
]

export default function FormOne({ onNext, data }: FormOneProps) {
  const [showDisability, setShowDisability] = useState(false)
  const formik = useFormik({
    initialValues: {
      ...data,
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required('*Required'),
      middleName: Yup.string(),
      lastName: Yup.string().required('*Required'),
      dob: Yup.date().required('*Required'),
      state: Yup.string().required('*Required'),
      city: Yup.string().required('*Required'),
      pincode: Yup.number().typeError('Should be integer').required('*Required'),
      personalEmail: Yup.string().email('Enter a valid email').required('*Required'),
      gender: Yup.string().required('*Required'),
      category: Yup.string().required(),
      phone: Yup.string().matches(/^(\+91)?[6-9]\d{9}$/, 'Invalid Phone Number'),
      linkedin: Yup.string().url('Should be a valid link').required('*Required'),
      isPwd: Yup.boolean(),
      disabilityTypes: Yup.string(),
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
            name="firstName"
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.firstName}
            </Alert>
          ) : null}

          <Input
            name="middleName"
            placeholder="Middle Name"
            value={formik.values.middleName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.middleName && formik.errors.middleName ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.middleName}
            </Alert>
          ) : null}

          <Input
            name="lastName"
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.lastName}
            </Alert>
          ) : null}

          <Input
            name="dob"
            type="date"
            placeholder="DOB"
            value={formik.values.dob}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.dob && formik.errors.dob ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.dob}
            </Alert>
          ) : null}

          <Input
            name="state"
            placeholder="State"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.state && formik.errors.state ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.state}
            </Alert>
          ) : null}

          <Input
            name="city"
            placeholder="City"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.city && formik.errors.city ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.city}
            </Alert>
          ) : null}

          <Input
            name="pincode"
            placeholder="Pin Code"
            value={formik.values.pincode || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.pincode && formik.errors.pincode ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.pincode}
            </Alert>
          ) : null}

          <Input
            name="personalEmail"
            placeholder="Personal Email"
            value={formik.values.personalEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.personalEmail && formik.errors.personalEmail ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.personalEmail}
            </Alert>
          ) : null}
          <Select
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="gender"
            placeholder="Gender"
          >
            {genderData.map((datas) => (
              <option key={datas.id}>{datas.value}</option>
            ))}
          </Select>
          {formik.touched.gender && formik.errors.gender ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.gender}
            </Alert>
          ) : null}

          <Select
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="category"
            placeholder="Category"
          >
            {categoryData.map((datas) => (
              <option key={datas.id}>{datas.value}</option>
            ))}
          </Select>
          {formik.touched.category && formik.errors.category ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.category}
            </Alert>
          ) : null}

          <div className={styles.is_disabled}>
            <Checkbox
              name="isPwd"
              onChange={(e) => {
                formik.handleChange(e)
                setShowDisability(!showDisability)
              }}
              isChecked={formik.values.isPwd}
              value={formik.values.isPwd.toString()}
              onBlur={formik.handleBlur}
            >
              Is PwD ?
            </Checkbox>
          </div>

          {formik.touched.isPwd && formik.errors.isPwd ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.isPwd}
            </Alert>
          ) : null}

          {showDisability ? (
            <Select
              value={formik.values.disabilityTypes}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="disabilityTypes"
              placeholder="Disability Types"
            >
              {disabilityTypes.map((datas) => (
                <option key={datas.id}>{datas.value}</option>
              ))}
            </Select>
          ) : null}

          <Input
            name="phone"
            placeholder="Phone"
            value={formik.values.phone || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.phone}
            </Alert>
          ) : null}

          <Input
            name="linkedin"
            placeholder="Linkedin"
            value={formik.values.linkedin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.linkedin && formik.errors.linkedin ? (
            <Alert borderRadius={5} status="error">
              <AlertIcon />
              {formik.errors.linkedin}
            </Alert>
          ) : null}

          <ImgUploader />

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
