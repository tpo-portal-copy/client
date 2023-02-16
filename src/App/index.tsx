import { Routes, Route, Navigate } from 'react-router-dom'
import { HeaderLayout } from '../components'
import {
  Dashboard,
  Profile,
  Experiences,
  StudentDetailsForm,
  Login,
  Signup,
  Resources,
  Drives,
  Statistics,
  Page404,
  ExperienceDetails,
  ExperienceForm,
  ResourceDetails,
} from '../pages'

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student-details-form" element={<StudentDetailsForm />} />
      <Route path="/experience-form" element={<ExperienceForm />} />
      <Route
        path="/dashboard"
        element={
          <HeaderLayout>
            <Dashboard />
          </HeaderLayout>
        }
      />
      <Route
        path="/drives"
        element={
          <HeaderLayout>
            <Drives />
          </HeaderLayout>
        }
      />
      <Route
        path="/experiences"
        element={
          <HeaderLayout>
            <Experiences />
          </HeaderLayout>
        }
      />
      <Route
        path="/experiences-details/:id"
        element={
          <HeaderLayout>
            <ExperienceDetails />
          </HeaderLayout>
        }
      />
      <Route
        path="/statistics"
        element={
          <HeaderLayout>
            <Statistics />
          </HeaderLayout>
        }
      />
      <Route
        path="/resources"
        element={
          <HeaderLayout>
            <Resources />
          </HeaderLayout>
        }
      />
      <Route
        path="/resources-details/:branchName"
        element={
          <HeaderLayout>
            <ResourceDetails />
          </HeaderLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <HeaderLayout>
            <Profile />
          </HeaderLayout>
        }
      />
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route
        path="/404"
        element={
          <HeaderLayout>
            <Page404 />
          </HeaderLayout>
        }
      />
    </Routes>
  )
}

export default App
