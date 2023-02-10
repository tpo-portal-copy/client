import { useState } from 'react'
import { Link as Links } from 'react-router-dom'
import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Button,
  Box,
  Typography,
  Alert,
} from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: '#1976D2',
    paddingLeft: '10px',
  },
  showPwd: {
    fontSize: '5px',
  },
})

export default function StudentLoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const classes = useStyles()

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

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={3}>
        <TextField
          name="roll"
          label="Roll No."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.roll}
        />
        {formik.touched.roll && formik.errors.roll ? (
          <Alert severity="error">
            {formik.errors.roll.charAt(0).toUpperCase() + formik.errors.roll.slice(1)}
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <Alert severity="error">
            {formik.errors.password.charAt(0).toUpperCase() + formik.errors.password.slice(1)}
          </Alert>
        ) : null}
      </Stack>

      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '15px' }}>
        <Typography>Not Registered ?</Typography>
        <Links className={classes.link} to="/signup">
          Register Here
        </Links>
      </Box>

      <Box sx={{ paddingTop: '20px' }}>
        <Button disabled={!formik.isValid} fullWidth size="large" type="submit" variant="contained">
          Login
        </Button>
      </Box>
    </form>
  )
}
