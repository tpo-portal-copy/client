import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import styles from './Experiences.module.scss'
import { ExperienceCardProps } from '../../utils/types'
import { ExperienceCard, ExperiencesSidebar, ExperiencesFilters } from '../../components'
import { interviewExperienceInfoList } from '../../utils/Data/interviewExperienceData'

function Experiences() {
  const [openFilters, setOpenFilters] = useState(false)
  const [isLargerThan880] = useMediaQuery('(min-width: 880px)')

  return (
    <>
      <h1 className={styles.page_name}>Interview Experiences</h1>
      <div className={styles.display}>
        <div>
          {interviewExperienceInfoList.map((user: ExperienceCardProps) => (
            <ExperienceCard key={user.id} {...user} />
          ))}
        </div>
        <div className={styles.middle_right}>{isLargerThan880 && <ExperiencesFilters />}</div>
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
    </>
  )
}

export default Experiences
