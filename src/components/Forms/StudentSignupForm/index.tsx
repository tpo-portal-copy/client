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
import styles from './SignupForm.module.scss'
import { studentRegisterAPI } from '../../../utils/apis'

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const toast = useToast()

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      password2: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required('Roll No. is required')
        .matches(/^[a-zA-Z0-9]+$/, 'Invalid roll no.'),
      email: Yup.string()
        .email('Please enter a valid email')
        .required('Email is required')
        .matches(
          /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@nith.ac.in$/,
          'Please enter your college id',
        ),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be of eight letters')
        .max(100, 'Password is too long')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s:]).*$/,
          'Password needs to have uppercase,lowercase,digit and a special character',
        ),
      password2: Yup.string()
        .required()
        .oneOf([Yup.ref('password')], 'Password must match'),
    }),
    onSubmit: async (values) => {
      try {
        const res = await studentRegisterAPI.post('/', { ...values })
        navigate('/login')
      } catch (err: any) {
        toast({
          title: 'Sign Up Failed',
          description: err.response.data.msg,
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

        <Input
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.email}
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

        <InputGroup>
          <Input
            name="password2"
            placeholder="Confirm Password"
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
        {formik.touched.password2 && formik.errors.password2 ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.password2}
          </Alert>
        ) : null}

        <Box className={styles.link_container}>
          <Text>Already Registered ?</Text>
          <Links className={styles.link} to="/login">
            Login Here
          </Links>
        </Box>

        <Button
          background="linear-gradient(40deg,#45cafc,#303f9f)"
          color="white"
          _hover={{ background: 'linear-gradient(90deg,#45cafc,#303f9f)' }}
          className={styles.btn}
          width="100%"
          isLoading={formik.isSubmitting}
          loadingText="Getting You On Board"
          isDisabled={!formik.isValid || formik.isSubmitting}
          type="submit"
        >
          Register
        </Button>
      </VStack>
    </form>
  )
}
