import React, { useState } from 'react'
import { Button, VStack, Text, Alert, AlertIcon, useToast } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Lottie from 'lottie-react'
import ReactQuill from 'react-quill'
import Animation from '../../assets/animations/103081-yoga-2.json'
import Loading from '../../assets/animations/81544-rolling-check-mark.json'
import 'react-quill/dist/quill.snow.css'
import { Input, Select } from '../../components'
import styles from './ExperienceForm.module.scss'
import { companiesAPI } from '../../utils/apis'
import useRoles from '../../hooks/useRoles'
import LoadingAnimation from '../../assets/animations/98770-assistagro-loading-bars.json'
import { Company } from '../../utils/types'

const roleData = [
  { id: 4, value: 'SDE' },
  { id: 5, value: 'GET' },
  { id: 6, value: 'Management Trainee' },
  { id: 7, value: 'Full Stack Developer' },
]

const typeData = [
  { id: 9, value: 'Intern' },
  { id: 10, value: 'Full Time' },
]

const verdictData = [
  {
    id: 16,
    value: 'Selected',
  },
  { id: 17, value: 'Not Selected' },
]

const anonymousData = [
  { id: 14, value: 'Yes' },
  { id: 15, value: 'No' },
]

const difficultyData = [
  { id: 16, value: 'Easy' },
  { id: 17, value: 'Medium' },
  { id: 18, value: 'Hard' },
]

export default function ExperienceForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)
  const [search, setSearch] = useState('')
  const toast = useToast()
  const { isError, data, isLoading: isRolesLoading, isSuccess, error } = useRoles()

  const formik = useFormik({
    initialValues: {
      companyName: '',
      difficulty: '',
      role: '',
      type: '',
      rounds: '',
      verdict: '',
      anonymous: '',
    },
    validationSchema: Yup.object().shape({
      companyName: Yup.string().required('*Required'),
      difficulty: Yup.string().required('*Required'),
      role: Yup.string().required('*Required'),
      type: Yup.string().required('*Required'),
      rounds: Yup.number().required('*Required').typeError('Should be an integer'),
      verdict: Yup.string().required('*Required'),
      anonymous: Yup.string().required('*Required'),
    }),
    onSubmit: (e, values) => {
      setIsLoading(!isLoading)
      setTimeout(() => {
        setIsLoading((prevState) => !prevState)
        setShowAnimation((state) => !state)
      }, 3000)
    },
  })
  const [value, setValue] = useState('')
  const [company, setCompany] = useState([])

  if (isRolesLoading || !isSuccess) {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Lottie style={{ height: '200px', width: '200px' }} animationData={LoadingAnimation} />
      </div>
    )
  }
  if (isSuccess) {
    console.log(data)
  }

  const handleSearch = async (e: any) => {
    formik.setFieldValue('companyName', e.target.value)
    const controller = new AbortController()
    const response = await companiesAPI.get('/', {
      signal: controller.signal,
      params: {
        search: e.target.value,
      },
    })

    controller.abort()
    setCompany(response.data)
  }

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.heading}>Share Your Experience</h2>
        <Lottie animationData={Animation} />
      </div>
      <div className={styles.content}>
        {showAnimation ? (
          <div className={styles.animation_container}>
            <Lottie
              loop={false}
              autoPlay={false}
              animationData={Loading}
              className={styles.animation}
            />
            <Text className={styles.tag_line}>Thankyou for sharing your valuable experience.</Text>{' '}
          </div>
        ) : (
          <>
            <h1 className={styles.heading}>Share Your Experience</h1>
            <form onSubmit={formik.handleSubmit} className={styles.form_container}>
              <VStack align="stretch" spacing={4}>
                <>
                  <Input
                    onBlur={formik.handleBlur}
                    onChange={(e) => handleSearch(e)}
                    name="companyName"
                    placeholder="Company Name"
                    value={formik.values.companyName}
                  />
                  {formik.values.companyName && (
                    <div
                      style={{ display: `${company.length === 0 ? 'none' : 'block'}` }}
                      className={styles.suggestions}
                    >
                      {company.map((companyData: Company) => (
                        <p style={{ padding: '5px' }} key={companyData.id}>
                          {companyData.name}
                        </p>
                      ))}
                    </div>
                  )}
                  {formik.touched.companyName && formik.errors.companyName ? (
                    <Alert borderRadius={5} status="error">
                      <AlertIcon />
                      {formik.errors.companyName}
                    </Alert>
                  ) : null}

                  <Select
                    value={formik.values.difficulty}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name="difficulty"
                    placeholder="Difficulty"
                  >
                    {difficultyData.map((diffData) => (
                      <option key={diffData.id}>{diffData.value}</option>
                    ))}
                  </Select>
                  {formik.touched.difficulty && formik.errors.difficulty ? (
                    <Alert borderRadius={5} status="error">
                      <AlertIcon />
                      {formik.errors.difficulty}
                    </Alert>
                  ) : null}
                  <Select
                    value={formik.values.role}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name="role"
                    placeholder="Role"
                  >
                    {/* {roles.map((data) => (
                      <option key={data}>{data}</option>
                    ))} */}
                  </Select>
                  {formik.touched.role && formik.errors.role ? (
                    <Alert borderRadius={5} status="error">
                      <AlertIcon />
                      {formik.errors.role}
                    </Alert>
                  ) : null}

                  <Select
                    value={formik.values.type}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name="type"
                    placeholder="Type"
                  >
                    {typeData.map((typeDatas) => (
                      <option key={typeDatas.id}>{typeDatas.value}</option>
                    ))}
                  </Select>
                  {formik.touched.type && formik.errors.type ? (
                    <Alert borderRadius={5} status="error">
                      <AlertIcon />
                      {formik.errors.type}
                    </Alert>
                  ) : null}
                  <Input
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name="rounds"
                    placeholder="Rounds"
                    value={formik.values.rounds}
                  />
                  {formik.touched.rounds && formik.errors.rounds ? (
                    <Alert borderRadius={5} status="error">
                      <AlertIcon />
                      {formik.errors.rounds}
                    </Alert>
                  ) : null}
                  <Select
                    value={formik.values.verdict}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name="verdict"
                    placeholder="Verdict"
                  >
                    {verdictData.map((verData) => (
                      <option key={verData.id}>{verData.value}</option>
                    ))}
                  </Select>
                  {formik.touched.verdict && formik.errors.verdict ? (
                    <Alert borderRadius={5} status="error">
                      <AlertIcon />
                      {formik.errors.verdict}
                    </Alert>
                  ) : null}
                  <Select
                    value={formik.values.anonymous}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name="anonymous"
                    placeholder="Anonymous"
                  >
                    {anonymousData.map((anonyData) => (
                      <option key={anonyData.id}>{anonyData.value}</option>
                    ))}
                  </Select>
                  {formik.touched.anonymous && formik.errors.anonymous ? (
                    <Alert borderRadius={5} status="error">
                      <AlertIcon />
                      {formik.errors.anonymous}
                    </Alert>
                  ) : null}

                  <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={(e) => setValue(e)}
                    onBlur={formik.handleBlur}
                    className={styles.description}
                  />

                  {value.length < 50 ? (
                    <Text color="blackAlpha.800" fontSize="md">
                      *Description should be of minimum 50 words
                    </Text>
                  ) : null}

                  <Button
                    background="linear-gradient(40deg,#45cafc,#303f9f)"
                    color="white"
                    _hover={{ background: 'linear-gradient(90deg,#45cafc,#303f9f)' }}
                    isLoading={isLoading}
                    type="submit"
                    isDisabled={!formik.isValid}
                  >
                    Submit Experience
                  </Button>
                </>
              </VStack>
            </form>{' '}
          </>
        )}
      </div>
    </div>
  )
}
