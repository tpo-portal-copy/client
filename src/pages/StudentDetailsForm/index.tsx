import { useState, Fragment } from 'react'
import {
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  CardHeader,
  Button,
  Link,
  Container,
  Typography,
  Divider,
  Stack,
  Box,
  Grid,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'
import Lottie from 'react-lottie'
import { FormOne, FormTwo, FormThree, FormFour } from '../../components/StudentDetailForms'
import CustomizedSteppers from '../../components/Stepper'
import Animation from '../../assets/animations/81544-rolling-check-mark.json'

const steps = ['Basic Info', 'Education', 'College', 'Clusters']

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: Animation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

function renderStepContent(step) {
  switch (step) {
    case 0:
      return <FormOne />
    case 1:
      return <FormTwo />
    case 2:
      return <FormThree />
    case 3:
      return <FormFour />
    default:
      return <Lottie options={defaultOptions} />
  }
}

const useStyles = makeStyles({
  container: {
    width: '600px',
    padding: '20px',
  },
  stepper: {},
})

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}))

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  backgroundColor: 'white',
  boxShadow: 'hsla(240,5%,41%,.2) 0px 7px 29px 0px',
}))

const StyledContent = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}))

// ----------------------------------------------------------------------

export default function LoginPage() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }
  return (
    <StyledRoot>
      <StyledSection>
        <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
          Your Details
        </Typography>
        <Grid container justifyContent="center" alignItems="center">
          <CustomizedSteppers handleNext={handleNext} handleBack={handleBack} currStep={activeStep} />
        </Grid>
      </StyledSection>

      <Container maxWidth="sm">
        <StyledContent>
          {renderStepContent(activeStep)}
          <Box sx={{ padding: '20px' }}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => setActiveStep(activeStep + 1)}
            >
              Click
            </Button>
          </Box>
        </StyledContent>
      </Container>
    </StyledRoot>
  )
}
