import { useState } from 'react'
import { useNavigate, Link as Links } from 'react-router-dom'
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  Button,
  Box,
  Typography,
  Alert,
} from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)

  const formik = useFormik({
    initialValues: {
      roll: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      roll: Yup.string()
        .required('Roll No. is required')
        .matches('^[a-zA-Z0-9]+$', 'Invalid roll no.'),
      email: Yup.string()
        .email('Please enter a valid email')
        .required('Email is required')
        .matches(
          '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@nith.ac.in$',
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
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref('password')], 'Password must match'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={3}>
        <TextField
          name="roll"
          label="Roll No."
          value={formik.values.roll}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.roll && formik.errors.roll ? (
          <Alert severity="error">
            {formik.errors.roll.charAt(0).toUpperCase() + formik.errors.roll.slice(1)}
          </Alert>
        ) : null}
        <TextField
          name="email"
          label="College ID"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <Alert severity="error">
            {formik.errors.email.charAt(0).toUpperCase() + formik.errors.email.slice(1)}
          </Alert>
        ) : null}

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {/* <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} /> */}
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <Alert severity="error">
            {formik.errors.password.charAt(0).toUpperCase() + formik.errors.password.slice(1)}
          </Alert>
        ) : null}
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {/* <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} /> */}
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <Alert severity="error">
            {formik.errors.confirmPassword.charAt(0).toUpperCase() +
              formik.errors.confirmPassword.slice(1)}
          </Alert>
        ) : null}
      </Stack>

      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '15px' }}>
        <Typography>Already Registered ?</Typography>
        <Links style={{ paddingLeft: '10px' }} to="/login">
          Login Here
        </Links>
      </Box>

      <Box sx={{ paddingTop: '20px' }}>
        <Button fullWidth size="large" type="submit" variant="contained">
          Register
        </Button>
      </Box>
    </form>
  )
}
