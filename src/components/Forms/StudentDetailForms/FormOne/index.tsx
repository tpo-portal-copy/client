import { useState } from 'react'
import { Button, Checkbox } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FormOneProps } from '../../../../utils/types'
import ImgUploader from '../../../ImgUploader'
import styles from './FormOne.module.scss'
import { Error, Input, Select } from '../../../index'
import useStates from '../../../../hooks/useStates'
import { citiesAPI } from '../../../../utils/apis'

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
    value: 'Other',
  },
]

export default function FormOne({ onNext, data }: FormOneProps) {
  const [showDisability, setShowDisability] = useState(data.pwd)
  const { data: statesData, isSuccess: isStateSuccess } = useStates()
  const [cities, setCities] = useState([])

  const formik = useFormik({
    initialValues: {
      ...data,
    },
    validationSchema: Yup.object().shape({
      first_name: Yup.string().required('First Name is required.'),
      middle_name: Yup.string(),
      last_name: Yup.string().required('Last Name is required.'),
      dob: Yup.date().required('DOB Name is required.'),
      state: Yup.string().required('State is required.'),
      city_write: Yup.string().required('City is required.'),
      pincode: Yup.number()
        .integer('Pincode must be an integer.')
        .typeError('Pincode must be an integer.')
        .required('Pincode is required.'),
      personal_email: Yup.string()
        .email('Enter a valid email')
        .required('Personal Email is required.'),
      gender: Yup.string().required('Gender is required.'),
      category: Yup.string().required('Category is required.'),
      pnumber: Yup.string()
        .matches(/^(\+91)?[6-9]\d{9}$/, 'Invalid Phone Number')
        .required('Phone number is required.'),
      linkedin: Yup.string()
        .url('LinkedIn profile link must be a valid link.')
        .required('LinkedIn profile link is required.'),
      pwd: Yup.boolean(),
      disability_type: Yup.string(),
      disability_percentage: Yup.number().min(0).max(100),
    }),
    onSubmit: (values) => {
      onNext(values)
    },
  })

  const handleStateChange = async (e: any) => {
    formik.setFieldValue('state', e.target.value)
    const res = await citiesAPI.get(`${e.target.value}`)
    setCities(res.data)
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <h2 className={styles.title}>Basic Details</h2>
        <div className={styles.field}>
          <Input
            name="first_name"
            placeholder="First Name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.first_name && formik.errors.first_name ? (
            <Error errorMessage={formik.errors.first_name} />
          ) : null}
        </div>
        <div className={styles.field}>
          <Input
            name="middle_name"
            placeholder="Middle Name"
            value={formik.values.middle_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.middle_name && formik.errors.middle_name ? (
            <Error errorMessage={formik.errors.middle_name} />
          ) : null}
        </div>
        <div className={styles.field}>
          <Input
            name="last_name"
            placeholder="Last Name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.last_name && formik.errors.last_name ? (
            <Error errorMessage={formik.errors.last_name} />
          ) : null}
        </div>
        <div className={styles.field}>
          <Input
            name="dob"
            type="date"
            placeholder="DOB"
            value={formik.values.dob}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.dob && formik.errors.dob ? (
            <Error errorMessage={formik.errors.dob} />
          ) : null}
        </div>
        <div className={styles.field}>
          {isStateSuccess && (
            <Select
              value={formik.values.state}
              onChange={(e) => handleStateChange(e)}
              onBlur={formik.handleBlur}
              name="state"
              placeholder="State"
            >
              {statesData.map((datas: string) => (
                <option key={datas}>{datas}</option>
              ))}
            </Select>
          )}
          {formik.touched.state && formik.errors.state ? (
            <Error errorMessage={formik.errors.state} />
          ) : null}
        </div>
        <div className={styles.field}>
          <Select
            value={formik.values.city_write}
            onChange={(e) => formik.setFieldValue('city_write', e.target.value)}
            onBlur={formik.handleBlur}
            name="city_write"
            placeholder="City"
          >
            {cities.length !== 0 &&
              cities.map((datas: any) => (
                <option value={datas.id} key={datas.id}>
                  {datas.name}
                </option>
              ))}
          </Select>
          {formik.touched.city_write && formik.errors.city_write ? (
            <Error errorMessage={formik.errors.city_write} />
          ) : null}
        </div>
        <div className={styles.field}>
          <Input
            name="pincode"
            placeholder="Pin Code"
            value={formik.values.pincode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.pincode && formik.errors.pincode ? (
            <Error errorMessage={formik.errors.pincode} />
          ) : null}
        </div>
        <div className={styles.field}>
          <Input
            name="personal_email"
            placeholder="Personal Email"
            value={formik.values.personal_email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.personal_email && formik.errors.personal_email ? (
            <Error errorMessage={formik.errors.personal_email} />
          ) : null}
        </div>
        <div className={`${styles.field} ${styles.dropdown}`}>
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
            <Error errorMessage={formik.errors.gender} />
          ) : null}
        </div>
        <div className={`${styles.field} ${styles.dropdown}`}>
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
            <Error errorMessage={formik.errors.category} />
          ) : null}
        </div>

        <div className={styles.is_disabled}>
          <Checkbox
            name="pwd"
            onChange={(e) => {
              formik.handleChange(e)
              setShowDisability(!showDisability)
            }}
            isChecked={formik.values.pwd}
            value={formik.values.pwd ? 'true' : 'false'}
            onBlur={formik.handleBlur}
          >
            Is PwD ?
          </Checkbox>
        </div>

        {showDisability ? (
          <div className={`${styles.field} ${styles.dropdown}`}>
            <Select
              value={formik.values.disability_type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="disability_type"
              placeholder="Disability Types"
            >
              {disabilityTypes.map((datas) => (
                <option key={datas.id}>{datas.value}</option>
              ))}
            </Select>
            <Input
              name="disability_percentage"
              placeholder="Disability Percentage"
              value={formik.values.disability_percentage}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.disability_percentage && formik.errors.disability_percentage ? (
              <Error errorMessage={formik.errors.disability_percentage} />
            ) : null}
          </div>
        ) : null}

        <div className={styles.field}>
          <Input
            name="pnumber"
            placeholder="Phone"
            value={formik.values.pnumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.pnumber && formik.errors.pnumber ? (
            <Error errorMessage={formik.errors.pnumber} />
          ) : null}
        </div>
        <div className={styles.field}>
          <Input
            name="linkedin"
            placeholder="Linkedin"
            value={formik.values.linkedin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.linkedin && formik.errors.linkedin ? (
            <Error errorMessage={formik.errors.linkedin} />
          ) : null}
        </div>

        <div className={styles.file_uploader}>
          <ImgUploader />
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
            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  )
}
