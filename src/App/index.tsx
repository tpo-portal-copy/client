import { Routes, Route } from 'react-router-dom'
import { Header, Sidebar } from '../components'
import { Dashboard, Profile } from '../pages'
import IntExp from '../pages/InterviewExperience'
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
          <Route path="/experiences" element={<IntExp />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
