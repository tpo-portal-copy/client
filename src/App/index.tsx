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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} loader={scrollToTop} />
      <Route path="/login" element={<Login />} loader={scrollToTop} />
      <Route path="/student-details-form" element={<StudentDetailsForm />} loader={scrollToTop} />
      <Route path="/experience-form" element={<ExperienceForm />} loader={scrollToTop} />
      <Route
        path="/dashboard"
        element={
          <HeaderLayout>
            <Dashboard />
          </HeaderLayout>
        }
        loader={scrollToTop}
      />
      <Route
        path="/drives"
        element={
          <HeaderLayout>
            <Drives />
          </HeaderLayout>
        }
        loader={scrollToTop}
      />
      <Route
        path="/experiences"
        element={
          <HeaderLayout>
            <Experiences />
          </HeaderLayout>
        }
        loader={scrollToTop}
      />
      <Route
        path="/experiences-details/:id"
        element={
          <HeaderLayout>
            <ExperienceDetails />
          </HeaderLayout>
        }
        loader={scrollToTop}
      />
      <Route
        path="/statistics"
        element={
          <HeaderLayout>
            <Statistics />
          </HeaderLayout>
        }
        loader={scrollToTop}
      />
      <Route
        path="/resources"
        element={
          <HeaderLayout>
            <Resources />
          </HeaderLayout>
        }
        loader={scrollToTop}
      />
      <Route
        path="/resources-details/:branchName"
        element={
          <HeaderLayout>
            <ResourceDetails />
          </HeaderLayout>
        }
        loader={scrollToTop}
      />
      <Route
        path="/profile"
        element={
          <HeaderLayout>
            <Profile />
          </HeaderLayout>
        }
        loader={scrollToTop}
      />
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default App
