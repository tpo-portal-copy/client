import { useState } from 'react'
import { Link as Links, useNavigate } from 'react-router-dom'
import {
  Input,
  Text,
  VStack,
  Box,
  Button,
  Alert,
  AlertIcon,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import styles from './StudentLoginForm.module.scss'
import {
  getDataFromLocalStorage,
  isStudentDetailsFormFilled,
  setDataToLocalStorage,
} from '../../../utils/functions'
import { studentLoginAPI } from '../../../utils/apis'

export default function StudentLoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const toast = useToast()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required('Roll No. is required')
        .matches(/^[a-zA-Z0-9]+$/, 'Invalid roll no.'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const res = await studentLoginAPI.post('/', { ...values })
        const { access, refresh } = res.data

        setDataToLocalStorage('access_token', access)
        setDataToLocalStorage('refresh_token', refresh)

        const eligibilityRes = await axios.get(
          `https://sakhanithnith.pagekite.me/student/eligibility/${formik.values.username}`,

          {
            headers: {
              Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
            },
          },
        )
        const eligibility = eligibilityRes.data.eligible
        setDataToLocalStorage('eligibility', eligibility)

        if (isStudentDetailsFormFilled() === true) {
          navigate('/dashboard')
        } else {
          navigate('/student-details-form')
        }
      } catch (err: any) {
        toast({
          title: 'Login Failed....',
          description: err.response.data.detail,
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
      }
    },
  })

  const handleIconClick = () => {
    setShowPassword(!showPassword)
  }

  return (
    <form className={styles.form_container} onSubmit={formik.handleSubmit}>
      <VStack spacing={3}>
        <Input
          name="username"
          placeholder="Roll No."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.username}
          </Alert>
        ) : null}

        <InputGroup>
          <Input
            name="password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <InputRightElement>
            <Button onClick={handleIconClick}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </Button>
          </InputRightElement>
        </InputGroup>
        {formik.touched.password && formik.errors.password ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.password}
          </Alert>
        ) : null}
        <Box className={styles.link_container}>
          <Text>Not Registered ?</Text>
          <Links className={styles.link} to="/register">
            Register Here
          </Links>
        </Box>

        <Button
          background="linear-gradient(40deg,#45cafc,#303f9f)"
          color="white"
          _hover={{ background: 'linear-gradient(90deg,#45cafc,#303f9f)' }}
          className={styles.btn}
          width="100%"
          isDisabled={!formik.isValid || formik.isSubmitting}
          type="submit"
          isLoading={formik.isSubmitting}
          loadingText="Logging In...."
        >
          Login
        </Button>
      </VStack>
    </form>
  )
}
