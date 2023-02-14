import { Routes, Route } from 'react-router-dom'
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
        <Route path="/" element={<Dashboard />} />
        <Route path="/drives" element={<Drives />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/experience-details/:id" element={<ExperienceDetails />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
