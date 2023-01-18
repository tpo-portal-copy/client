import { Routes, Route } from 'react-router-dom'
import { Header } from '../components'
import { Dashboard, Profile } from '../pages'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
