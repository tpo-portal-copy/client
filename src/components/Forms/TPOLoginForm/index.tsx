import { useState } from 'react'
import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Button,
  Box,
  Alert,
  Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const useStyles = makeStyles({
  showPwd: {
    fontSize: '5px',
  },
})

export default function TPOLoginForm() {
  const classes = useStyles()

  const [showPassword, setShowPassword] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Please enter a valid email')
        .required('Email is required')
        .matches(/^[tpo@nith.ac.in]+$/, 'Please enter TPO official id'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={3}>
        <TextField
          name="email"
          label="TPO ID"
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
                  <Typography className={classes.showPwd}> Show Password</Typography>
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
      </Stack>

      <Box sx={{ paddingTop: '20px' }}>
        <Button disabled={!formik.isValid} fullWidth size="large" type="submit" variant="contained">
          Login
        </Button>
      </Box>
    </form>
  )
}
