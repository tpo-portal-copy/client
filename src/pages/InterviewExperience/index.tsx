import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import styles from './InterviewExperience.module.scss'
import { ExperienceCardProps } from '../../utils/types'
import {
  ExperienceCard,
  ExperiencesSidebar,
  InterviewExperienceFIlters,
  Modal,
} from '../../components'
import { interviewExperienceInfoList } from '../../utils/Data/interviewExperienceData'

function InterviewExperience() {
  const [openFilters, setOpenFilters] = useState(false)
  return (
    <div>
      <h1 className={styles.head}>Interview Experiences</h1>
      <div className={styles.display}>
        <div className={styles.middle_left}>
          {interviewExperienceInfoList.map((user: ExperienceCardProps) => (
            <div key={user.id} className={styles.card_margins}>
              <ExperienceCard {...user} />
            </div>
          ))}
        </div>
        <div className={styles.middle_right}>
          <InterviewExperienceFIlters setter={0} />
        </div>
        <div className={styles.right}>
          <FontAwesomeIcon
            onClick={() => {
              setOpenFilters(true)
            }}
            icon={faFilter}
            size="2x"
          />
          {openFilters && <ExperiencesSidebar setIsSidebarOpen={setOpenFilters} />}
        </div>
      </div>
    </div>
  )
}

export default InterviewExperience
