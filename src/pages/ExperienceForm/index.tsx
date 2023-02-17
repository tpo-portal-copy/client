import { Button, VStack, Text, Alert, AlertIcon } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import Lottie from 'lottie-react'
import ReactQuill from 'react-quill'
import Animation from '../../assets/animations/103081-yoga-2.json'
import Loading from '../../assets/animations/81544-rolling-check-mark.json'
import styles from './ExperienceForm.module.scss'
import 'react-quill/dist/quill.snow.css'
import { Input, Select } from '../../components'

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
            <Text className={styles.tag_line}>Thanks for sharing your valuable experience</Text>{' '}
          </div>
        ) : (
          <>
            <h1 className={styles.heading}>Share Your Experience</h1>
            <form onSubmit={formik.handleSubmit} className={styles.form_container}>
              <VStack align="stretch" spacing={4}>
                <>
                  <Input
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name="companyName"
                    placeholder="Company Name"
                    value={formik.values.companyName}
                  />
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
                    {difficultyData.map((data) => (
                      <option key={data.id}>{data.value}</option>
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
                    {roleData.map((data) => (
                      <option key={data.id}>{data.value}</option>
                    ))}
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
                    {typeData.map((data) => (
                      <option key={data.id}>{data.value}</option>
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
                    {verdictData.map((data) => (
                      <option key={data.id}>{data.value}</option>
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
                    {anonymousData.map((data) => (
                      <option key={data.id}>{data.value}</option>
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
                    colorScheme="blue"
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
