import { Routes, Route } from 'react-router-dom'
import { Header, Sidebar } from '../components'
import { Dashboard, Profile, InterviewExperience, Form, Login } from '../pages'
import styles from './App.module.scss'
import Signup from '../pages/Signup'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Sidebar />
      <div className={styles.pages}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/student-details-form" element={<Form />} />
          <Route path="/experiences" element={<InterviewExperience />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
