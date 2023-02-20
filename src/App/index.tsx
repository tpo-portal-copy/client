import { Routes, Route } from 'react-router-dom'
import { Header } from '../components'
import SidebarLayout from '../components/SidebarLayout'
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
  StatisticsDetails,
} from '../pages'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-details-form" element={<StudentDetailsForm />} />
        <Route
          path="/"
          element={
            <SidebarLayout>
              <Dashboard />
            </SidebarLayout>
          }
        />
        <Route
          path="/drives"
          element={
            <SidebarLayout>
              <Drives />
            </SidebarLayout>
          }
        />
        <Route
          path="/experiences"
          element={
            <SidebarLayout>
              <Experiences />
            </SidebarLayout>
          }
        />
        <Route
          path="/experience-details/:id"
          element={
            <SidebarLayout>
              <ExperienceDetails />
            </SidebarLayout>
          }
        />

        <Route
          path="/statistics"
          element={
            <SidebarLayout>
              <Statistics />
            </SidebarLayout>
          }
        />
        <Route
          path="/statistics-details"
          element={
            <SidebarLayout>
              <StatisticsDetails />
            </SidebarLayout>
          }
        />
        <Route
          path="/resources"
          element={
            <SidebarLayout>
              <Resources />
            </SidebarLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <SidebarLayout>
              <Profile />
            </SidebarLayout>
          }
        />
        <Route path="/404" element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App
