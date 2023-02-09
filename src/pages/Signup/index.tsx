/* eslint-disable react/no-children-prop */
import { styled } from '@mui/material/styles'
import { Link, Container, Typography, Divider, Stack, Button, Tabs, Tab, Box } from '@mui/material'
import Lottie from 'lottie-react'
import React from 'react'
import Animation from '../../assets/animations/119048-login-verification.json'
import SignupForm from '../../components/Forms/SignupForm'

const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: 'white',
}))

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: 'hsla(240,5%,41%,.2) 0px 7px 29px 0px',
  backgroundColor: theme.palette.background.default,
}))

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}))

export default function LoginPage() {
  const [value, setValue] = React.useState(0)


  return (
    <StyledRoot>
      <StyledSection>
        <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
          Hi, Welcome Back
        </Typography>
        {/* <img src="/assets/illustrations/illustration_login.png" alt="login" /> */}
        <Lottie animationData={Animation} />
      </StyledSection>
      <Container maxWidth="sm">
        <StyledContent>
          <Typography variant="h4" gutterBottom>
            Register with Sakha (Students)
          </Typography>
          <Box sx={{ paddingTop: '15px' }}>
            <SignupForm />
          </Box>
        </StyledContent>
      </Container>
    </StyledRoot>
  )
}

function TabPanel(props) {
  const { children, value, index } = props

  return value === index && <div>{children}</div>
}
