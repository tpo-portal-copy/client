import { useState } from 'react'
import { Link as Links } from 'react-router-dom'
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
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styles from './StudentLoginForm.module.scss'

export default function StudentLoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const formik = useFormik({
    initialValues: {
      roll: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      roll: Yup.string()
        .required('Roll No. is required')
        .matches(/^[a-zA-Z0-9]+$/, 'Invalid roll no.'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const handleIconClick = () => {
    setShowPassword(!showPassword)
  }

  return (
    <form className={styles.form_container} onSubmit={formik.handleSubmit}>
      <VStack spacing={3}>
        <Input
          name="roll"
          placeholder="Roll No."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.roll}
        />
        {formik.touched.roll && formik.errors.roll ? (
          <Alert borderRadius={5} status="error">
            <AlertIcon />
            {formik.errors.roll.charAt(0).toUpperCase() + formik.errors.roll.slice(1)}
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
            {formik.errors.password.charAt(0).toUpperCase() + formik.errors.password.slice(1)}
          </Alert>
        ) : null}
        <Box className={styles.link_container}>
          <Text>Not Registered ?</Text>
          <Links className={styles.link} to="/signup">
            Register Here
          </Links>
        </Box>

        <Button
          background="linear-gradient(40deg,#45cafc,#303f9f)"
          color="white"
          _hover={{ background: 'linear-gradient(90deg,#45cafc,#303f9f)' }}
          className={styles.btn}
          width="100%"
          isDisabled={!formik.isValid}
          type="submit"
        >
          Login
        </Button>
      </VStack>
    </form>
  )
}
