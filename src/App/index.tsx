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
import { getDataFromLocalStorage } from '../utils/functions'
import Protected from '../utils/Protected'

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
      <Route
        path="/student-details-form"
        element={
          <Protected>
            <StudentDetailsForm />
          </Protected>
        }
      />
      {getDataFromLocalStorage('eligible') !== 'NA' && (
        <>
          <Route
            path="/drives"
            element={
              <Protected>
                <HeaderLayout>
                  <Drives />
                </HeaderLayout>
              </Protected>
            }
          />
          <Route
            path="/experience-form"
            element={
              <Protected>
                <ExperienceForm />
              </Protected>
            }
          />
          <Route
            path="/announcement-form"
            element={
              <Protected>
                <AnnouncementForm />
              </Protected>
            }
          />
          <Route
            path="/result-announcement"
            element={
              <Protected>
                <ResultAnnouncement />
              </Protected>
            }
          />{' '}
        </>
      )}
      <Route
        path="/dashboard"
        element={
          <Protected>
            <HeaderLayout>
              <Dashboard />
            </HeaderLayout>
          </Protected>
        }
      />
      <Route
        path="/experiences"
        element={
          <Protected>
            <HeaderLayout>
              <Experiences />
            </HeaderLayout>
          </Protected>
        }
      />
      <Route
        path="/experiences-details/:id"
        element={
          <Protected>
            <HeaderLayout>
              <ExperienceDetails />
            </HeaderLayout>
          </Protected>
        }
      />
      <Route
        path="/statistics"
        element={
          <Protected>
            <HeaderLayout>
              <Statistics />
            </HeaderLayout>
          </Protected>
        }
      />
      <Route
        path="/statistics-details/:company/:type"
        element={
          <Protected>
            <HeaderLayout>
              <StatisticsDetails />
            </HeaderLayout>
          </Protected>
        }
      />
      <Route
        path="/resources"
        element={
          <Protected>
            <HeaderLayout>
              <Resources />
            </HeaderLayout>
          </Protected>
        }
      />
      <Route
        path="/resources-details/:branchName"
        element={
          <Protected>
            <HeaderLayout>
              <ResourceDetails />
            </HeaderLayout>
          </Protected>
        }
      />
      <Route
        path="/profile"
        element={
          <Protected>
            <HeaderLayout>
              <Profile />
            </HeaderLayout>
          </Protected>
        }
      />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default App
