import { Routes, Route } from 'react-router-dom'
import { Header, Sidebar } from '../components'
import { Dashboard, Profile, InterviewExperience, Drives } from '../pages'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Sidebar />
      <div className={styles.pages}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/drives" element={<Drives />} />
          <Route path="/experiences" element={<InterviewExperience />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
