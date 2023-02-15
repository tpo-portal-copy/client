import { Routes, Route, Navigate } from 'react-router-dom'
import { Header } from '../components'
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
  ResourceDetails,
} from '../pages'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-details-form" element={<StudentDetailsForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/drives" element={<Drives />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/experiences-details/:id" element={<ExperienceDetails />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources-details/:branchName" element={<ResourceDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/404" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
