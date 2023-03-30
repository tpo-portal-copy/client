import { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { HeaderLayout } from '../components'

import {
  Dashboard,
  Profile,
  Experiences,
  StudentDetailsForm,
  Login,
  Resources,
  Drives,
  Statistics,
  Page404,
  ExperienceDetails,
  ExperienceForm,
  ResourceDetails,
  AnnouncementForm,
  StatisticsDetails,
  ResultAnnouncement,
  Home,
  Register,
} from '../pages'
import {
  isAuthenticated,
  isStudentDetailsFormFilled,
  isStudentEligibleForPlacementOrIntern,
} from '../utils/functions'
import ProtectedRoute from '../Routes/ProtectedRoute'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    const scrollToTop = () => {
      window.document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    scrollToTop()
  }, [pathname])

  return (
    <Routes>
      <Route
        path="/home"
        element={
          <HeaderLayout>
            <Home />
          </HeaderLayout>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {isStudentDetailsFormFilled() === false && (
        <Route
          path="/student-details-form"
          element={
            <ProtectedRoute>
              <StudentDetailsForm />
            </ProtectedRoute>
          }
        />
      )}
      {isStudentEligibleForPlacementOrIntern() === true && (
        <>
          <Route
            path="/drives"
            element={
              <ProtectedRoute>
                <HeaderLayout>
                  <Drives />
                </HeaderLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/experience-form"
            element={
              <ProtectedRoute>
                <ExperienceForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/announcement-form"
            element={
              <ProtectedRoute>
                <AnnouncementForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/result-announcement"
            element={
              <ProtectedRoute>
                <ResultAnnouncement />
              </ProtectedRoute>
            }
          />{' '}
        </>
      )}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <HeaderLayout>
              <Dashboard />
            </HeaderLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/experiences"
        element={
          <ProtectedRoute>
            <HeaderLayout>
              <Experiences />
            </HeaderLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/experiences-details/:id"
        element={
          <ProtectedRoute>
            <HeaderLayout>
              <ExperienceDetails />
            </HeaderLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/statistics"
        element={
          <ProtectedRoute>
            <HeaderLayout>
              <Statistics />
            </HeaderLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/statistics-details/:company/:type"
        element={
          <ProtectedRoute>
            <HeaderLayout>
              <StatisticsDetails />
            </HeaderLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/resources"
        element={
          <ProtectedRoute>
            <HeaderLayout>
              <Resources />
            </HeaderLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/resources-details/:branchName"
        element={
          <ProtectedRoute>
            <HeaderLayout>
              <ResourceDetails />
            </HeaderLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <HeaderLayout>
              <Profile />
            </HeaderLayout>
          </ProtectedRoute>
        }
      />
      {isAuthenticated() ? (
        <Route path="/" element={<Navigate to="/dashboard" />} />
      ) : (
        <Route path="/" element={<Navigate to="/home" />} />
      )}
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default App
