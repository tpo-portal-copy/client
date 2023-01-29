import { ExperiencesSidebarProps } from '../../utils/types'
import InterviewExperienceFIlters from '../InterviewExperienceFIlters'
import styles from './ExperiencesSidebar.module.scss'

function ExperiencesSidebar({ setIsSidebarOpen }: ExperiencesSidebarProps) {
  return (
    <div className={styles.containerbg}>
      <div className={styles.container}>
        <button onClick={() => setIsSidebarOpen(false)} className={styles.close}>
          &times;
        </button>
        <InterviewExperienceFIlters setter={18}  />
      </div>
    </div>
  )
}

export default ExperiencesSidebar
