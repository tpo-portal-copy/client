import { useState } from 'react'
import { Link as Links, useNavigate } from 'react-router-dom'
import {
  Input,
  Text,
  VStack,
  Box,
  Button,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styles from './StudentRegisterForm.module.scss'
import { studentOtpAPI, studentRegisterAPI } from '../../../utils/apis'
import Error from '../../Error'

export default function StudentRegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showOtp, setShowOtp] = useState(false)
  const navigate = useNavigate()
  const toast = useToast()

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      password2: '',
      otp: '',
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
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password')], 'Password must match'),
      otp: Yup.number().max(6, 'OTP length exceeded'),
    }),
    onSubmit: async () => {
      try {
        await studentRegisterAPI.post('/', { ...formik.values })
        setShowOtp(true)
      } catch (err: any) {
        toast({
          title: 'Sign Up Failed',
          description: err.response.data.username,
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
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)

  const handleRequestOTP = async () => {
    try {
      setIsLoading(true)
      await studentOtpAPI.post('/verify/', {
        username: formik.values.username,
        otp: formik.values.otp,
      })

      setIsLoading(false)
      toast({
        title: 'User Registered Successfully....',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
      navigate('/login')
    } catch (err) {
      setIsLoading(false)
    }
  }

  const handleResendOtp = async () => {
    try {
      setIsResending(true)
      await studentOtpAPI.post('/resend/', {
        username: formik.values.username,
      })
      setIsResending(false)
      toast({
        title: 'OTP Resend Successfully....',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    } catch (err: any) {
      toast({
        title: 'Resend OTP Failed....',
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
      setIsResending(false)
    }
  }

  return (
    <form className={styles.form_container} onSubmit={formik.handleSubmit}>
      <VStack spacing={3}>
        {showOtp ? (
          <>
            <Text style={{ fontSize: '1.25rem' }}>
              Please enter the One-Time Password to verify your account
            </Text>
            <Text paddingBottom={4}>
              A One-Time Password has been sent to {formik.values.email}
            </Text>
            <Input
              placeholder="Enter OTP"
              name="otp"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {isResending ? (
              <p className={styles.resending}>Resending OTP....</p>
            ) : (
              <div className={styles.resend_container}>
                <button type="button" onClick={handleResendOtp} className={styles.resend_button}>
                  Resend OTP
                </button>
              </div>
            )}
            <Box height={2} />
            <Button
              background="linear-gradient(40deg,#45cafc,#303f9f)"
              color="white"
              _hover={{ background: 'linear-gradient(90deg,#45cafc,#303f9f)' }}
              className={styles.btn}
              width="100%"
              isLoading={isLoading}
              loadingText="Getting You On Board"
              isDisabled={isLoading}
              type="submit"
              onClick={handleRequestOTP}
            >
              Register
            </Button>
          </>
        ) : (
          <>
            <div style={{ width: '100%' }}>
              <Input
                name="username"
                placeholder="Roll No."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <Error errorMessage={formik.errors.username} />
              ) : null}
            </div>
            <div style={{ width: '100%' }}>
              <Input
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <Error errorMessage={formik.errors.email} />
              ) : null}
            </div>
            <div style={{ width: '100%' }}>
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
                <Error errorMessage={formik.errors.password} />
              ) : null}
            </div>
            <div style={{ width: '100%' }}>
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
                <Error errorMessage={formik.errors.password2} />
              ) : null}
            </div>

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
              isDisabled={!formik.isValid || formik.isSubmitting}
              isLoading={formik.isSubmitting}
              type="submit"
            >
              Request OTP
            </Button>
          </>
        )}
      </VStack>
    </form>
  )
}
